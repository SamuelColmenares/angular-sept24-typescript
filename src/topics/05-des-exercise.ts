 export interface Product {
  description: string;
  price: number;
}



 export interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

 export function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;
  const {products, tax} = options;

  products.forEach((product) => {
    total += product.price;
  });

  return [total, total * tax];
}




