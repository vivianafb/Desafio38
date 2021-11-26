import minimist from 'minimist';
import dotenv from 'dotenv';
dotenv.config();

const optional = {
    alias: {

    },
    default: {
        port:'8080',
        cluster:false
    }
}

export const args = minimist(process.argv.slice(2),optional);


export const Argumentos = args; v
export const portArg = args.puerto || 8080;
