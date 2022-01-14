import { Controller, Get, Param, Post, Body, Query, Put, Delete, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: 'yo soy un filter'
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({ // Forma express
      message: `product ${productId}`
    })
    // return {
    //   message: `product ${productId}`
    // };
  }

  @Post()
  create(@Body() payload: any) {
  // create(@Body('price') price: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id:number, @Body() payload: any){
    return {
      id,
      payload,
    }
  }
  @Delete(':id')
  delete(@Param(' ') id:number){
    return {
      message: 'Delete method',
      id,
    };
  }
}
