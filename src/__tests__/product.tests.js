import supertest from 'supertest';
import mongoose from 'mongoose';
import {connectToDB} from '../services/dbMongo'

import server from '../services/server';
import { expect } from 'chai';
import {Producto} from '../models/productos/DAOs/mongo'


describe('Test Productos', () => {
  let newMongo;
  let request;
  
    beforeAll(() =>{
      jest
      .spyOn(mongoose, 'createConnection')
      .mockImplementationOnce(() => '123');

    newMongo = new connectToDB();
    request = supertest(server);
  });

  afterAll(async() => {
    server.close();
    await mongoose.disconnect();

  });

  // test('Deberia recibir un array vacio si no existen productos', async () => {
  //   const mockData = [];

  //   jest
  //     .spyOn(Producto, 'find')
  //     .mockImplementationOnce(() => Promise.resolve(mockData));

  //   const expectedResponse = {
  //     data: mockData,
  //   };
  //   const response = await request.get('/api/productos');
  //   expect(response.body).to.deep.equal(expectedResponse);
  // });
  
  test('Deberia recibir una lista de productos: GET /  ', async () => {
    const response = await request.get(`/api/productos`);

    const expectedResponse = {
      data: response.body.data
    };
    
    expect(response.body).to.deep.equal(expectedResponse);
  });


 test('Deberia recibir un producto: GET /:id  ', async () => {
    const mockData = [{
      __v: 0,
       _id: "619d450dfd44900905492464",
        nombre:"aaaa", 
        precio:100, 
        descripcion:"aaa rojo",
        codigo:123456,
        foto:"jpg",
        stock:27
   }];

    jest
      .spyOn(Producto, 'find')
      .mockImplementationOnce(() => Promise.resolve(mockData));

    const expectedResponse = {
      data: mockData,
    };
    const response = await request.get('/api/productos');
    const id = response.body.data[0]._id;
    const productId = await request.get(`/api/productos/${id}`);
    expect(productId.body).to.deep.equal(expectedResponse);
  });



  test('Deberia almacenar un producto correctamente, POST /agregar',async () => {
    jest.spyOn(Producto.prototype, 'save').mockResolvedValueOnce('ok');
    const mockProductos ={nombre:'lapiz', precio:100, descripcion:'color rojo',codigo:123456,foto:'jpg',stock:27,
    };
    const response = await request.post('/api/productos/agregar').send(mockProductos);
    expect(response.status).to.eql(200);

    const expectedBody = {
      msg: "Productos agregado con exito"
    };

   
    expect(response.body).to.deep.equal(expectedBody);
    
  });

  
  
  test('Deberia modificar un producto correctamente, PUT /actualizar/:id',async() =>{

    const mockProducto = [{
            __v: 0,
             _id: "619d450dfd44900905492464",
              nombre:"aaaa", 
              precio:100, 
              descripcion:"aaa rojo",
              codigo:123456,
              foto:"jpg",
              stock:27
         }];
    jest
    .spyOn(Producto, 'find')
    .mockImplementationOnce(() => Promise.resolve(mockProducto) )

    const getProducto = await request.get('/api/productos');
    const getId = getProducto.body.data[0]._id;

    const mockProductoUpdate =[{nombre:'TEST'}];

    const response = await request.put(`/api/productos/actualizar/${getId}`).send(mockProductoUpdate);
     expect(response.status).to.eql(200);

    const expectedBody = {
      msg: "Actualizando los productos"
    };

    expect(response.body).to.deep.equal(expectedBody);
  })

  test('Eliminar un producto correctamente, DELETE /borrar/:id',async() =>{
    const mockProducto = [{
      __v: 0,
       _id: "619d450dfd44900905492464",
        nombre:"aaaa", 
        precio:100, 
        descripcion:"aaa rojo",
        codigo:123456,
        foto:"jpg",
        stock:27
   }];
    jest
    .spyOn(Producto, 'find')
    .mockImplementationOnce(() => Promise.resolve(mockProducto) )

    const getProducto = await request.get('/api/productos');
    const getId = getProducto.body.data[0]._id;
    const response = await request.delete(`/api/productos/borrar/${getId}`);

    expect(response.status).to.eql(200);

    const expectedBody = {
      msg: "Producto eliminado"
    };

    expect(response.body).to.deep.equal(expectedBody);

  })
});