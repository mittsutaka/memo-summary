const ZeroPadding = (num: number, offset: number) => {
  return ("0" + num).slice(offset);
};

//　もっといい方法あると思う
//　formatを引数に取りたい

export const FormatDateString = (ds: Date) => {
  const date = new Date(ds);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${ZeroPadding(date.getMinutes(), -2)}:${ZeroPadding(date.getSeconds(), -2)}`;
};

export default FormatDateString;
