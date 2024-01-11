let weight = prompt("Nhập cân nặng (kg):");
let height = prompt("Nhập chiều cao (m):");

let bmi = weight / (height * height);

console.log("Chỉ số BMI của bạn là: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log('Bạn đang ở trong tình trạng gầy.');
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log('Bạn có cân nặng bình thường.');
} else if (bmi >= 25) {
    console.log('Bạn đang ở trong tình trạng thừa cân.');
} else if (bmi > 25 && bmi < 29,9){
    console.log('Bạn đang ở trong tình trạng tiền béo phì.');
} else if (bmi > 30 && bmi < 34,9){
    console.log('Bạn đang ở trong tình trạng bé phì độ I.');
} else if (bmi > 35 && bmi < 39,9){
    console.log('Bạn đang ở trong tình trạng béo phì II');
} else if (bmi >= 40){
    console.log('Bạn đang trong tình trạng béo phì độ III');
}
