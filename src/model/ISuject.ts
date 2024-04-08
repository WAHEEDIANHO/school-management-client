export interface ILesson {
    // Define properties for a lesson if any
}

export interface ITopic {
    topicId: string;
    topicName: string;
    term: number;
    gradeNumber: number;
    subjectTitle: string;
    description: string;
    lessons: ILesson[];
}

export interface ISubject {
    gradeNumber: number;
    subjectTitle: string;
    subjectTeacher: string;
    topics: ITopic[];
}