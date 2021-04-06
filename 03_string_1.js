//
function logPerson (s,name,age)
{
    console.log(s,name,age)
    if (age<0)
    {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Ivan'
const personName1 = 'Максим'
const personAge = 43
const personAge1 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`
const output1 = logPerson`Имя: ${personName1}, Возраст: ${personAge1}`
console.log(output)
console.log(output1)