
let minute = 03;
let sec = 59;
let setting = setInterval(function timing(){
    let timer = document.getElementById('timer');
    timer.innerHTML = minute + ":" + sec;
    sec --
    if(sec == 00){
        minute --;
        sec = 60;
        if(minute == 00){
            minute = 0;
            
        }
        
    }
    if(sec == 1 && minute == 0){
        timer.innerHTML = "time up!";
        clearInterval(setting);
    }
    showCase()

},1000);




function showCase(){
if(timer.innerHTML == "time up!"){
    
     showScores();
   
}
}




const allButtons = document.querySelector('.buttons');
allButtons.onclick = function(){
    alert(Quiz.guess(answer));
}


function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        // show question
        let element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices (options)

        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
       
    }
};

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNumber + "of " +  12 //quiz.questions.length;

    if(quiz.questionIndex === 12){
        showScores();
    }
} 


function showScores(){
    //let restart = "<button class='restart' onclick='location.reload()'> Restart </button>";
    let gameOverHtml = "<h1>Result </h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + " out of " + 12 + "</h2>" + "<button class='restart' onclick='origin()'> Restart </button>" 
    //+ "<p class='mailme'>loyaltysamuel001@gmail.com</p>";

    let element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;

    
};
const origin = () =>{
    window.location = "index.html";
}

