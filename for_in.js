var person, x, txt;
person = {fname:'John', lname:'Doe', age:30};
txt = '';

for (x in person) {
    txt += person[x] + " ";
}
document.write(txt);

// for in loop object retern

var cars, x, txt; 
cars = ['Audi', 'Saab', 'Ford', 'Volvo'];
txt = '';

for (x in cars) {
    txt += cars[x] + '<br>';
}
document.write(txt);

// for in loop array return

var num, txt, x;
num = [1, 2, , 3, 4, 5, 6];
txt = '';

for (x in num) {
    txt += num[x] + '<br>';
}
document.write(txt);

// for in loop number return

var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
};
txt = "";
for (var x in person) {
    txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;

// for in loop object return
