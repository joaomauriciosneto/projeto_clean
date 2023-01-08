# Instalações

## Gerais

### npm init
### npm i ts-node-dev --save-dev
### npm i -D typescript @types/node
### criação do tsconfig.json
### npm i -D jest @types/jest ts-jest
### npx jest --init (fazer a configuração igual a que está no arquivo)
### npm i validator
### npm i @types/validator -D
### npm i bcrypt
### npm i @types/bcrypt -D

## Banco de dados - MongoDB

### npm i -D @shelf/jest-mongodb
### npm i mongodb

### Olhar o que precisa ser instalado e configurado em: https://github.com/shelfio/jest-mongodb
---
## Para esse projeto, foi usado apenas o seguinte: 

### adicionar a seguinte linha no arquivo jest.config.js: 
### preset: '@shelf/jest-mongodb'

### criar um arquivo .js: jest-mongo-config.js, como a seguinte configuração:
<!-- module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
  },
}; -->

# Observação importante!

### até o momento de crição desse projeto (08/01/2023), foi preciso instalar as libs com esses comandos:

<!-- wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb

sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb -->

---
# Sobre alguns scprits do jest

### usado apenas nos commits:
#### "test:staged": "npm test -- --findRelatedTests"
---
# Obervações:

### Em caso de sucesso, não é preciso criar mock
