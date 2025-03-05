/* 
- เรากำลังสร้างเกมอยู่ ตัวละครในเกมของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. โจมตีผู้เล่นอื่น
    2. วิ่งหนีผู้เล่นอื่น
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

let damage = 30;
let run = true;

// Start Coding Here
function playerAction(callback, value){
    return callback(value);
}

function attack(damage){
    return (`💥 โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`)
}

function runAway(run){
    return run ? (`😨 หนีสำเร็จ! รอดตายหวุดหวิด!`): (`หนีไม่พ้น, ตุยเย่`);
}


// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(playerAction(attack, damage));  // 💥 โจมตีสำเร็จ! สร้างความเสียหาย 30 แต้ม
console.log(playerAction(runAway, run)); // 😨 หนีสำเร็จ! รอดตายหวุดหวิด!