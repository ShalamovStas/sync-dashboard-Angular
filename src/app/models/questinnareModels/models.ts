
export enum Operations {
    EQUALS = "===",
    MORE = ">",
    MORE_OR_EQUAL = ">=",
    LESS = "<",
    LESS_OR_EQUAL = "<=",
    TRUE_OF_FALSE = "true/fasle"
}

export enum QuestionType {
    LEAF_QUESTION,
    COMPOSITE_QUESTION
}

export class Question {
    id: number;
    type: QuestionType;

    hasPrevious: boolean;
    previousQuestionId: number;

    hasNext: boolean;
    nextQuestionId: number;
    condition: Condition;

    nextQuestionsIDs: Array<number>
    previousQuestionsIDs: Array<number>
}

export class Condition {
    conditionCode: string;
}