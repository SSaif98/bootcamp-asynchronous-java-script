const randomBoolean= () => {
    return Math.floor(Math.random() *10) %2  === 0 ? true : false;
}
;
const resolveFunction = () =>{ 
    console.log('function resolve')
    return 2;
};


const rejectFunction = () =>  console.log('function rejected') ;

const result = new Promise((resolve, reject) =>{
 setTimeout( () => (randomBoolean() ? resolve() : reject()),2000)
});

result.then(resolveFunction)
.then(function(val){
    console.log(val);
    return val + 6;
})
.then(function(val2){
    console.log(val2)
})
.catch(rejectFunction);

console.log('hello world');
