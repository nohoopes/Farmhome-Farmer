export class Product {
  id?: number = 0;
  name: string = '';
  weight: number = 0;
  unit: string = '';
  season: string = '';
  date: string = '';
  images: Array<{id: number, url:string}>;
}
