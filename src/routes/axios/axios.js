import axios from 'axios';
import { productoController } from '../../controllers/productoController';

export const getProducto = () => {
    axios
      .get('http://localhost:8080/api/productos/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

const url = 'http://localhost:8080/api/productos/agregar/';
const data = {
  id:1, 
  nombre:'DATA AXIOS', 
  precio:1245, 
  descripcion:'AXIOSSSS',
  codigo:765556,
  foto:'https://AXIOS.jpg',
  stock:2
}

const funcionAsync = async () => {
  try {
    const resp = await axios.post(url, data);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = () => funcionAsync();


const url2 = 'http://localhost:8080/api/productos/borrar/619aeb1566c5077058f3170c';
const data2 ='619aeb1566c5077058f3170c'
const funcionAsyncDelete = async () => {
  try {
    const resp = await axios.delete(`${url2}`);
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = () => funcionAsyncDelete();