function changeCalculation(price, money) { // สร้าง function รับค่า ค่าราคาของสินค้าและจำนวนเงินที่ลูกค้าจ่าย
  let cash = {
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  }; // สร้าง obj และกำหนดค่าใน obj เป็นคู่ key,value (ประเภทแบงค์ , จำนวนแบงค์)
  let change = money - price; // สร้างตัวแปร change ไว้เก็บค่าเงินทอน จาก money - price

  if (change < 0) { // เช็คว่าค่าในตัวแปรเงินทอน (change) มีค่าน้อยกว่า 0 ไหม ถ้าค่าในตัวแปรเงินทอน (change) มีค่าน้อยกว่า 0 แสดงว่าเงินไม่พอซื้อสินค้า
    return 'Money not enough'; // return ข้อความไปว่า 'Money not enough'
  } else {
    const keys = Object.keys(cash).reverse(); // ใช้ Object.keys() เพื่อนำค่า key แต่ละตัวใน object cash มาเรียงใน array โดยจะเรียงจาก 1 ถึง 500 จึงใช้ reverse() เพื่อกลับลำดับค่าของ array

    for (let i = 0; i < keys.length; i++) { // ใช้ for loop เพื่อเข้าถึงสมาชิกทุกตัวใน keys
      while (change >= keys[i] && change > 0) { // ใช้ while loop เช็คว่า change มีค่ามากกว่าหรือเท่ากับ keys ลำดับที่ i และ change มากกว่า 0 ไหม ถ้าใช่ก็
        cash[keys[i]] += 1; // บวก 1 ใน object cash index ที่ keys[i]
        change -= keys[i]; // อัพเดทค่าของ change โดยการเอา change ไปลบกับค่าของ keys ลำดับที่ i
      }
    }
  }
  return cash; // return object ของ cash ออกไป
}

console.log(changeCalculation(600, 1556)); // เรียกใช้ function changeCalculation()
console.log(changeCalculation(100, 130)); // เรียกใช้ function changeCalculation()
console.log(changeCalculation(90, 123)); // เรียกใช้ function changeCalculation()


// function ChangeCalculation(price, customerMoney) {
//   const change = price - customerMoney;
//   const cash = {
//     cash500: 0,
//     cash100: 0,
//     cash50: 0,
//     cash20: 0,
//     coin10: 0,
//     coin5: 0,
//     coin2: 0,
//     coin1: 0,
//   };

//   return;
// }

// while (change > 0) {
//   while (change >= 500) {
//     cash[500] += 1;
//     change -= 500;
//   }
//   while (change >= 100) {
//     cash[100] += 1;
//     change -= 100;
//   }
//   while (change >= 50) {
//     cash[50] += 1;
//     change -= 50;
//   }
//   while (change >= 20) {
//     cash[20] += 1;
//     change -= 20;
//   }
//   while (change >= 10) {
//     cash[10] += 1;
//     change -= 10;
//   }
//   while (change >= 5) {
//     cash[5] += 1;
//     change -= 5;
//   }
//   while (change >= 2) {
//     cash[2] += 1;
//     change -= 2;
//   }
//   while (change >= 1) {
//     cash[1] += 1;
//     change -= 1;
//   }
// }
