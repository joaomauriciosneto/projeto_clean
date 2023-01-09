import {MongoHelper} from '../helpers/mongo-helper';
import { AccountMongoRepository } from './account';

describe('Name of the group', () => {
  beforeAll(async() => {
    await MongoHelper.connect(process.env.MONGODB_URL);
  })

  afterAll(async () => {
    await MongoHelper.disconnect();
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    // delete todos os registros da tabela
    await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository
  }

  test('Should return an account on success', async () => {
    const sut = makeSut();
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    // toBeTruthy() retorna um valor, não importa qual seja
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe('any_name');
    expect(account.email).toBe('any_email@mail.com');
    expect(account.password).toBe('any_password');
  });

});
