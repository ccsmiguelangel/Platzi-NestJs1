export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string; // Variables opcionales: name?
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}