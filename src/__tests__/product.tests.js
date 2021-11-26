// import supertest from 'supertest';
// import mongoose from 'mongoose';
// import {connectToDB} from '../services/dbMongo'
// import {getProduct,addProduct,updateProduct,deleteProduct} from '../routes/axios/axios'
// import server from '../services/server';
// // import { expect } from 'chai';
// import axios from 'axios';
// describe('Test Productos', () => {
//   let newMongo;
//   let request;
  
//     beforeAll(() =>{
//       jest
//       .spyOn(mongoose, 'createConnection')
//       .mockImplementationOnce(() => '123');

//     newMongo = new connectToDB();
//     request = supertest(server);
//   });

//   afterAll(async() => {
//     server.close();
//     await mongoose.disconnect();

//   });


//   test('Deberia recibir una lista de productos: GET /  ', async () => {
//     const expectedValue = {
//       __v: 0,
//       _id: "619d450dfd44900905492464",
//        nombre:"Obtener producto", 
//        precio:100, 
//        descripcion:"Get",
//        codigo:123456,
//        foto:"jpg",
//        stock:27
//     };
//     const miAxios = jest.spyOn(axios, 'get').mockImplementation(() => {
//       return new Promise((resolve) => {
//         resolve({
//           data: expectedValue,
//         });
//       });
//     });

//     const axiosResponse = await getProduct()
//     expect(miAxios).toHaveBeenCalled();
//     expect(axiosResponse.data).toEqual(expectedValue);
//   });


//  test('Deberia recibir un producto: GET /:id  ', async () => {
//     const expectedValue = [{
//       __v: 0,
//        _id: "619d45b5318dc384b7694817",
//         nombre:"Obtener producto", 
//         precio:100, 
//         descripcion:"Get",
//         codigo:123456,
//         foto:"jpg",
//         stock:27
//    }];

//     const miAxios = jest.spyOn(axios, 'get').mockImplementation(() => {
//       return new Promise((resolve) => {
//         resolve({
//           data: expectedValue,
//         });
//       });
//     });
//     const id = '619d45b5318dc384b7694817';
//     const axiosResponse = await getProduct(id);
    
//     expect(axiosResponse.data[0]._id).toEqual(id);
//     expect(axiosResponse.data).toEqual(expectedValue);
//   });



//   test('Deberia almacenar un producto correctamente, POST /agregar',async () => {
//     const expectedValue = [{
//       __v: 0,
//        _id: "619d45b5318dc384b7694817",
//         nombre:"Agregar producto", 
//         precio:100, 
//         descripcion:"Add",
//         codigo:123456,
//         foto:"jpg",
//         stock:27
//    }];
//     const miAxios = jest.spyOn(axios, 'post').mockImplementation(() => {
//         return new Promise((resolve) => {
//           resolve({
//             data: expectedValue,
//           });
//         });
//     });

//     const axiosResponse = await addProduct(expectedValue);

//     expect(miAxios).toHaveBeenCalled();
//     expect(axiosResponse.data).toEqual(expectedValue);
    
//   });

  
  
//   test('Deberia modificar un producto correctamente, PUT /actualizar/:id',async() =>{

//     const expectedValue = [{
//             __v: 0,
//              _id: "619d45b5318dc384b7694817",
//               nombre:"Producto actualizado", 
//               precio:100, 
//               descripcion:"Update",
//               codigo:123456,
//               foto:"jpg",
//               stock:27
//          }];
//       const miAxios = jest.spyOn(axios, 'put').mockImplementation(() => {
//         return new Promise((resolve) => {
//           resolve({
//             data: expectedValue,
//           });
//         });
//     });
//     const id = '619d45b5318dc384b7694817';
//     const axiosResponse = await updateProduct(id);
//     expect(miAxios).toHaveBeenCalled();
//     expect(axiosResponse.data[0]._id).toEqual(id);
//     expect(axiosResponse.data).toEqual(expectedValue);
//   })

//   test('Eliminar un producto correctamente, DELETE /borrar/:id',async() =>{
//     const expectedValue = [{
//             __v: 0,
//              _id: "619d45b5318dc384b7694817",
//               nombre:"Producto Eliminado", 
//               precio:100, 
//               descripcion:"Delete",
//               codigo:123456,
//               foto:"jpg",
//               stock:27
//          }];
//         const miAxios = jest.spyOn(axios, 'delete').mockImplementation(() => {
//         return new Promise((resolve) => {
//           resolve({
//             data: expectedValue,
//           });
//         });
//     });

//     const id = '619d45b5318dc384b7694817';
//     const axiosResponse = await deleteProduct(id);
//     expect(miAxios).toHaveBeenCalled();
//     expect(axiosResponse.data).toEqual(expectedValue);

//   })
// });