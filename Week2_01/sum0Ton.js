const sum0ToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const n = 100;
console.log(sum0ToN(n));
