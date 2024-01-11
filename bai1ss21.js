let birthYear = prompt("Bạn sinh năm bao nhiêu?");
let currentYear = new Date().getFullYear();

if (isNaN(birthYear)) {
    console.log("Không hợp lệ");
} else {
    let age = currentYear - birthYear;
    console.log("Bạn " + age + " tuổi.");
}
