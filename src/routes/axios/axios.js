// import axios from 'axios';

//  const getProducto = async (id) => {
//   const result = await axios.get('http://localhost:8080/api/productos/',null,{params:{
//     id
//   }})
//   return result
// };
//   export const getProduct = () => getProducto();


// const url = 'http://localhost:8080/api/productos/agregar/';

// const agregarProduct = async (data) => {
//   try {
//     const result = await axios.post('http://localhost:8080/api/productos/agregar/',data)
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const addProduct = () => agregarProduct();

// const actualizarProduct = async (id) => {
//   try {
//     const result = await axios.put('http://localhost:8080/api/productos/actualizar/',id)
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const updateProduct = () => actualizarProduct();


// const funcionAsyncDelete = async (id) => {
//   try {
//     const result = await axios.delete('http://localhost:8080/api/productos/borrar',id);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const deleteProduct = () => funcionAsyncDelete();