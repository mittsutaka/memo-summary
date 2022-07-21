import { Folder } from "../folder/type";

export type Memo = {
  id: string;
  title: string;
  folder: Folder;
  contents?: string;
  updatedAt: string;
};
