/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    let positive = "YES";    
    let zero = "Zero Error";
    let negative = "Negative Error";

    if (a > 0) {
       return positive;
    }
    else if (a < 0) {
       throw new Error(negative);
    } else {
       throw new Error(zero);
    }
}