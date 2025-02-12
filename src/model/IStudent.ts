export interface IStudent {
    admissionNo: string,
    classId: number,
    sessionId: string,
    id: string,
    email: string,
    userName: string,
    phoneNumber: string,
    lastName: string,
    firstName: string,
    otherName: string,
    stateOfOrigin?: string,
    localGovArea?: string,
    homeAddress?: string,
    role: string,
    gender: string,
    dateofBirth: string,
    bloodGroup?: string,
    religion?: string
}