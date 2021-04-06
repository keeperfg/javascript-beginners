const person = {
  name: 'Vladilen',
  age: 26,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  'complex key': 'Complex Value',
  ['key_' + (1 + 3)]: 'Computed Key', // key_4
  // greet: function ()
  greet() {
    console.log('greet from person')
  },
  info() {
    console.log('this:', this)
    // console.info('Информация про человека по имени:', person.name)
    console.info('Информация про человека по имени:', this.name)
  }
}

console.log(person)

console.log(person.name)
const ageKey = 'age'
console.log(person['age'])
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()
console.log(person)

person.languages.push('by')
console.log(person)

person['key_4'] = undefined
delete person['key_4']
console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

const {name,age,languages, isProgrammer: lolo, key_4: toto =10} = person //та же запись, что и вверху
console.log(name,age,languages, lolo, toto)

//работа с полями объекта
for (let key in person)
{
  if (person.hasOwnProperty(key)) {// Проверка нужна чтоб не зайти в родительский объект () который __proto__
    console.log('Key:', key, ' Type of key:', typeof (person[key]), ' Value:', person[key]);
  }

}
//на замену
// const keys = Object.keys(person)
// console.log(keys);
// // for (let key of keys)
// // {
// //      console.log('Key:', key, ' Type of key:', typeof (person[key]), ' Value:', person[key]);
// // }
// keys.forEach(key =>console.log('Key:', key, ' Type of key:', typeof (person[key]), ' Value:', person[key]))
Object.keys(person).forEach(key =>console.log('Key:', key, ' Type of key:', typeof (person[key]), ' Value:', person[key]))

//Context
person.info()

const logger ={
  keys(){
     console.log('Object keys:', Object.keys(this))
  },
  keysAndValues(){
    const self = this
    // Object.keys(this).forEach(key =>console.log(`${key}: ${this[key]}`))
    Object.keys(this).forEach(function(key) { //!!! Function задает свой собственный контекст, this не работает
      console.log(`${key}: ${self[key]}`)

  });
    Object.keys(this).forEach(function(key) { //!!! Function задает свой собственный контекст, this не работает
      console.log(`${key}: ${this[key]}`)
    }.bind(this)) ///Сохраняем контекст
  },
  withParam(top = false, between = false, bottom = false){
    if (top)
    {
      console.log('---------- Start ----------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key}: ${this[key]}`)
      if (between && index!== array.length-1)
      {
        console.log('--------------------------')
      }
    })
    if (bottom)
    {
      console.log('---------- Stop ----------')
    }
  }
}
logger.keys()
//Привязывем метод к другому объекту
const bound = logger.keys.bind(logger)
bound()
const bound1 = logger.keys.bind(person)
bound1()
//вызов без привязки
logger.keys.call(person)
logger.keysAndValues.call(person)
logger.keysAndValues.call(logger)
logger.keysAndValues.call({a:1,b:2})

logger.withParam.call(person, true,true,true)
logger.withParam.apply(person, [true,true,true])

