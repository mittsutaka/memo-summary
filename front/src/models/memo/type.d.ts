import { Category } from "../category/type";

export type Memo = {
  Id: number;
  Title: string;
  Category: Category;
  Contents?: string;
  UpdatedAt: string;
};
