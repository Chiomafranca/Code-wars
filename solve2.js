function printerError(s) {
    // Split the string into an array of characters
    const arr = s.split('');
    // Filter the array to keep only characters that are not in the range 'a' to 'm'
    const errors = arr.filter(char => char < 'a' || char > 'm');
    // Return the error count and total count as a string
    return `${errors.length}/${arr.length}`;
}