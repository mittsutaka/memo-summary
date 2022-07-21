import { Folder } from "../folder/type";

export type Memo = {
  id: string;
  title: string;
  folder: Folder;
  folderId: string;
  contents?: string;
  updatedAt: Date;
};
