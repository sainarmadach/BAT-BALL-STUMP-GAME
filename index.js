let computerchoosen;
let score={
    win:0,
    lost:0,
    tie:0
};
        function generateComputerChoosen()
        {
            let range=Math.random()*3;
            
            if(range>0 && range <=1){
                return 'bat';
            }else if(range>1 && range <=2){
                return 'ball';
            }else{
            return'stump';
            }   
        }
function finalresult(userchoosen,computerchoosen)
{
    if(userchoosen==='stump')
    {
        if(computerchoosen=== 'ball'){
            score.lost++;
            return 'computer has won';
        }else if(computerchoosen=== 'bat'){
            score.win++;
            return 'user won';
        }else{
            score.tie++;
            return `It's a tie`;
        }
    }else if(userchoosen==='ball')
    {
        if(computerchoosen=== 'ball'){
            score.tie++;
            return `It's a tie`;
        }else if(computerchoosen=== 'bat'){
            score.lost++;
            return 'computer has won';
            
        }else{
            score.win++;
            return 'user won';
            
        }
    }else if(userchoosen==='bat'){
        if(computerchoosen=== 'ball'){
            score.win++;
            return 'user won';
        }else if(computerchoosen=== 'bat'){
            score.tie++;
            return `It's a tie`;
        }else{
            score.lost++;
            return 'computer has won';
        }
    }
}

function display(userchoosen,computerchoosen,result)
{
    alert(`user choosen is ${userchoosen} and computer choosen is ${computerchoosen} result is ${result}
    
    
    Total win : ${score.win}
    Total lost : ${score.lost}
    Total tie : ${score.tie}`);
}
