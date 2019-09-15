const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const strArr = str.split('');

const random = function(n) {
  let str = '';
  for(let i = 0; i < n; i ++) {
    let index = Math.floor(Math.random() * 52)
    str += strArr[index]
  }
  return str
}
export {random}