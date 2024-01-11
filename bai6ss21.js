let toan = prompt("Nhập điểm môn Toán:");
let van = prompt("Nhập điểm môn Văn:");
let anh = prompt("Nhập điểm môn Anh:");

let dtb = (parseFloat(toan) + parseFloat(van) + parseFloat(anh)) / 3;

let xepLoai;

if (dtb >= 8.0 && dtb <= 10) {
    xepLoai = "GIỎI";
} else if (dtb >= 6.5 && dtb < 8.0) {
    xepLoai = "KHÁ";
} else if (dtb >= 5.0 && dtb < 6.5) {
    xepLoai = "TRUNG BÌNH";
} else {
    xepLoai = "YẾU";
}

alert("Điểm trung bình: " + dtb.toFixed(2) + "\nXếp loại: " + xepLoai);
