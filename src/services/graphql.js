import { buildSchema } from 'graphql';
import { getProductosGraph ,addProductoGraph} from '../controllers/productoGraphl';

export const graphqlSchema = buildSchema(`
    type Query {
        getProductosGraph: [Product]
    }
    type Mutation {
        addProductoGraph( nombre:String!
            precio: Int!
            descripcion: String!
            codigo: Int!
            foto: String!
            stock: Int!): Product
    }
    type Product {
        _id: String 
        nombre:String
        precio: Int
        descripcion: String
        codigo: Int
        foto: String
        stock: Int
    }
`);

export const graphqlRoot = {
    getProductosGraph,
    addProductoGraph

};