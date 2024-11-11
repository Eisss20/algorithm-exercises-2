function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && Number(pin).toString() === pin;
}


/// Number(pin) เช็คค่าตั้งแต่แปลงเป็น number สำเร็จ  ถ้าแปลงไม่สำเร็จจะเป็น false ไปเลย
//// .toString() หลังจากนั้นแปลงเป็น สติงให้เหมือนเดิม 
//// และนำผลลัพท์มา เทียบ pin



let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
