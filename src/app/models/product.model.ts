export interface Product { 
  id : number;
  name : string;
  price : string;
  available : boolean;
  best_seller : boolean;
  categories : Array<number>;
  img : string;
  description : string;
}
