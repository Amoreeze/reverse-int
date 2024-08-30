module.exports = function reverse (n) {
  let newstr = '' + n;
  newstr = newstr.split('').reverse().join('');
  let newstrtoint = parseInt(newstr);
  return newstrtoint;
}
