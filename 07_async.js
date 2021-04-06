//EVENT loop
// const timeOut = setTimeout(() => {
//     console.log('After timeout');
//     clearTimeout(timeOut)
// },2500)
// // clearTimeout(timeOut)
// const interval = setInterval(() => {
//     console.log('After Interval');
// },1000)
// clearInterval(interval);
//
// const delay = (callback, wait = 1000)=> {
//     setTimeout(callback, wait);
// }
//
// delay(()=>{
//     console.log('After 2 seconds');
//
// }, 2000)


//Promise - используется для уменьшения вложенности Callback'ов.
const delay = (wait = 1000, err= false)=> {
    const promise = new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve(`Задержка ${wait/1000} секунд`);
        }, wait);
        if (err)
        {
            reject('Что-то не так. Повтор');
        }
    });
    return promise;
}

delay (2500, true)
    .then(value=>console.log(value))//value передается из resolve
    .catch(err => console.error('Error: ', err))
    .finally(()=>console.log('Fin!'));

//Оборачиваем Callback
const getData = () => new Promise (resolve => resolve([
    1,1,2,3,5,8,13
]));

getData().then(data=>console.log(data));


//Упрощенная запись Promise
async function asyncExample(){
    // console.log(await delay(3000));
    try{
        const msgFromDelay = await delay(3000, true);
        console.log('Delay Message:', msgFromDelay);
        const data = await getData();
        console.log('Dats:', data);
    }
    catch (e) {
        console.error('Error try: ', e);
    }
    finally {
        console.log('Fin - 2!')
    }
}
asyncExample();
