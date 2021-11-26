import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
export default class ProductDTO {
  id;
  nombre;
  precio;
  descripcion;
  codigo;
  foto;
  stock;
  timestamp;

  constructor(data) {
    this.id = uuidv4(),
    this.nombre = data.nombre;
    this.precio = data.precio;
    this.descripcion = data.descripcion;
    this.codigo = data.codigo;
    this.foto = data.foto;
    this.stock = data.stock;
    this.timestamp = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}