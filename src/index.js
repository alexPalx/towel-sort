module.exports = function towelSort(matrix) {
  if (arguments.length === 0) return [];
  return matrix.map((arr, i) => i % 2 === 0 ? arr : arr.reverse()).flat(Infinity);
}
