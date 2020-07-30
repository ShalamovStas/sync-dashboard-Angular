import { Operations, Question, QuestionType } from "./models";
import { unescapeIdentifier } from "@angular/compiler";

export class DataProvider {

    private questions: Array<Question> = new Array<Question>()
    /**
     *
     */
    constructor() {

        let count = 2;
        for (let index = 0; index <= count; index++) {
            const element = new Question();
            element.id = index;
            if (index === 0)
                element.hasPrevious = false;
            else {
                element.hasPrevious = true;
                element.previousQuestionId = index - 1;
            }

            element.hasNext = true;
            element.nextQuestionId = index + 1;
            element.type = QuestionType.LEAF_QUESTION;
            this.questions.push(element)
        }

        count++;
        const elementComplex1 = new Question();
        elementComplex1.id = count;
        elementComplex1.hasPrevious = true;
        elementComplex1.previousQuestionId = count--;

        elementComplex1.hasNext = true;
        elementComplex1.nextQuestionsIDs = [count + 0.1, count + 0.2];

        elementComplex1.type = QuestionType.COMPOSITE_QUESTION;

        count++;
        let tempCount1 = count;
        let q1_1 = this.createLeafQuestion(count + 0.1, count + 1, count - 1, true, true, undefined);
        let q2_2 = this.createLeafQuestion(count + 0.2, count + 1, count - 1, true, true, undefined);
        count++;

        let qFinal = this.createLeafQuestion(count, undefined, count - 1, true, false, [tempCount1 + 0.1, tempCount1 + 0.2]);

        this.questions.push(elementComplex1)
        this.questions.push(q1_1)
        this.questions.push(q2_2)
        this.questions.push(qFinal)


        console.log(this.questions);
    }

    private createLeafQuestion(id: number, nextQuestionId: number, previousQuestionId: number, hasPrevious: boolean, hasNext: boolean, previousQuestionsIDs: any): Question {
        const elementSimple1 = new Question();
        elementSimple1.id = id;
        elementSimple1.hasPrevious = hasPrevious;
        elementSimple1.previousQuestionId = previousQuestionId;
        elementSimple1.previousQuestionsIDs = previousQuestionsIDs;

        elementSimple1.hasNext = hasNext;
        elementSimple1.nextQuestionId = nextQuestionId;
        elementSimple1.type = QuestionType.LEAF_QUESTION;
        return elementSimple1;
    }

    getQuestions() {
        return this.questions;
    }



}