import { ServerError } from '../errors';
import {HttpResponse} from '../protocols/http';

// função feita para personalizar o erro 400 (badRequest)
export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

// função feita para personalizar o erro 500 (serverError)... não recebe parâmetro 
export const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}

// função feita para personlizar o caso de sucesso no cadastro
export const ok = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}

