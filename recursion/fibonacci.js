function fibs(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res;
}

function fibsRec(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const prev = fibsRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));