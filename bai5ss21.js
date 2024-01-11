let month = +prompt("Nhập vào số tháng:");
let year = +prompt("Nhập vào năm:");
console.log(month);
console.log(year);

let days;

if (month == 2) {
    let leapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    days = leapYear ? 29 : 28;
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
} else {
    days = 31;
}

alert(`Tháng ${month} năm ${year} có ${days} ngày.`);
