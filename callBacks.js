console.log('start')

function callback(){
    setTimeout( function(){
        console.log('callback')
    },300)
}
function callback2(){
    setTimeout( function(){
        console.log('callback2')
    },200)
}
function callback3(){
    setTimeout( function(){
        console.log('callback3')
    },100)
}

function func(){
    callback()
    console.log('func');
}
func();

function func2(){
    callback2()
    console.log('func2');
}
func2();

function func3(){
    callback3()
    console.log('func3');
}
func3();


console.log('end');