const cars =['Mazda','Mers','BMW','Ford']
const primArray =[1,1,2,3,5,8,13,'21',true,{}]
const fib =[1,1,2,3,5,8,13,'21']
console.log(cars)
console.log(primArray);
console.log(fib)

cars.push('Renault') //Добавляем в конец
cars.unshift('Lada')
console.log(cars)
const firstItem=cars.shift()
console.log(cars)
const lastItem=cars.pop()
console.log(cars)

console.log(cars.reverse());
console.log(cars)

const text = 'Hello, We are learning JavaScript'
const reverseText = text.split(',')
const reverseText1 = text.split('').reverse().join('')
console.log(reverseText);
console.log(reverseText1);

const index =cars.indexOf('BMW')
const index1=cars.indexOf('BMW1')
cars[index]='Porsche'
cars[index1] = 'Tatra'
console.log(cars);

console.log(cars.includes('Mazda'));

const upperCaseCars = cars.map(car=>car.toUpperCase())
console.log(upperCaseCars);

const pow2fib = fib.map(num=>num**2)
console.log(pow2fib);


const pow2=num=>num**2
const fibTest=fib.map(pow2).map(Math.sqrt)
console.log(fibTest);
console.log(fibTest.filter(num => num < 4));


const pow3 = num=>num**3;
const pow3fib = fib.map(pow3)
console.log(pow3fib);


//Поиск
const people =[
    {name: 'Ivan', budget: 4300},
    {name: 'Vova', budget: 4200},
    {name: 'Mitya', budget: 1700}
]
function myFind(budget) {


    for (let person_for of people) {
        if (person_for.budget === budget) {
            return person_for
        }
    }
}

console.log(myFind(4200));


const index3=people.findIndex(function (person){
    return person.budget ===4200
})
console.log(index3);

const person=people.find(function (person){
    return person.budget ===4200
})
console.log(person);

const person1=people.find(person=> person.budget ===4200)
console.log(person1);

const sumAll=people.reduce((acc,person)=>{
    if (person.budget>2000) {
        acc += person.budget
    }
    return acc},0)
console.log(sumAll);

const sumAll_if=people.filter(person => person.budget > 2000).reduce((acc,person)=>
acc += person.budget,0)
console.log(sumAll_if);