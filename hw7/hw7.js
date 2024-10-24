// 1. Tạo một Map mới
const myMap = new Map();

// 2. Thêm cặp khóa-giá trị vào Map
myMap.set('name', 'Hoang'); // Khóa là chuỗi, giá trị là chuỗi
myMap.set('age', 25); // Khóa là chuỗi, giá trị là số
myMap.set(true, 'This is a boolean key'); // Khóa là boolean, giá trị là chuỗi
myMap.set({ city: 'Da Nang' }, 'City in Vietnam'); // Khóa là đối tượng, giá trị là chuỗi

console.log(myMap);