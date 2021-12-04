var prizeMoney=0,score=0;

var kbc =[
    {
    question :"What is your name? \n (a).Avi \n (b).Abi",
    answer:"a",
    },
    {
        question:"Age?\n(a).23\n(b).24",
        answer:"a",
    },
    {
        question:"Qualification?\n(a).B.E \n (b).B.Tech",
        answer:"a",
    },
    ];
    for(var i=0;i<kbc.length;i++){
        var output=prompt(kbc[i].question);
        if(output==kbc[i].answer){
            alert("Correct answer!");
            prizeMoney+=1000;
            score++;
        }
        else{
            alert("WRONG answerr!");
            break;
        }
    }
    alert("Out of "+kbc.length+" questions "+score+ " were correct and you've won Rs."+prizeMoney);