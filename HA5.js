//HomeAssignment - Array

let numbers = [10, 30, 20];
numbers.push(40);
console.log(numbers)

numbers.pop();
console.log(numbers)

numbers.shift();
console.log(numbers);

numbers.unshift(50);
console.log(numbers);

console.log(numbers.includes(20));
console.log(numbers.indexOf(30))
console.log(numbers.join("-"));
console.log(numbers.reverse(""))
console.log(numbers.sort((a,b,c)=>a-b-c));
console.log(numbers.map((num)=>num*2));
console.log(typeof numbers.join());