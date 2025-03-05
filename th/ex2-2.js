/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer: ทำให้ reuse ตัว highOrder ได้ง่าย, ลดการ duplicate,  maintain code ได้ง่าย

2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer:

อ่านง่ายขึ้นเพราะโค้ดลีนขึ้น เข้าใจง่ายขึ้นว่าตัวไหน 'function แม่' ตัวไหน 'function ลูก' ดูได้ง่ายว่าเมื่อเกิดเหตุการณ์อะไร higher จะไปคอลลูกตัวไหน


3. หากต้องสอนเพื่อนให้เข้าใจ allback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  

callback function กับ higher order เหมือนกับการสร้าง sandwish
ให้ higher order คือการประกอบร่าง sandwish โดยเรียกใช้วัตถุดิบต่างๆก็คือ callback function
Higher-Order Function (makeSandwich) เป็นตัว "ประกอบร่าง" แซนด์วิช
Callback Function (addMeat, addCheese, addVeggies) คือ "วัตถุดิบ"
ฟังก์ชันหลักจะเรียกใช้ callback ทีละตัว จนได้แซนด์วิชที่สมบูรณ์
*/

const makeSandWish = (...Callback) => {
    return Callback.map(Callback => Callback()).join(", ")
}

const addBread = () => `🍞 ใส่ขนมปัง`
const addMeat = () => "🥩 ใส่เนื้อ";
const addVeggy = () => "🥬 ใส่ผัก";
const addCheese = () => "🧀 ใส่ชีส";

console.log(makeSandWish(addBread, addMeat, addVeggy, addCheese));
console.log(makeSandWish(addBread, addMeat, addCheese));
console.log(makeSandWish(addBread,  addVeggy, addCheese));