let questions = [
    new Question("Durban is a city in which of these countries?", ["Lesotho", "South Africa", "USA", "Canada"], "South Africa"),
    new Question("America gained her independence in what year?", ["1776", "1676", "1778", "1878"], "1776"),
    new Question("The first elected President of Nigeria is?", ["Ernest Shonekan", "Olusegun Obasanjo", "Shehu Shagari", "Nnamdi Azikiwe"], "Shehu Shagari"),
    new Question("Who is the first Nigerian military head of state?", ["Yakubu Gowon", "J.T.U Aguyin Ironsi", "Muhammadu Buhari", "Sani Abacha"], "J.T.U Aguyin Ironsi"),
    new Question("Which of these personality is on the one dollar bill?", ["Thomas Jefferson", "Abraham Lincoln", "George Bush", "George Washington"], "George Washington"),
    new Question("In the Nigerian Army, which rank precedes the Brigadier General rank", ["Major General", "Major", "Colonel", "Lieutenant"], "Colonel"),
    new Question("Which of this is the only programming language the browser understands?", ["PHP", "Javascript", "Shell", "Python"], "Javascript"),
    new Question("Which of the is not a Javascript framework/library", ["Angular", "Vue", "Laravel", "React"], "Laravel"),
    new Question("A programming function that calls itself repeatedly is called a ______ function?", ["Iterative", "Recursive", "Hydrative", "Cumultive"], "Recursive"),
    new Question("What is the capital city of Nigeria", ["Abuja", "Kaduna", "Lokoja", "Lagos"], "Abuja"),
    new Question("Lugard's rest house is located where?", ["Lokoja, Nigeria", "Yorkshire, London", "Abuja, Nigeria", "Lagos, Nigeria"], "Lokoja, Nigeria"),
    new Question("what is the name of the chief captain of Abimelech's host present at the treaty with Abraham? ", ["Pichol", "Bashan", "Chesed", "Suelt"], "Pichol"),
    new Question("The 8th plague that God brought upon the Egyptian is?", ["Blood", "Hail", "Darkness", "Locousts"], "Locousts"),
    new Question("The name Gershom means?", ["I've been a stranger", "multiple blessings", "new dawn", "the Lord is departed"], "I've been a stranger"),
    new Question("A place with twelve wells of water, and threescore and ten palm trees was called?", ["Meriba", "Elim", "Moriah", "Halim"], "Elim"),
    new Question("Who was the first judge in Israel", ["Othniel", "Barak", "Gideon", "Samson"], "Othniel"),
    new Question("Which of these companies do not offer cloud services", ["Microsoft","Amazon","Google","Netlify"], "Netlify"),
    new Question ( "Which place is the coldest in the world?", ["UK", "Canada", "Siberia", "London"], "Siberia"),
    new Question ( "Who painted the Nigerian flag", ["Femi Adeshina", "Taiwo Akinkunmi", "Taiwo Akinwunmi", "Taiwo Adewunmi"], "Taiwo Akinwunmi"),
    new Question ( "Who is the first democratically elected president of Nigeria", ["Obasanjo", "Ironsi", "Gowon", "Tinubu"], "Obasanjo"),
    

    //  new Question("what is the name of the chief captain of Abimelech's host present at the treaty with Abraham? ", ["Pichol", "Bashan", "Chesed", "Suelt"], "Pichol"),
    //  new Question("The 8th plague that God brought upon the Egyptian is?", ["Blood", "Hail", "Darkness", "Locousts"], "Locousts"),
    //  new Question("The name Gershom means?", ["I've been a stranger", "multiple blessings", "new dawn", "the Lord is departed"], "I've been a stranger"),
    //  new Question("A place with twelve wells of water, and threescore and ten palm trees was called?", ["Meriba", "Elim", "Moriah", "Halim"], "Elim"),
    //  new Question("Who was the first judge in Israel", ["Othniel", "Barak", "Gideon", "Samson"], "Othniel"),
    //  new Question("How many sons of Jerubaal did Abimelech kill?", ["70", "5", "40", "13"], "70"),
    //  new Question("What was the name of Samson's father?", ["Zorah", "Elon", "Manoah", "Abdon"], "Manoah"),
    //  new Question("Abraham was from?", ["Ur of the Chaldeans", "Haran", "Nod", "Moab"], "Ur of the Chaldeans"),
    //  new Question("Ibzan, a judge in Israel was from what city?", ["Samaria", "Judah", "Bethlehem", "Benjamin"], "Bethlehem"),
    //  new Question("Which of these cities is otherwise referred to as the city of David", ["Nazareth", "Galilee", "Bethsaida", "Bethlehem"], "Bethlehem"),
    //  new Question("Who was the first prophet in Israel?", ["Eli", "Elijah", "Moses", "Samuel"], "Samuel"),
    //  new Question("the cave where David hid himself from Saul is called?", ["Adullam", "Mizpah", "Nob", "Gath"], "Adullam"),
    //  new Question("Which of these slept with his sister and who was his sister respectively?", ["Amnon, Tamar", "Absalom, Tamar", "Reuben, Bilah", "Shechem, Dinah"], "Amnon, Tamar"),
    //  new Question("Who succeded David as king?", ["Rehoboam", "Saul", "Solomon", "Absalom"], "Solomon"),
    //  new Question("Who was the woman that killed all the seed royal after her son was killed", ["Athaliah", "Jezebel", "Gomer", "Ahaziah"], "Athaliah"),
    //  new Question("Who was the last king in Isreal before the exile to Assyria?", ["Hoshea", "Pekah", "Ahaz", "Jotham"], "Hosea"),
    //  new Question("Who was the youngest king in the Bible?", ["Joash", "Josiah", "David", "Rehoboam"], "Joash"),
    //  new Question("Where was the tribe Judah exiled to?", ["Babylon", "Assyria", "Moab", "Egypt"], "Babylon"),
    //  new Question("Which of these kings built a house for God", ["David", "Solomon", "Rehoboam", "Herod"], "Solomon"),
    //  new Question("In whose reign did Judah returned from exile", ["Cyrus", "Cyprus", "Nehemiah", "Daniel"], "Cyrus"),
    //  new Question("David wrote all the psalms in the book of Psalms", ["True", "False", "I don't know", "Maybe"], "False"),
    //  new Question("Which of these is regarded as one of the wisdom books", ["Jeremiah", "Proverbs", "Luke", "Revelation"], "Proverbs"),
    //  new Question("'In the first year of his reign I Daniel understood by books...' this passage can be found in", ["Daniel 9:2", "Daniel 2:9", "Daniel 9:1", "Daniel 1:9"], "Daniel 9:2"),
    //  new Question("Nineveh was a city in?", ["Moab", "Ammon", "Assyria", "Babylon"], "Assyria"),
    //  new Question("What is the last book in the old testament", ["Nahum", "Malachi", "Habakkuk", "Job"], "Malachi"),
    //  new Question("Jesus is referred to as", ["The son of man", "The child of the HolyGhost", "the Christ", "All of the above"], "All of the above"),
    //  new Question("'...and he was in the wilderness until the day of his shewing...' who is being referred to here", ["John", "Jesus", "John the Baptist", "Joseph"], "John the Baptist"),
    //  new Question("The four thousand were fed with how many loaves of bread and fishes?", ["3 loaves, 2fishes", "5 loaves, 2 fishes", "Seven loaves, few fishes", "Eight loaves, one fish"], "Seven loaves, few fishes"),
    //  new Question("Who went with Jesus to the mount of transiguration", ["Peter, James and John", "Peter, James and Andrew", "Peter, John and Jude", "Peter, Jude and Luke"], "Peter, James and John"),
    //  new Question("Who was the only Physician to write a book of the Bible", ["Jesus", "Philip", "Luke", "Mark"], "Luke"),
    //  new Question("Mark, the writer of the book of Mark was the nephew of?", ["Paul", "Jesus", "Barnabas", "Mary"], "Barnabas"),
    //  new Question("Paul first met Luke in what city?", ["Phillipi", "Corinth", "Troas", "Macedonia"], "Troas"),
    //  new Question(" Barjesus resisted Paul to preach to who and was blinded as a result", ["Sergius Paulus", "Felix", "Festus", "Emperor Nero"], "Sergius Paulus"),
    //  new Question("Peter was at which city when in heard of Tabitha's death", ["Joppa", "Lydda", "Corinth", "Caesarea"], "Lydda"),
    //  new Question("What was the name of the man healed of palsy at Lydda?", ["Aeneas", "Cornelius", "Beryml", "Simon"], "Aeneas"),
    //  new Question("Who was admonished to take a little wine for the sake of his stomach?", ["Titus", "Timothy", "Trophimus", "Luke"], "Timothy"),
    //  new Question("The name of the man left in Crete to oversea the region was?", ["Archelaus", "Titus", "Apollos", "Timothy"], "Titus"),
    //  new Question("who conveyed to Corinth Paul's second later to the Corinthian church?", ["Titus", "Mark", "Barnabas", "Aristarchus"], "Titus"),
    //  new Question("Phebe was a servant of the church in?", ["Colossae", "Decapolis", "Macedonia", "Cenchrea"], "Cenchrea"),
    //  new Question("From your perception, Paul love the most the church at?", ["Corinth", "Phillipi", "Colossae", "Antioch"], "Corinth"),
    //  new Question("The disciples were first called Christians in?", ["Jerusalem", "Antioch", "Casarea", "Rome"], "Antioch"),
    //  new Question("Mark deserted Paul and Barnabas at", ["Perga in Pamphylia", "Iconium", "Lystra", "Derbe"], "Perga in Pamphylia"),
    //  new Question("The name of Timothy's mother was?", ["Lois", "Luis", "Eunice", "Euodias"], "Eunice"),
    //  new Question("Who was reffered to as a man eloquent and mighty in scriptures", ["Apollos", "Jesus", "Paul", "James"], ""),
    //  new Question("Chapter 12 of 1 Corinthians addressed the issue of", ["The Lord's supper", " the Resurrection of Christ", "Spiritual gifts", "Love"], "Spiritual gifts"),
    //  new Question("'I thank my God, I speak with tongue more than ye all' can be found in? ", ["1 Corinthians 14:18", "1 Corinthians 18:4", "1Corinthian 12:32", "1Corinthian 12:34"], "1 Corinthians 14:18"),
    //  new Question("At Paul's trial before Felix, the high priest brought with him an orator called?", ["Tertullus", "Gamaliel", "Drusilla", "Anas"], "Tertullus"),
    //  new Question("The Stoicks were present in?", ["Accra", "Athens", "Ethiopia", "Egypt"], "Athens"),
    //  new Question("Who were the two sons of Aaron that offered strange fire and was killed?", ["Nabad and Abihu", "Eliezer and Phinehas", "Hophni and Phinehas", "Cobzi and Zimri"], "Nadab and Abihu"),
    //  new Question("Paul first met Timothy at ?", ["Athens", "Lystra", "Derbe", "Rome"], "Lystra"),
    //  new Question("Who fell from the top of a building during Paul's long sermon?", ["Eutychus", "Aristachus", "Gaius", "Jason"], "Eutychus"),
    //  new Question("Lystra and Derbe are cities in?", ["Antioch", "Greece", "Achaia", "Lycaonia"], "Lycaonia"),
    //  new Question("Who withdrew himself from eating with the Gentiles when certain men came from James?", ["Barnabas", "Silas", "Paul", "Peter"], "Peter"),
    //  new Question("Who was the first apostle to be martyred", ["Stephen", "James", "Thomas", "Jesus"], "James"),
    //  new Question("Nathaniel, one of Jesus' apostle is otherwise known as?", ["Bartholomew", "Thomas", "Philip", "Andrew"], "Bartholomew"),
    //  new Question("Which of these disciples was not from Bethsaida?", ["Phlip", "Peter", "Andrew", "John"], "John"),
    //  new Question("How old was Jesus when he was crucified?", ["30", "33", "31", "36"], "33"),
    //  new Question("Paul and his team stayed for how long in Ephesus?", ["3 years", "1 year", "2 year", "6 months"], "3 years"),
    //  new Question("How long did Paul stay at Corinth", ["18 months", "1 year", "1 year and 7 months", "2 weeks"], "18 months"),
    //  new Question("John wrote the book of Revelation at ?", ["The isle of Patmos", "Jerusalem", "In a Roman prison", "At home"], "The isle of Patmos"),
    //  new Question("Which of these citie are not in Macedonia?", ["Philippi", "Thessaloniki", "Berea", "Lycaonia"], "Lycaonia"),
    //  new Question("The port of Antioch from whence Paul sailed to Cyprus is called?", ["Seleucia", "Salamis", "Paphos", "Perga"], "Seleucia"),
    //  new Question("Who was the leader of the church in Jerusalem", ["Paul", "Peter", "James", "John"], "James"),
    //  new Question("it was at Troas that Eutchus was raised from the dead", ["True", "False", " I can't tell", "leave me alone"], "True"),
    //  new Question("Who was the disciple that betrayed Jesus?", ["Judas", "Peter", "Pharisee", "Simon the zealot"], "Judas"),
    //  new Question("Who was first to see Jesus when he resurrected?", ["Mary Magdalene", "Peter", "John", "Thomas"], "Mary Magdalene"),
    //  new Question("The last book of the Bible is?", ["Revelation", "Malachi", "Acts", "Hebrews"], "Revelation"),
    //  new Question("Paul's last epistle to Timothy was written before his death", ["True", "False", "I don't know", "no last epistle"], "True"),
    //  new Question("What was the name of the prophet who caused the little children that mocked him", ["Elijah", "Elisa", "Joel", "Samuel"], "Elisa"),
    //  new Question("The period between the old testament and the new testament is?", ["400 years", "200 years", "100 years", "300 years"], "400 years"),
    //  new Question("Judges were appointed over Israel for a period of ", ["430 years", "400 years", "450 years", "40 years"], "450 years"),
    //  new Question("Paul wrote most books in the New testament", ["True", "False", "Maybe", "Maybe not"], "True"),
    //  new Question("The Apostle that Jesus loved the most was?", ["Peter", "Paul", "James", "John"], "John"),
    //  new Question("How many Psalms the David authored", ["73", "74", "75", "150"], "73"),
    //  new Question("Who is referred to as the 'sweet psalmist of Israel' ", ["David", "Solomon", "Asaph", "Korah"], "David"),
    //  new Question("Saul reigned in Israel as king for how long", ["42 years", "40 years", "2 years", "14 years"], "42 years"),
];

let quiz = new Quiz(questions.sort(()=> Math.random() - .5));


populate();