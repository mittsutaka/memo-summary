const baseUrl = process.env.REACT_APP_BACKEND_END_POINT;

export const ApiEndPoint = {
  getFolders: `${baseUrl}/folders`,
  getMemo: `${baseUrl}/memos/`,
  getMemos: `${baseUrl}/memos?_expand=folder&_sort=updatedAt&_order=desc`,
  postMemo: `${baseUrl}/memos`,
  baseUrl: baseUrl,
};
