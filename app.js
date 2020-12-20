const randomBoolean= () => {
    return Math.floor(Math.random() *10) %2  === 0 ? true : false;
}
;
const resolveFunction = () => console.log('function resolve');


const rejectFunction = () =>  console.log('function rejected') ;

const result = new Promise((resolve, reject) =>{
 setTimeout( () => (randomBoolean() ? resolve() : reject()),2000)
});

result.then(resolveFunction).catch(rejectFunction);

console.log('hello world');
