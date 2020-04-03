(function(){
    function Question(question, answer, solution){
        this.question = question;
        this.answer = answer;
        this. solution = solution;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for(let i=0; i<this.answer.length; i++){
            console.log(i + ' ' + this.answer[i]);
        }
    };
    
    Question.prototype.checkTheAnswer = function(ans){
        if(ans == this.solution){
            console.log('Coreect answer!');
        } else{
            console.log('Wrong answer!');
        }
    }
    
    
    var q1 = new Question(
        "Is JavaScript is the coolest langeuage in the world?",
        ['Yes', 'No'],
        0);
    
    var q2 = new Question(
        "Who is the present Prime minister of America",
        ['Obama', 'Trump'],
        1);
    
    var q3 = new Question(
        "What is the money name of america",
        ['Dinar', 'Taka', 'Doller'],
        2);
    
    
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    var ans = parseInt(prompt("Please Enter your anser."));
    questions[n].checkTheAnswer(ans);
})();