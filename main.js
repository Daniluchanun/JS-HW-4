function rectangle(a, b) {
    return a * b;
}
console.log(rectangle(7, 4));



const PI = 3.14;
function circle(r) {
    return r * r * PI;
}
console.log(circle(4));



function cylinder(r, h) {
    return 2 * PI * r * (h + r);
}
console.log(cylinder(3, 7));



let arr1 = [22, 435, 45, 7, 78]
function arrToConsole (arr){
    for (const arrElements of arr) {
        console.log(arrElements);
    }
}
arrToConsole(arr1);



function paragraph(text){
    document.write(`<p>${text}</p>`);
}
paragraph('ekfnwekfnwjlkfbwjhfblwfbhewhj');



function UlLiToConsole(text){
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`);
}
UlLiToConsole('we all the same');



function LiToConsole (text, nums){
    document.write(`<ul>`)
    for (let i= 0; i < nums; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
LiToConsole('we all not the same', 5);



let primElem= [32, 'Arni Schwarznigger', true]
function builder (arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
builder(primElem);


function randomTitle(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
randomTitle([
    {id: 1, name: 'Arni', age: 46},
    {id: 2, name: 'Vanya', age: 45},
    {id: 3, name: 'Gad', age: 44},
    {id: 4, name: 'Vlad', age: 47},
    {id: 5, name: 'Anatoliy', age: 35},
]);



function minValue (numbers) {
    let min = numbers[0];
    for (const minElement of numbers) {
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;
}
console.log(minValue([3, 4, 5, 2, -1, 44, 23, -9, 0, 7, -7]));



function sum(arr){
    let item = 0;
    for (const arrElement of arr) {
        item = item + arrElement;
    }
    return item;
}
console.log(sum([3, 4, 5, 2, -1, 44, -23, -9, 0, 7, -7]));


function swap(arr, number1, number2){
    let first = arr[number1];
    arr[number1] = arr[number2];
    arr[number2] = first;

    return arr;
}
console.log(swap([11,22,33,44], 0, 1));




function exchange (sumUAH, currencyValue, exchangeValue){
    let chosenValue;
    for (const item of currencyValue){
        if (item.currency === exchangeValue){
            chosenValue = item;
        }
    }
    let result = sumUAH/chosenValue.value;
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));