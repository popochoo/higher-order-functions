//часть 1
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach((name) => console.log(`Привет, ${name}`));

//часть 2
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number * 10);
console.log(newNumbers);

//часть 3
const numbers2 = [5, 12, 8, 130, 44];
const filteredNumbers2 = numbers2.filter((number) => number > 10);
console.log(filteredNumbers2);

//часть 4
const people = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
const filteredPeople = people.filter((person) => person.age > 18);
const newPeople = filteredPeople.map((person) => `${person.name} (${person.age} лет)`);
console.log(newPeople);

//часть 5
const sales = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
const resultSum = sales.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
}, 0);
console.log(resultSum);