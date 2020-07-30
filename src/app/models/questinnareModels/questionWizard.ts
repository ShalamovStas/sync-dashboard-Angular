import { Operations, Question, QuestionType } from "./models";


export class QuestionWizard {

    questions: Array<Question> = new Array<Question>()
    currentQuestion: Question;
    wizardInProgress: boolean = false;


    constructor(questions: Array<Question>) {
        this.questions = questions;
    }


    setStateStart() {
        this.currentQuestion = this.questions[0];
        this.wizardInProgress = true;
    }

    hasNextQuestion(): boolean {
        return this.currentQuestion.hasNext;
    }

    next() {
        if (this.currentQuestion.type === QuestionType.LEAF_QUESTION)
            this.currentQuestion = this.questions.find(q => q.id === this.currentQuestion.nextQuestionId);

        if (this.currentQuestion.type === QuestionType.COMPOSITE_QUESTION) {
            console.log("Have to parse expression");
        }
    }

    getCurrentQuestion(): Question {
        return this.currentQuestion;
    }
}