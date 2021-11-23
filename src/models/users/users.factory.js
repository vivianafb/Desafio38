import { UsuarioAtlasDAO } from "./DAOs/mongo";
import {logger}  from '../../utils/logs'

export const TipoPersistencia = {
    LocalMongo : "LOCAL-MONGO",
    MongoAtlas : "MONGO-ATLAS",
  }
const tipo = TipoPersistencia;
export class userFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case TipoPersistencia.MongoAtlas:
        logger.info('RETORNANDO INSTANCIA CLASE MONGO ATLAS DE USUARIO');
        return new UsuarioAtlasDAO();

      case TipoPersistencia.LocalMongo:
        logger.info('RETORNANDO INSTANCIA CLASE MONGO LOCAL');
        return new UsuarioAtlasDAO(true);
        
    default:
        logger.info('Retornando Instancia Users Default');
        return new UsuarioAtlasDAO();
    }
  }
}