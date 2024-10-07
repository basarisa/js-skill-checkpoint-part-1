// Question #3

// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
  const length = userPassword.length; //ตรวจสอบควมยาวตัวอักษรใน พารามิเตอร์ userPassword

  if (length > 10) {
    return "Strong";
  } else if (length >= 6 && length <= 10) {
    return "Medium";
  } else {
    return "Weak";
  }
}

let userPassword = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword));

userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));

userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));
