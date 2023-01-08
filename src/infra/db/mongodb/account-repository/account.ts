import {AddAccountRepository} from '../../../../data/protocols/add-protocols-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import {MongoHelper} from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    // com essa variárvel criada, agora temos acesso aos métodos do banco de dados
    const accountCollection = MongoHelper.getCollection('accounts');
    // retorna o resultado da operação e não um registro criado
    const result = await accountCollection.insertOne(accountData);  
    const account = result.insertedId

    const accountResult = {
      id: account.id.toString(),
      name: accountData.name,
      email: accountData.email,
      password: accountData.password
    }
    console.log(account);
    console.log('depois do account');    
    
    //const {_id, ...accountWithoutId} = account;
        
    //return Object.assign({}, accountWithoutId, {id: _id});
    return accountResult;
  }
}
