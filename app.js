var questions = {1 : {
    question : "The approximate population of our world is:" , 
    options : ["5.8 billion" , "6.8 billions" , "7.8 billions" , "9.8 billions"],
    correct : "7.8 billions"
},
    2 : {
        question : "Victoria Day” is a public holiday and is celebrated each year in" , 
        options : ["US" , "Canada" , "Italy" , "Spain"],
        correct : "Canada"
    },
    3 : {
        question :  "We live on the planet Earth. According to the scientists, the Earth was formed about _____ years ago.",
        options : ["4.6 billion" , "5.6 million" , "4.6 million" , "5.6 billion"],
        correct : "4.6 billion" 
},
    4 : {
        question :  " Web pages are interlinked by using",
        options : ["HTTP" , "Hyperlinks" , "Slider" , "Marquee"],
        correct : "Hyperlinks" 
    },
    5 : {
        question :  "Google Language Translator” is an example of the application of",
        options : ["Internet" , "Computer Simulations" , "Machine learning" , "Debugging"],
        correct : "Machine learning" 
    },
    


}
var count = 1;
var score = 0;
var result;
var str;
    

function showQuestion(count) {
    var ques = document.getElementById("quest")
    ques.innerHTML = questions[count].question
    var option = document.getElementsByClassName("options")
    console.log(option)
    str = "Question number "
    var qno = str+ count
    document.getElementById("qno").innerHTML = qno

    for(i = 0; i<4 ; i++ ){
        option[i].innerHTML = questions[count].options[i]
     }
    
}

function getlabel(e){
    var realval = questions[count].correct
    console.log(realval)
    // console.log(e.innerHTML)
    // console.log(count)
    var value = e.innerHTML
    // console.log(value)
    result = realval.localeCompare(value)

    

}


function nextQuestion() {
    
    count++;
    if (result == 0){
        score++

    }
    if(count<6){
        showQuestion(count)
        console.log(count)
        
        
    }
    else{
        alert("Your Score is:" + score)
    }
    

}

var myVar = setInterval(function() {
    myTimer()
  }, 1000);
  var s = 60;
  var m = 4;
  
  function myTimer() {
    s--;
    document.getElementById("timer").innerHTML = m+":"+s;
    if(s==00){
        m--
        s=60
        if(m==0 && s==0){
            window.location.replace("last.html")
        }

    }
    
  }











