import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [{
    id: 2,
    name: 'Laptop DELL',
    price: 1000,
    stock: 10
  }];

  getHeath(): any {
    return {
      status: 'Online',
      service: 'blog service api',
      version: '0.0.1',
      date: new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct: ProductDto = {
      ...product, // Corregido: Primero esparcimos el producto...
      id: Math.floor(Math.random() * 1000) + 1 // ...luego asignamos nuestro propio ID para que no se sobreescriba
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): ProductDto[] {
    return this.products;
  }

  findById(id: string): ProductDto {
    return this.products.find(product => product.id === Number(id))!;
  }

  update(id: string, updatedProductDto: ProductDto): any {
    const product = this.products.find(product => product.id === Number(id));
    if (!product) {
      return;
    }
    Object.assign(product, updatedProductDto);
    return product;
  }

  deleteById(id: string): any {
    const index = this.products!
        .findIndex(product => product.id === Number(id))!;
    if (index === -1){
      return;
    }
    const deleteProduct = this.products[index];
    this.products.splice(index, 1);
    return deleteProduct;
  }

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura)/2;
    return {
      "base": data.base,
      "altura": data.altura,
      "areatriangulo": area
    };
  }
}