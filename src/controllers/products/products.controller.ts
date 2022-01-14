// import { Controller, Get, Param, Post, Body, Query, Put, Delete, HttpStatus, HttpCode, Res, ParseIntPipe } from '@nestjs/common';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // Res,
} from '@nestjs/common';
// import { Response } from 'express';
// import { retry } from 'rxjs';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ParseIntPipe } from '../../common/pipe/parse-int/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'yo soy un filter',
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  // getOne(@Res() response: Response, @Param('productId') productId: string) {
  // getOne(@Param('productId') productId: string) {
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
    // return this.productService.findOne(+productId); //transfroma a int
    // response.status(200).send({ // Forma express
    //   message: `product ${productId}`
    // })
    // ó
    // return {
    //   message: `product ${productId}`
    // };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // create(@Body('price') price: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // }
    return this.productService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   message: 'Delete method',
    //   id,
    // };
    return this.productService.remove(+id);
  }
}
