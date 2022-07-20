import { Folder } from "../folder/type";

export type Memo = {
  id: number;
  title: string;
  folder: Folder;
  contents?: string;
  updatedAt: string;
};
