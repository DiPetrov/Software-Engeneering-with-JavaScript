function triangleStars(n) {
  for (let i = 1; i <= n; i++) {
    let dollars = '$';
    for (let j = 1; j < i; j++) {
      dollars += ' $';
    }
    console.log(dollars);
  }
}
triangleStars(3);
