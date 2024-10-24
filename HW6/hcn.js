//Ham tinh chu vi hinh chu nhat
const perimeter = (length, width) => 2 * (length + width);

//Ham tinh dien tich hinh chu nhat
const area = (length, width) => length * width;

//khai bao chieu dai va chieu rong
const length = 5;
const width = 3;

//Tinh chu vi va dien tich
const rectPerimeter = perimeter(length, width);
const rectArea = area(length, width);

//In ket qua 
console.log(`Chu vi hinh chu nhat: ${rectPerimeter}`);
console.log(`Dien tich hinh chu nhat ${rectArea}`);