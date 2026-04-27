function isPalindrome(x: number): boolean {
    let numArr = x.toString().split('');
    let numLength = numArr.length;
    let resp = true;
    
    numArr.forEach( (val, index) => {
        if(val != numArr[numLength - 1 - index]) {
            resp = false;
        }
    })
    return resp;
};