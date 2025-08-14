const promedio = (arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

console.log(promedio([10, 20, 30]));
