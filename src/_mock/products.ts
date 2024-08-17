import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

const PRODUCT_NAME: string[] = [
  'Nike Air Force 1 NDESTRUKT',
  'Nike Space Hippie 04',
  'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
];

const PRODUCT_COLOR: string[] = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export interface Product {
  id: string;
  cover: string;
  name: string;
  price: number;
  priceSale: number | null;
  colors: string[];
  status: string | undefined;
}

export const products: Product[] = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/src/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: parseFloat(faker.commerce.price({ min: 4, max: 99, dec: 2 })),
    priceSale: setIndex % 3 ? null : parseFloat(faker.commerce.price({ min: 19, max: 29, dec: 2 })),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']) || undefined,
  };
});
