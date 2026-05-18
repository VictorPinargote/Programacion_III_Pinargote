import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'; // Agregamos Put aquí
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }

  @Post("/products")
  createPorduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get("/products/:id") // Corregido: Agregamos /:id para que no choque con findAll
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  update(
    @Param("id") id: string,
    @Body() updatedProduct: ProductDto): any {
    return this.appService.update(id, updatedProduct); // Corregido: updatedProduct con "d"
  }
  
  @Delete("/products/:id")
  deleteById(@Param("id") id: string): ProductDto {
    return this.appService.deleteById(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any {
    return this.appService.areaTriangulo(data);
  }
}