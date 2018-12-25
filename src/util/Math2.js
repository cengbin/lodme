/**
 * 数字四舍五入（保留n位小数）
 * @param {number} [number] 要四舍五入的数字
 * @param {number} [n] 保留的位数
 * */
function getFloat(number, n) {
  n = n ? parseInt(n) : 0;
  if (n <= 0) return Math.round(number);
  number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
  return number;
}