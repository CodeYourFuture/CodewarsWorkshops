function findMissing(list) {
  const gaps = findGaps(list);
  //console.log(gaps);
  const max = findMax(gaps);
  console.log(`gaps ${gaps} max ${max}`);
  const lower = max.start;
  const upper = max.end;
  console.log(`lower ${lower} upper ${upper}`);
  const missing = lower + (max.end - max.start) / 2;
  return missing;
}

function findGaps(list) {
  let max = 0;
  const gaps = [];
  for (let i = 1; i < list.length; i++) {
    const diff = Math.abs(list[i] - list[i - 1]);
    gaps.push({ start: list[i - 1], end: list[i], diff: diff });
  }
  return gaps;
}

function findMax(gaps) {
  let max = 0;
  let maxGap;
  for (const gap of gaps) {
    if (gap.diff > max) {
      max = gap.diff;
      maxGap = gap;
    }
  }
  return maxGap;
}

module.exports = findMissing;
