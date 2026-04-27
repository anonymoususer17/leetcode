function isValid(s: string): boolean {

    let substr = '';
    
    for(var i : number = 0; i < s.length; i++){
        substr = substr + s[i];
        if(s[i] == '}'){
            if(substr[substr.length - 2] == '{'){
                substr = substr.substring(0,substr.length - 2);
            }
            else{
                substr = 'fail';
                break;
            }
        }
        else if(s[i] == ']'){
            if(substr[substr.length - 2] == '['){
                substr = substr.substring(0,substr.length - 2);
            }
            else{
                substr = 'fail';
                break;
            }

        }
        else if(s[i] == ')'){
            if(substr[substr.length - 2] == '('){
                substr = substr.substring(0,substr.length - 2);
            }
            else{
                substr = 'fail';
                break;
            }

        }
    }

    return substr == '';
};