let num = prompt("Nhập vào một số:");
let day;

switch (num) {
    case '2':
        day = 'Monday';
        break;
    case '3':
        day = 'Tuesday';
        break;
    case '4':
        day = 'Wednesday';
        break;
    case '5':
        day = 'Thursday';
        break;
    case '6':
        day = 'Friday';
        break;
    case '7':
        day = 'Saturday';
        break;
    case '8':
        day = 'Sunday';
        break;
    default:
        day = 'Không hợp lệ';
}

console.log(day);
