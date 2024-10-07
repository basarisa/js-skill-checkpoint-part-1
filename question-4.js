// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

function checkMinInventory(inventory) {
  let minInInventory = inventory[0]["price"];
  let minFruit = inventory[0]["name"];

  for (let fruit of inventory) {
    if (fruit["price"] < minInInventory) {
      minInInventory = fruit["price"];
      minFruit = fruit["name"];
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit} ซึ่งมี ${minInInventory} ชิ้น`;
}

console.log(checkMinInventory(inventory));
