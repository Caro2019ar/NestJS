import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Get(':id')
  async getOne(@Param() params): Promise<Product> {
    return this.productsService.getOne(params.id);
  }
  @Post()
  async create(@Body() product: Product) {
    return this.productsService.create(product);
  }
  @Put()
  async update(@Body() product: Product): Promise<[number, Product[]]> {
    return this.productsService.update(product);
  }
  @Delete(':id')
  async delete(@Param() params) {
    return this.productsService.delete(params.id);
  }
}
