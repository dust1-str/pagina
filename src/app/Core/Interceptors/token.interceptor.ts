import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  let role_id = localStorage.getItem('role_id');
  let headers = req.headers;
  if (token) {
    headers = headers.set('Authorization', 'Bearer ' + token);
  }
  if (role_id) {
    headers = headers.set('Role-Id', role_id);
  }
  console.log(headers);
  headers = headers.set('Accept', 'application/json');
  req = req.clone({ headers: headers });
  return next(req);
};
