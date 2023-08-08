let Random_number = parseInt(Math.floor(Math.random() * 20 + 1));
let score=20
function check_number(){
    let result;
    let number = parseInt(document.getElementById('guessed-number').value);
    // switch(number){
    //     case number===Random_number:
    //         result= 'Correct Number';
    //         console.log(number);
    //         break;
    //     case number>Random_number:
    //         result= 'Too High';
    //         break;
    //     case number<Random_number:
    //         result = 'Too Low';
    //         break;
    //     default:
    //         result = 'Something Unexpected';
    //         console.log(number);
    //         break;

    // }
    if (number==Random_number){
        result = 'Correct number'
        document.getElementById('highscore').innerHTML=`HighScore: ${score}`
        document.body.style.backgroundColor = "lightgreen"
        var element=document.getElementById('correct-number')
        element.innerHTML=number
        element.style.color='black'
        element.style.fontWeight='bold'
        element.style.fontSize='2rem'
    }else if(number>Random_number) {
        result = 'Too High'
        score-=1
    }
    else if (number<Random_number){
        result= 'Too low'
        score-=1
    }
    else{
        result= 'something unexpected'
    }

    console.log(result);

    document.getElementById('status').innerHTML=result
    document.getElementById('score').innerHTML= `Score: ${score}`
    

}
console.log(Random_number);