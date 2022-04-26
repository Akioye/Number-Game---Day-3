
let value = Math.floor(Math.random()*11)

let guesser = document.getElementById('summit').addEventListener('click',function(){
    //If you put the random number inside the button'click it will change every time you click
    let num = document.getElementById('input').value
    if( num == ''){
        document.getElementById('evaluate').innerHTML = 'Input needed to operate'
    }
    else if (num == value){
        console.log(`Correct ${value}`)        
        
    }
    else{
        console.log(`InCorect ${value}`)  
    }
})
