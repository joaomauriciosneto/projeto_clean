import {MongoHelper} from '../helpers/mongo-helper';
import { AccountMongoRepository } from './account';

describe('Name of the group', () => {
  beforeAll(async() => {
    await MongoHelper.connect(process.env.MONGODB_URL);
  })

  afterAll(async () => {
    await MongoHelper.disconnect();
  })

  test('Should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    })

    // toBeTruthy() retorna um valor, não importa qual seja
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account).toBe('any_name');
    expect(account).toBe('any_email@mail.com');
    expect(account).toBe('any_password');
  });

});
