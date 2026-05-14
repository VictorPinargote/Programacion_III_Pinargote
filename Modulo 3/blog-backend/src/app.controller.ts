import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get("/health")
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }
}