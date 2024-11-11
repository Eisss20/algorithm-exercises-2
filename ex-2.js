function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) return [];

  let countPositives = 0;
  let sumOfNegative = 0; 

  for (let number of input ) {
    if (number > 0 ) {
      countPositives += 1 ;
    } else if (number < 0 ) {
      sumOfNegative += number
    }
}
return [countPositives,sumOfNegative,]

}

/// เก็บค่า จำนวนผลบวก และ เก็บค่าผลรวมของจำนวนลบ
/// นำมาลูปเพื่อตรวจสอบค่า array ว่ามีทั้งหมดผลบวกกี่จำนวน 
/// นำมาลูปเพื่อรวมค่า array ที่เป็นผลลบ

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);

console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
