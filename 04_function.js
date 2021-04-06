// Функции
// Function Declaration
function greet(name) {
    console.log('Привет, ',name)
    
}
greet('Лена')



//Function Expression

const greet2 =function (name) {

    console.log('Привет 2 -, ',name)
}
greet2('Ivan')
console.dir(greet2)

//Анонимные функции
 let counter =0
// setInterval(function (){
//     console.log(++counter)
// },1000)
// const interval = setInterval(function ()
// {
//     if (counter === 5 )
//     {
//         clearInterval()
//     } else {
//         console.log(++counter)
//     }
// },1000)

counter=0
// const interval1 = setTimeout(function ()
// {
//     if (counter === 5 )
//     {
//         clearTimeout(interval1)
//     } else {
//         console.log(++counter)
//     }
// },1000)

//Стрелочные функции

// function greet(name) {
//     console.log('Привет, ',name)
//
// }
const greet3 = (name) =>
{
    console.log('Привет, ',name)
}
greet3('Konstant')

const greet4 = name =>console.log('Привет, ',name)
greet4('Zhenya')
const pow2 = num => num**2
console.log(pow2(5))
// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//     () => alert('Привет') :
//     () => alert("Здравствуйте!");
//
// welcome(); // теперь всё в порядке

//4 параметры по уморлчанию
const sum =(a, b) => a + b
const sum1 =(a =40, b=a+4) => a + b

console.log(sum(5,6))
console.log(sum1(5))

function sumAll(...all) {
    let res =0
    for (let num of all)
    {
        res+=num
    }
    console.log(all)
    return res
}
let g = sumAll(1,2,3,4,5,6,7)
console.log(g)

// 5 Замыкания (Для создания приватных переменных)
function createMember (name)
{
    return function (lastName)
    {
        console.log(name+lastName)
    }
}
const logWithLastName = createMember('Ivan')
console.log(logWithLastName('Kuzmin'))
console.log(logWithLastName('Ivanov'))