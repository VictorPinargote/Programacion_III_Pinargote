import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { TrianguloDto } from './triangulo.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post('/products')
  @UseGuards(JwtAuthGuard)
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get('/products')
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get('/products/:id')
  findById(@Param('id') id: string): ProductDto | undefined {
    return this.appService.findById(id);
  }

  @Put('/products/:id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updatedProduct: ProductDto
  ): any {
    return this.appService.update(id, updatedProduct);
  }

  @Delete('/products/:id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string): any {
    return this.appService.delete(id);
  }

}