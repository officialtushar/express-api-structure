import dotenv from 'dotenv';

dotenv.config();

class Constant {

    cred;

    constructor() {
        console.log('environemnt in const', process.env.NODE_ENV)
        var envVarible = process.env.NODE_ENV;
        

        console.log('environemnt variable', envVarible)

        if(envVarible === 'dev') {
            console.log('environment matched to dev');
            return this.dev()
        }
        if(envVarible === 'prod') {
            console.log('environment matched to prod');
            return this.prod()
        }

        
    }

    dev() {
        this.cred = {
            port: 3000,
            mongodb: {
                url: 'mongodb://localhost:27017/tushar'
            }
        }
    }

    prod() {
        this.cred = {
            port: 80,
            mongodb: {
                url: 'mongodb://localhost:27017/tushar'
            }
        }
    }

}

export default new Constant().cred