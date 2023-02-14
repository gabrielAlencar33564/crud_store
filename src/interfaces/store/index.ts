export interface IProductRequest {
  name: string;
  category: string;
  quantity: number;
}

export interface IProductResponse extends IProductRequest {
  id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | string;
}

export interface IProductRequestUpdate {
  name?: string;
  category?: string;
  quantity?: number;
}
