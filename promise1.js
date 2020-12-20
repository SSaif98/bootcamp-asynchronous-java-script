let promise = new Promise(function(resolve, reject){
    setTimeout( function(){
        console.log('new promise');
        resolve();
        //reject();
    },2000)
})

promise.then(function(){
    console.log('resolved Promise')
})
.catch(function(){
    console.log('rejected promise');
    reject();
})