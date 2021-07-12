const main = (arr) => {
  const org = JSON.parse(JSON.stringify(arr));
  const asc = arr.sort();
  const desc = org.sort().reverse();
  const updated = [];
  for (var i = 0; i < arr.length / 2; i++) {
    updated.push(asc[i]);
    updated.push(desc[i]);
  }
  console.log(updated);
  return updated;
};
main([1, 2, 3, 4, 5, 6, 7]);
module.exports = {
  main,
};
