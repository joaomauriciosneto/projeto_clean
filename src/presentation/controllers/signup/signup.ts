import {HttpRequest, HttpResponse, Controller, EmailValidator, AddAccount} from './signup-protocols';
import {MissingParamError, InvalidParamError} from '../../errors/';
import {badRequest, serverError, ok} from '../../helpers/http-helpers';

// CLASSE DE PRODUÇÃO

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount
  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }
  
  // foi criada uma pasta /protocols, e dentro dela foi criada duas interfaces para tipar o httpRequest e o httpResponse.
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    // esse try, garante o tratamento do erro 500 (em um dos testes feitos)
    try{
        /**
       * Antes era assim. Para não ficar dando if's, foi criado um for, para passar todos os parâmetros possíveis.
       */
      // if(!httpRequest.body.name) {
      //   // retornando um badRequest pq está faltando um parâmetro 'nome'
      //   return badRequest(new MissingParamError('name'))
      // }

      // if(!httpRequest.body.email) {
      //   return badRequest(new MissingParamError('email'))
      // }

      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for(let field of requiredFields) {
        if(!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      // desestruturação para pegar diretamente de httpRequest
      const {name, email, password, passwordConfirmation} = httpRequest.body
      if(password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      // essa variável garante que o email passado no body do httResquest seja o mesmo do expect(isValidSpy)
      const isValid = this.emailValidator.isValid(email)
      
      if(!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account);

    } catch(error) {
      console.error(error)
      return serverError();
    }
  }
}
