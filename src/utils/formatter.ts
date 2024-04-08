//static class Formatter with function to capitalize first letter of a string
export class Formatter {
    static capitalizeFirstLetter = (str: string) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}