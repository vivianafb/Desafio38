import mongoose from 'mongoose';
import {BaseRepository} from '../../repository/BaseRepository';

const mensajesCollection = 'mensajes';
const mensajeSchema = new mongoose.Schema({
    email: {type: String, required: true},
    mensaje: {type: String, required:true}
});

const model = mongoose.model(mensajesCollection, mensajeSchema);

export class MensajesModelMongoDb extends BaseRepository{};

export const mensajesModelMongoDb = new MensajesModelMongoDb(
    mensajesCollection,
    mensajeSchema,
  );