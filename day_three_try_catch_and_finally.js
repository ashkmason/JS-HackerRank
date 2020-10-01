function reverseString(s) {
    try {
        // reverse the string
        console.log(s.split("").reverse().join(""));
    }
    catch(e) {
        // catch message
        console.log(e.message);
        console.log(s);
    }
}