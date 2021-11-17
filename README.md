# Desafio 38
Graphiql: http://localhost:8080/graphql

{
  getProductosGraph{
    nombre
    precio
    descripcion
    foto
    stock
  }
}


mutation {
  addProductoGraph(nombre: "Producto1", precio: 1000, descripcion: "Producto1", codigo: 1, foto: "foto.jps", stock: 12) {
    nombre
    precio
    descripcion
    codigo
    foto
    stock
  }
}