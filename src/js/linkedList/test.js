const f = (n) => {
  if (n === 1) {
    console.log(`Exit N: ${n}`);
    return n;
  } else {
    console.log(`N: ${n}`);
    return n * f(n - 1);
  }
};

console.log(f(6));
