import {Collection, MongoClient} from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL,)
  },

  async disconnect(): Promise<void>  {
    if(!this.client) {
      await this.connect('mongodb://127.0.0.1:27017/myapp')
    }
    await this.client.close()
  },

  // funçao feita para acessar uma collection do mongodb
  getCollection(name: string): Collection {
    return this.client.db().collection(name);
  },

  // função da classe de produção (AccountMongoRepository)
  map: (collection: any, collectionData: any): any => {
    const accountResult = {
      id: collection.id.toString(),
      name: collectionData.name,
      email: collectionData.email,
      password: collectionData.password
    }
  
    return accountResult;
  }
  
}
