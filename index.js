const numbers = [10, 13, 20, 25, 38, 35, 40];

function tote(x) {
  return x >= 25;
}

const newarray = numbers.filter(tote);

function divisible(y) {
  return y%5==0;
}

 const arrdivid = numbers.filter(divisible);

function squared(z) {
  return z ** 2;
}
 const arrsquared=numbers.map(squared)

function multiplied(q){
    return q*2
}
const arrmulti=numbers.map(multiplied)

// parttttt 3 
function Greater20(x){
   return  x>=20
}
const ttarr= numbers.filter( Greater20).map(squared)

const q6arr=numbers.filter(x=>x%5==0).map(x=>x*3) // :) sahammm







console.log(arrdivid )
console.log(newarray);
console.log(arrsquared)
console.log(arrmulti)
console.log(ttarr)
console.log(q6arr)