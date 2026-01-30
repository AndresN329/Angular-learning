import { HttpInterceptorFn } from "@angular/common/http";

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Request:', req.url);
    return next(req);
}