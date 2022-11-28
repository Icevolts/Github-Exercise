function countdown(count){
    let num = setInterval(function(){
        count--;
        if(num <=0){
        clearInterval(num);
        console.log('Done!')}
    else{
        console.log(num);
    }
 },1000)
}

function randomGame(){
    let num;
    let total=0;
    let count= setInterval(function(){
        num =Math.random();
        total++;
        if(num >0.75){
            clearInterval(count);
            console.log('This took ' + total + 'try(s) to complete.');
        }
    },1000);
}
