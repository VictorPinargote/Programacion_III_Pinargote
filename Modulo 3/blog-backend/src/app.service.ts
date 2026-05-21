import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { TrianguloDto } from './triangulo.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [];

  getHealth(): any {
    return {
      "status": "online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct: ProductDto = {
      ...product,
      id: Math.floor(Math.random() * 1000) + 1
    };

    this.products.push(newProduct);

    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }

  findAll(): ProductDto[] {
    return this.products;
  }

  findById(id: string): ProductDto | undefined {
    return this.products.find(p => p.id === parseInt(id));
  }

  update(id: string, updatedProduct: ProductDto): any {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    this.products[index] = { ...this.products[index], ...updatedProduct, id: parseInt(id) };
    return this.products[index];
  }

  delete(id: string): any {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    this.products.splice(index, 1);
    return { message: `Producto ${id} eliminado correctamente` };
  }

  calcularAreaTriangulo(triangulo: TrianguloDto): any {
    const area = (triangulo.base * triangulo.altura) / 2;
    return {
      base: triangulo.base,
      altura: triangulo.altura,
      area: area
    };
  }
}