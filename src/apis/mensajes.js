import {mensajesModelMongoDb} from '../models/mensajes/DAO/mongo'
const tipo = 'MONGO-ATLAS';

class MensajeAPI {
  async get(id) {
    if (id) return mensajesModelMongoDb.get(id);
    return mensajesModelMongoDb.get();
  }

  async save(mensajeData) {
    const newMensaje = await mensajesModelMongoDb.add(mensajeData);
    return newMensaje;
}
}
export const mensajesAPI = new MensajeAPI();