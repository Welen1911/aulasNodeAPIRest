import { RequestHandler } from "express";
import { Schema, ValidationError } from "yup";
import { StatusCodes } from "http-status-codes";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T>(Schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, Schema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;



export const validation: TValidation = (getAllSchemas) => async (req , res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errorsResult : Partial<Record<TProperty, Record<string, string>>> = {};

    Object.entries(schemas).forEach( ([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], {abortEarly: false}); 
        } catch (error) {
            const yupError = error as ValidationError;
            const validationErrors : Record<string, string> = {};
            yupError.inner.forEach(error => {
                if (error.path === undefined) return;
                validationErrors[error.path] = error.message;
            })

            errorsResult[key as TProperty] = validationErrors;
            
        }
    })
    if (Object.entries(errorsResult).length === 0) {
        next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({
                errors: errorsResult
            });
    }
};