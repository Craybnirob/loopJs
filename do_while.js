var txt = '';
var i = 0;

do {
    txt += i + '<br>';
    i++;
} while (i < 10);

document.write(txt);

// do while number return

var txt, i;
txt = '';
i = 10;

do {
    txt += i + '<br>';
    i--;
} while (i > 0);
document.write(txt);

// do while number reverse

var cars, len, txt, i;
cars = ['Audi', 'Saab', 'Ford', 'Volvo'];
len = cars.length;
txt = '';
i = 0;

do {
    txt += cars[i] + '<br>';
    i++;
} while (i < len);
document.write(txt);

// do while loop array return
