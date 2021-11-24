import { ProductosMemDAO } from './DAOs/memory';
import { ProductosFSDAO } from './DAOs/fs';
import { ProductosAtlasDAO } from './DAOs/mongo';
import { ProductosSQLDAO } from './DAOs/mysql';
import { ProductosSQLITEDAO } from './DAOs/sqlite';
import { logger } from '../../utils/logs';

import path from 'path';
export const TipoPersistencia = {
  Memoria : "MEM",
  FileSystem : "FS",
  MYSQL : "MYSQL",
  SQLITE3 : "SQLITE3",
  LocalMongo : "LOCAL-MONGO",
  MongoAtlas : "MONGO-ATLAS",
  Firebase : "FIREBASE",
}

export class NoticiasFactoryDAO {
  static instancia;

  static get(tipo) {
    switch (tipo) {
      case TipoPersistencia.FileSystem:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        const filePath = path.resolve(__dirname, './DAOs/products.json');
        logger.info('RETORNANDO INSTANCIA CLASE FS');
        return this.instancia = new ProductosFSDAO(filePath);   

      case TipoPersistencia.MongoAtlas:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        logger.info('RETORNANDO INSTANCIA CLASE MONGO ATLAS DE PRODUCTO');
        return this.instancia = new ProductosAtlasDAO();
        
      case TipoPersistencia.LocalMongo:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        logger.info('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
        return this.instancia = new ProductosAtlasDAO(true);
        
      case TipoPersistencia.MYSQL:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        console.log('RETORNANDO INSTANCIA CLASE MYSQL/MariDB LOCAL');
        return this.instancia = new ProductosSQLDAO();

      case TipoPersistencia.SQLITE3:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        logger.info('RETORNANDO INSTANCIA CLASE SQLITE');
        return this.instancia = new ProductosSQLITEDAO();

      default:
        if(!this.instancia) 
        logger.info('Instancia Nula. Inicializandola');
        logger.info('RETORNANDO INSTANCIA CLASE MEMORIA');
        return this.instancia = new ProductosMemDAO();
    }
  }
}
 NoticiasFactoryDAO.get(TipoPersistencia.MongoAtlas);