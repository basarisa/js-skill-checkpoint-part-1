// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
let totalPrice = 0;

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;

  for (let product of products) {
    totalPrice += product["price"] * product["quantity"];
  }

  if (promotionCode === "SALE20") {
    totalPrice = to *= 0.8; // ลด 20%
  } else if (promotionCode === "SALE50") {
    totalPrice *= 0.5; // ลด 50%
  }

  return totalPrice;
}

console.log(calculateTotalPrice(products, promotionCode));
