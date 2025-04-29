import { HttpInterceptorFn } from '@angular/common/http';


export const headerInterceptor: HttpInterceptorFn = (req, next) => {

    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('userData');
      if (userData) {
        req = req.clone({
          setHeaders: {
            token: userData
          }
        });
      }

  }


  return next(req);
};
