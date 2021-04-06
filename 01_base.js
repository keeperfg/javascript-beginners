// 1.Переменные
//camelCase
//var name = 'Дмитрий'; // НЕ ИСПОЛЬЗОВАТЬ!!!
let naame = 'Дмитрий'
const firstName='Дмитрий'
const lastName='Иванов' //string
let age = 43 //number
let isProgrammer =true //boolean
name = 'Hdd'
console.log(name)

//2. Мутирование
console.log('Имя человека: ' + firstName+' ' + 'а возраст человека ' + age)
console.log(age)
console.log(age.toString())
prompt('Введите фамилию')
alert('Имя человека: ' + firstName +' '+ 'а возраст человека ' + age)
const lastName1 = prompt( 'Введите фамилию')
alert('Имя человека:' + firstName +' '+ lastName1)

//3. Операторы
const currentYear = 2020
const birthYear = 1977
const newAge = currentYear - birthYear
console.log(newAge)
let a=10
const b= 10
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a++)
console.log(++a)
console.log(a+=b)


//4 Типы данных

console.log(typeof isProgrammer)
console.log(typeof firstName)
console.log(typeof age)
let x
console.log(typeof x)
console.log(typeof null)
console.log(null)

//5. Приоритет операторов  MDN Operator Precedence
const fullAge = 43
const currentYear1 = 2020
const birthYear1 = 1977
const isFullAge = currentYear1-birthYear1 >= fullAge

//6. Условные операторы
const  courseStatus='fail' //ready, fail, pending
if (courseStatus === 'ready') {
    console.log('Курс готов')
}
if (courseStatus === 'pending') {
    console.log('Курс в процессе')
}else if (courseStatus === 'ready') {
    console.log('Курс готов')
}
else {console.log('Курс пипец')}

let num1 =42 //number
let num2 = '42' //string
console.log(num1==num2) // true  приводится к одному типу данных
console.log(num1===num2) //false  строгое сравнение без приведения типа данных

const isReady =true

isReady ? console.log('Курс готов') : console.log('Курс в процессе')

//7 Булевая логика

// &&  ||  !
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

//8. Функции
function calcAge (year)
{
    return 2020 - year

}
console.log(calcAge(1977))
console.log(calcAge(1993))

function logInfoAbout(name, year) {
    const age = calcAge(year)
    console.log('Имя человека: ' + name+' ' + 'а возраст человека ' + age)
    
}

// 9. Массивы
const cars = ['мазда',"мерс","БМВ"]
console.log(cars)
const cars1 = new Array('мазда',"мерс","БМВ")
console.log(cars[1])
console.log(cars.length)
cars[0]='Porsche'
console.log(cars[0])
cars[3]='Lada'
console.log(cars.length)
cars[cars.length]='Ford'
console.log(cars)

//10. Циклы
for (let i =0;  i< cars.length; i++)
{
    console.log(i)
    const car = cars[i]
    console.log(car)
}

for (let car of cars)
{
    console.log(car)
}

// 11. Объекты
const person1 =new Object({})

const person = {
    firstName: 'Дмитрий',
    lastName:"Иванов",
    birthYear: 1977,
    hasWife: false,
    languages: ['Ru','En','De'],
    greet: function ()
    {
        console.log('greet')
    }

}
console.log(person)
console.log(person.firstName)
console.log(person['firstName'])
const key = 'languages'
console.log(person[key])
person.greet()
person.hasWife=true
person.isProgrsmmer = true //добавляем поля в объект