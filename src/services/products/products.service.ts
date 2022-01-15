import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    // if (product) {
    //   return product;
    // }
    if (!product) {
      // throw 'random error'; //error explicito algo salió muy mal
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
    // return this.products.find((item) => item.id === id);
  }

  create(payload: CreateProductDto) {
    console.log(payload)
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id:number, payload:UpdateProductDto){
    const product = this.findOne(id);
    if(product) {
      const index = this.products.findIndex((item) => item.id === id);
      // this.products[index] = payload;
      this.products[index] = {
        ...product,// realiza un mearch entre los dos array
        ...payload
      } 
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
