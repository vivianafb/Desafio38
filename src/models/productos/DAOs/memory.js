import productDTO from '../DTO/producto'
  export class ProductosMemDAO {
     productos = [];
  
    constructor() {
      const mockData = [];
  
      mockData.forEach((aMock) => this.productos.push(aMock));
    }
  
    findIndex(id) {
      return this.productos.findIndex((aProduct) => aProduct.id == id);
    }
  
    find(id) {
      return this.productos.find((aProduct) => aProduct.id == id);
    }
  
    async get(id) {
      if (id) {
        console.log(this.productos);
        return this.productos.filter((aProduct) => aProduct.id == id);
      }

      return this.productos;
    }
  
    async add(data) {
  
      const newItem = {
        id: (this.productos.length + 1).toString(),
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        codigo: data.codigo,
        foto: data.foto,
        stock: data.stock
      };
      // const dtoproduct = productDTO(newItem)
      const dtoproduct =this.productos.push(newItem);
  
      return new productDTO(dtoproduct);
    }
  
    async update(id, newProductData) {
      const index = this.findIndex(id);
      const oldProduct = this.productos[index];
  
      const updatedProduct = { ...oldProduct, ...newProductData };
      this.productos.splice(index, 1, updatedProduct);
      return updatedProduct;
    }
  
    async delete(id) {
      const index = this.findIndex(id);
      this.productos.splice(index, 1);
    }
  
    async query(options){
    //   type Conditions = (aProduct: ProductI) => boolean;
      const query = [];
  
      if (options.nombre)
        query.push((aProduct) => aProduct.nombre == options.nombre);
  
      if (options.precio)
        query.push((aProduct) => aProduct.precio == options.precio);
  
      return this.productos.filter((aProduct) => query.every((x) => x(aProduct)));
    }
  }

