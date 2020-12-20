function apiFetch(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('new Pormise');
            resolve('data')
        },3000)
    })
    return promise;
}

async function _async(){
    let data = await apiFetch()
    console.log(data, 'successful')
}

_async();