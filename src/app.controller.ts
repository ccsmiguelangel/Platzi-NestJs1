// import { Controller, Get } from '@nestjs/common';
// import { Controller, Get, Param } from '@nestjs/common';
// import { Controller, Get, Query } from '@nestjs/common';

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//Decorador
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  newEndpoint(){
    return 'yo soy nuevo';
  }
  
  @Get('/ruta/') // puede causar problemas el decorador con slash (/)
  hello(){
    return 'con /sas/';
  }
  // @Get('products/filter') para enviar rutas dinamicas hay que colocarles antes de las rutas que reciben parámetros
  // getProducts(
  // ) {
  //   return `products filter`;
  // }
  // @Get('products/:productId') 
  // // getProducts(@Param('productId') params:string){
  // getProducts(@Param('productId') productId:string){
  //   return `product ${productId}`;
  // }

  // @Get('categories/:id/products/:productId')
  // getCategories(
  //   @Param('id') id:string, 
  //   @Param('productId') productId: string
  // ){
  //   return `product ${productId} and ${id}`;
  // }

  // @Get('products') 
  // getProducts(
  //   @Query('limit') limit:number,
  //   @Query('offset') offset:number,
  //   @Query('brand') brand: string,
  // ) {
  //   return `products limit=> ${limit}`;
  // }
}