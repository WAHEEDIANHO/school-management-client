import {ITopic} from "@/src/model/ISuject";

export interface IWebinar {
    webinarId: string;
    teacherInCharge: string;
    link: string;
    topicId: string;
    webinarDate: string;
    webinarHour: string;
    webinarMinute: string;
    topic: ITopic;
}