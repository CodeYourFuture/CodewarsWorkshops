function findMissing(list) {
  const len = list.length;
  const first = list[0];
  const last = list[len - 1];

  const range = last - first;
  // remember that of a list of n elements (including the missing number),
  // there are n - 1 gaps.  len + 1 - 1 === len
  const expectedGap = range / len;

  /* console.log(
    `first is ${first}, last is ${last}, range is ${range}, expectedGap is ${expectedGap}`
  ); */
  for (let i = 1; i < len; i++) {
    const gap = list[i] - list[i - 1];
    if (gap !== expectedGap) {
      return list[i - 1] + expectedGap;
    }
  }
}

module.exports = findMissing;
