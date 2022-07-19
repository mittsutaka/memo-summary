//　もっといい方法あると思う
//　formatを引数に取りたい
const FormatDateString= (ds:string)=>{
    const date = new Date(ds);
    return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDay()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export default FormatDateString;