const calculateDateDifferencePercentage = (webinarDate: string): number => {
    const webinarDateObj = new Date(webinarDate);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = webinarDateObj.getTime() -currentDate.getTime();
    if(difference < 0) {
        return 0;
    }
    // Convert the difference to a percentage
    const percentage = (difference / (24 * 60 * 60 * 1000)) * 100;

    return percentage;
}

export default calculateDateDifferencePercentage;