function changeCalculation(price, money) { // สร้าง function รับค่า ค่าราคาของสินค้าและจำนวนเงินที่ลูกค้าจ่าย
  const cash = {
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  }; // สร้าง obj และกำหนดค่าใน obj เป็นคู่ key, value (ประเภทแบงค์หรือเหรียญ, จำนวนแบงค์หรือเหรียญ โดยค่าเริ่มต้น = 0)
  const cashTypes = Object.keys(cash).reverse(); // ใช้ Object.keys() เพื่อนำทุก key ใน object cash มาเรียงใน array และเนื่องจาก key ที่สามารถแปลงให้เป็นตัวเลขได้จะถูกรียงจากน้อยไปมาก จึงใช้ reverse() เพื่อกลับลำดับค่าของ array
  const change = money - price; // สร้างตัวแปร change ไว้เก็บค่าเงินทอน โดยคิดจาก money - price
  
  if (change < 0) { // เช็คว่าค่าในตัวแปรเงินทอน (change) มีค่าน้อยกว่า 0 ไหม ถ้าค่าในตัวแปรเงินทอน (change) มีค่าน้อยกว่า 0 แสดงว่าเงินไม่พอซื้อสินค้า
    return 'Money not enough'; // return ข้อความไปว่า 'Money not enough'
  }
  
  let changeLeft = change; // สร้างตัวแปร changeLeft เพื่อเก็บค่าเงินทอนที่เหลือจากการคำนวณในแต่ละ loop โดยให้มีค่าเริ่มต้นเป็นค่าของ change
  
  for (const cashType of cashTypes) { // ใช้ for of loop เพื่อเข้าถึงสมาชิกทุกตัวใน cashTypes โดยให้ชื่อสมาชิกเป็น cashType
    while (changeLeft >= cashType) { // ใช้ while loop เช็คว่า changeLeft มีค่ามากกว่าหรือเท่ากับ cashType หรือไม่ ถ้าใช่ก็
      cash[cashType] += 1; // บวก 1 ให้กับค่าใน object cash ที่มี key เป็น cashType
      changeLeft -= cashType; // อัพเดทค่าของ changeLeft โดยการเอา changeLeft ไปลบด้วยค่าของ cashType
    }
  }
  return cash; // return object ของ cash ออกไป
}

console.log(changeCalculation(600, 1556)); // เรียกใช้ function changeCalculation()
console.log(changeCalculation(100, 130)); // เรียกใช้ function changeCalculation()
console.log(changeCalculation(90, 123)); // เรียกใช้ function changeCalculation()