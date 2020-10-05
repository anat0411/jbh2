//Class For Representing a Question
class TestQuestion {
    constructor(question, answers, correct) {
        //Init fields data within constractor  
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    //--Display Question And Answers to Console
    DisplayQuestionToConsole() {

        //Display Question
        console.log("[---" + this.question + "---]");

        //Shuffle All Items in Array
        this.answers.sort(function (a, b) {
            return 0.5 - Math.random();
        });

        //Display answers with index
        this.answers.forEach(function (ans, i) {
            console.log(i + 1 + ")" + ': ' + ans);
        });
    }//End Display

    //check if Correct
    checkAnswer(inputAnswer) {
        let userNum = Number.parseInt(inputAnswer);
        if (userNum == this.correct + 1)
            return true;
        else
            return false;
    }
}

//Class Test
class Test {
    static questions = [];
    static score = 0;
    constructor() {

    }
    static InitSampleTest() {

        var q1 = new TestQuestion("1+1=2", ["yes", "no"], 0);
        var q2 = new TestQuestion("What Color the sky", ["Blue", "Red", "Brown", "Green"], 0);
        var q3 = new TestQuestion(
            'What does best describe coding?',
            ['Boring', 'Hard', 'Fun', 'Tedious'],
            2);

        Test.questions.push(q1);
        Test.questions.push(q2);
        Test.questions.push(q3);
    }

    //Run test
    static RunTestQuestions() {
        let points = 0;
        let TestSummerize = "";
        for (let index = 0; index < Test.questions.length; index++) {

            //get t
            const qObj = Test.questions[index];

            Test.questions.sort(function (a, b) {
                return 0.5 - Math.random();
            });
            qObj.DisplayQuestionToConsole();
            var answer = prompt('Please select the correct answer.');
            if (answer === "exit")
                break;
            var isCorrect = qObj.checkAnswer(answer)
            if (isCorrect)
                points += 1;
        }


        Test.points = points;
        console.log(Test.points + "/" + Test.questions.length);
    }


}


Test.InitSampleTest();
Test.RunTestQuestions();
//Test.ShowScore();






