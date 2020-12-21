function apiFetch(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('new Pormise');
             resolve('hello');
            // reject('Error Define');
        },3000)
    })
    return promise;
}

async function _async(){
        try{
            let data = await apiFetch()
            console.log( data,'successful')
          }
        catch(error){
            console.log( error,'Error')
                    }
               }
_async();