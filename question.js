function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices.sort(()=>Math.random() - .5);
    this.answer = answer;
    
}

Question.prototype.correctAnswer = function (choice){
    return choice === this.answer;
    
}
