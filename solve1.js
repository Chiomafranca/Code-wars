function squareDigits(num){
    let result = 0;
    let multiplier = 1;
    while(num > 0){
        let digit = num % 10;
        result += (digit * digit) * multiplier;
        multiplier *= 10;
        num = Math.floor(num / 10);
    }

    return result;
}


function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
    

  }