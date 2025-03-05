/* 
- เรากำลังสร้างเกมอยู่ ตัวละครในเกมของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. โจมตีผู้เล่นอื่น
    2. วิ่งหนีผู้เล่นอื่น
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

let damage = 30;
let escape = true;
// Start Coding Here
const playerAction = (callback) => callback();

const attack = () => `💥 โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`;
const runAway = () => escape ?`😨 หนีสำเร็จ! รอดตายหวุดหวิด!`: `หนีไม่พ้น, ตุยเย่เรียบร้อย`;


// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(playerAction(attack, damage));
console.log(playerAction(runAway, escape));