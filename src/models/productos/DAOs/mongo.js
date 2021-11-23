import mongoose from 'mongoose';
import Config from '../../../config/index'
import {connectToDB} from '../../../services/dbMongo'

const productsSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  precio: {type: Number, required:true},
  descripcion:{type: String, required:true, unique: true},
  codigo: {type: Number, required:true},
  foto: {type: String, required:true},
  stock: {type: Number, required:true}
});
const MongoAtlas = new connectToDB();
const AtlasMongoose = MongoAtlas.getConnection();
export const Producto = AtlasMongoose.model('productos', productsSchema);

export class ProductosAtlasDAO  {
   srv;
   productos;
   constructor(local) {
    this.productos = AtlasMongoose.model('productos', productsSchema);;
  }

  async get(id) {
    let output = [];
    try {
      if (id) {
        const document = await this.productos.findById(id);
        console.log(document);
        if (document) output.push(document);
      } else {
        output = await this.productos.find();
      }
      return output;
    } catch (err) {
      return output;
    }
  }

   async add(data) {
    // if (!data.nombre || !data.precio || !data.descripcion
    //   || !data.codigo || !! data.foto || !data.stock) throw new Error('invalid data');
    const newProduct = new this.productos(data);
    await newProduct.save();

    return newProduct;
  }

  async update(id, newProductData) {
    return this.productos.findByIdAndUpdate(id, newProductData);
  }

  async delete(id) {
    await this.productos.findByIdAndDelete(id);
  }

  async query(options){
    let query = {};

    if (options.nombre) query.nombre = options.nombre;

    if (options.precio) query.precio = options.precio;
 
    return this.productos.find(query);
  }
}

export const Product = mongoose.model('productos', productsSchema);