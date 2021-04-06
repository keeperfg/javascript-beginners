/*
Работа с DOM
 В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом.
 Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.
 Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы.
Реализуется в API браузера

 Например, document.body – объект для тега <body>.
*/
// window.alert('1'); // window - глобальный объект DOM. можно опускать. просто alert('1') - тоже самое
// window.prompt('ENTER  something');
// window.confirm('Agree with us');
// window.setInterval()
// window.setTimeout()



const helloMsg=document.getElementById('hello');
let color = window.getComputedStyle(helloMsg).color; //Получем текущий цвет элемнта
console.dir(color);
//Старые и медленные методы когда нет id
const heading2 = document.getElementsByTagName('h2')[0]; //возвращает в обЪекте-массиве HTMLCollection все h2
// console.dir(helloMsg);
console.log(heading2);
console.dir(heading2);

const heading2_1 = document.getElementsByClassName('h2-class')[0];//возвращает в обЪекте-массиве HTMLCollection
// все h2-class элементы
console.log(heading2_1);
console.dir(heading2_1);
// console.dir(helloMsg.id);
// console.dir(helloMsg.textContent);

//Новый метод поиска эоемента. Работает по селектору css. Возвращает первый попавшийся элемент
const heading2_2 = document.querySelector('h2');
const heading2_3 = document.querySelector('.h2-class');
const heading2_4 = document.querySelector('#sub-hello');

const nextElement = heading2.nextElementSibling; //следующий элемент после найденного
console.log(nextElement);

const h2list = document.querySelectorAll('h2');
console.log(h2list);
const heading3 = h2list[1];
console.log(heading3);

setTimeout(()=> {
    helloMsg.textContent = 'Changed from JavaScript!';
    changeStylesTo(heading3);
}, 1500);


function changeStylesTo(node)
{
if (window.getComputedStyle(helloMsg).color !== 'rgb(0,0,0)')
    {
        node.style.color = 'rgb(0,0,0)';
        // node.style.color = '#fff';
    }

    node.style.textAlign='center';
    node.style.backgroundColor ='green';
    node.style.padding='2rem';
}

//Events!!! https://developer.mozilla.org/ru/docs/Web/Events
helloMsg.onclick = () =>{
    console.log('Header clicked!');
}
helloMsg.ondblclick = () =>{
    console.log('Header double clicked!');
}


heading2.onclick = () =>{
    if (heading2.style.color === 'yellow')
    {
        heading2.style.color ='blue';
        heading2.style.backgroundColor ='yellow';
    }
    else
    {
        heading2.style.color ='yellow';
        heading2.style.backgroundColor ='blue';
    }
}
// heading3.ondblclick = () =>{
//     console.log('Header double clicked!');
// }
heading3.addEventListener('dblclick',() =>{
    console.log('Header double clicked!');})

const headingWithRef = h2list[2];
setTimeout(()=> {
    if (headingWithRef.hasChildNodes())
    {
        headingWithRef.childNodes[0].textContent = 'Third head 2 with href repaired!';
        //для ссылки, чтоб на всю длину
        headingWithRef.style.display='block';
        headingWithRef.style.width = '100%';
    }
    else
    {
        headingWithRef.textContent = 'Third head 2';
    }

}, 2500);
//Отменяем переход по ссылке
const href=headingWithRef.childNodes[0];
// const href=document.querySelector('a');

href.addEventListener('click', event=>{
    console.log(event);
    event.preventDefault();
    const url=event.target.getAttribute('href'); //event.target - содержимое блока
    window.location=url; //загружаем страницу
})