//make sandWish

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