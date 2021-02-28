// Function # 01 Find maximum between two numbers
function maxNumber() {
    var num1 = parseFloat(document.getElementById('firstNum').value);
    var num2 = parseFloat(document.getElementById('secondNum').value);
    var operator = 'Both Number Are Equals';
    var newSegment = '<strong>Please Enter both Values!</strong>';
    if ((!num1 && num1!=0) || (!num2 && num2!=0)) {
        document.getElementById('alert01').innerHTML = newSegment;
        document.getElementById('alert01').className = 'alert alert-danger text-center';
    }
    else {
        if (num1 == num2) {
            operator = 'Both Number Are Equals';
        } else if (num1 > num2) {
            operator = 'number1 Greater Then number2'
        }
        else {
            maxNum = num2;
            operator = 'number2 Greater Then number2';
        }
    
        newSegment = '<strong>'  + String(operator) +   '</strong>';
        document.getElementById('alert01').innerHTML = newSegment;
        document.getElementById('alert01').className = 'alert alert-success text-center';
    }
}


// Function # 02 - Find maximum between three numbers
function maxNumberThree() {
    var num1 = parseFloat(document.getElementById('segment2-num1').value);
    var num2 = parseFloat(document.getElementById('segment2-num2').value);
    var num3 = parseFloat(document.getElementById('segment2-num3').value);
    var max1 = 0;
    var max2 = 0;
    var max3 = 0;
    var operator1 = '>=';
    var operator2 = '>=';
    var newSegment = '<strong>Please Enter all Values!</strong>';
    if ((!num1 && num1!=0) || (!num2 && num2!=0) || (!num3 && num3!=0)) {
        document.getElementById('alert02').innerHTML = newSegment;
        document.getElementById('alert02').className = 'alert alert-danger text-center';
    }
    else {
        if (num1 >= num2 && num1 >= num3) {
            max1 = num1;
            if (num2 > num3) {
                max2 = num2;
                max3 = num3;
            }
            else {
                max2 = num3;
                max3 = num2;
            }
        } else if (num2 > num1 && num2 > num3) {
            max1 = num2;
            if (num1 > num3) {
                max2 = num1;
                max3 = num3;
            }
            else {
                max2 = num3;
                max3 = num1;
            }
        }
        else {
            max1 = num3;
            if (num1 > num2) {
                max2 = num1;
                max3 = num2;
            }
            else {
                max2 = num2;
                max3 = num1;
            }
    
        }
    
        newSegment = '<strong>' + String(max1) + ' ' + String(operator1) + ' ' + String(max2) + 
        ' ' + String(operator2) + ' ' + String(max3) + '</strong>';
        document.getElementById('alert02').innerHTML = newSegment;
        document.getElementById('alert02').className = 'alert alert-success text-center';
    }
}


// Function # 03 - Check number status (positive, negative, or Zero)
function numberStatusCheck() {
    var number = parseFloat(document.getElementById('numberStatus').value);
    var status = 'none';
    var newSegment = '<strong>Please Enter the Number!</strong>';
    if (!number && number != 0) {
        document.getElementById('alert03').innerHTML = newSegment;
        document.getElementById('alert03').className = 'alert alert-danger text-center';
    }
    else {
        if (number < 0) {
            status = 'negative';
        }
        else if (number > 0) {
            status = 'positive';
        }
        else {
            status = 'zero'
        }
        newSegment = 'The number <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert03').innerHTML = newSegment;
        document.getElementById('alert03').className = 'alert alert-success text-center';
    }
}


// Function # 04 - Check if divisible by 5 and 11
function divisibleBy5And11() {
    var number = parseFloat(document.getElementById('divisibleCheck').value);
    var status = 'none'
    var newSegment = '<strong>Please Enter the Number!</strong>';
    if (!number && number != 0) {
        document.getElementById('alert04').innerHTML = newSegment;
        document.getElementById('alert04').className = 'alert alert-danger text-center';
    }
    else {
        if (number%5==0 && number%11==0) {
            status = 'divisible';
        }
        else {
            status = 'not divisible'
        }
        
        newSegment = 'The number <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert04').innerHTML = newSegment;
        document.getElementById('alert04').className = 'alert alert-success text-center';
    }
}


// Fuction # 05 - Check if the number is even or odd
function evenCheck() {
    var number = parseFloat(document.getElementById('evenOrOdd').value);
    var status = 'none';
    var newSegment = '<strong>Please Enter the Number!</strong>';
    if (!number && number != 0) {
        document.getElementById('alert05').innerHTML = newSegment;
        document.getElementById('alert05').className = 'alert alert-danger text-center';
    }
    else {
        if (number%2 == 0) {
            status = 'Even';
        }
        else {
            status = 'Odd';
        }
        newSegment = 'The number <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert05').innerHTML = newSegment;
        document.getElementById('alert05').className = 'alert alert-success text-center';
    }
}


// Function # 06 - Check if the number is leap year or not
function leapYear() {
    var number = parseFloat(document.getElementById('year').value);
    var status = 'none';
    var newSegment = '<strong>Please Enter the Year!</strong>';
    if (!number && number != 0) {
        document.getElementById('alert06').innerHTML = newSegment;
        document.getElementById('alert06').className = 'alert alert-danger text-center';
    }
    else {
        if (number%4 == 0) {
            status = 'a leap year';
        }
        else {
            status = 'not a leap year';
        }
        newSegment = 'The number <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert06').innerHTML = newSegment;
        document.getElementById('alert06').className = 'alert alert-success text-center';
    }
}


// Function # 07 - Check if a character is alphabet or not
function alphabetCheck() {
    var number = document.getElementById('character').value;
    var status = 'none';
    var newSegment = '<strong>Please Enter a Single Character!</strong>';
    if (number == "" || number.length>1) {
        document.getElementById('alert07').innerHTML = newSegment;
        document.getElementById('alert07').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match(/[a-z,A-Z]/g)) {
            status = 'a alphabet';
        }
        else {
            status = 'not a alphabet';
        }
        newSegment = 'The character <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert07').innerHTML = newSegment;
        document.getElementById('alert07').className = 'alert alert-success text-center';
    }
}


// Function # 08 - Check if the alphabet is vowel or consonant
function vowelCheck() {
    var number = document.getElementById('alphabet').value;
    var status = 'none';
    var newSegment = '<strong>Please Enter a Single Alphabet!</strong>';
    if (!number.match(/[a-z,A-Z]/g) || number.length>1) {
        document.getElementById('alert08').innerHTML = newSegment;
        document.getElementById('alert08').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match(/[aeiou,AEIOU]/g)) {
            status = 'a vowel';
        }
        else {
            status = 'a consonant';
        }
        newSegment = 'The alphabet <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert08').innerHTML = newSegment;
        document.getElementById('alert08').className = 'alert alert-success text-center';
    }
    
}


// Function # 09 - Check if the character is a alphabet, digit, or special character
function characterCheck() {
    var number = document.getElementById('charc').value;
    var status = 'none';
    var newSegment = '<strong>Please Enter a Single Character!</strong>';
    if (number=="" || number.length>1) {
        document.getElementById('alert09').innerHTML = newSegment;
        document.getElementById('alert09').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match(/[a-z,A-Z]/g)){
            status = 'a alphabet';
        }
        else if (number.match(/[0-9]/g)){
            status = 'a digit';
        }
        else {
            status = 'a special character'
        }
        newSegment = 'The character <strong>"' + String(number) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert09').innerHTML = newSegment;
        document.getElementById('alert09').className = 'alert alert-success text-center';
    }
}


// Function # 10 - Find the length of a string
function lengthOfString() {
    var string = document.getElementById('lengthString').value;
    var status = string.length;
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert10').innerHTML = newSegment;
        document.getElementById('alert10').className = 'alert alert-danger text-center';
    }
    else {
        newSegment = 'The length of <strong>"' + String(string) + '"</strong> is <strong>' + String(status) + '</strong>';
        document.getElementById('alert10').innerHTML = newSegment;
        document.getElementById('alert10').className = 'alert alert-success text-center';
    }
}


// Function # 11 - Copy one string to another string
function copyStringToOther() {
    var string01 = document.getElementById('copyString01').value;
    var string02 = document.getElementById('copyString02').value;
    var string02Old = string02;
    var newSegment = '<strong>Please Enter both Strings!</strong>';
    if (string01=="" || string02=="") {
        document.getElementById('alert11').innerHTML = newSegment;
        document.getElementById('alert11').className = 'alert alert-danger text-center';
    }
    else {
        string02 = string01 + ' ' + string02;
        newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
        string02Old + '"</strong><br> New Second String: <strong>"' + string02 + '"</strong>';
        document.getElementById('alert11').innerHTML = newSegment;
        document.getElementById('alert11').className = 'alert alert-success text-center';
    }
}


// Function # 12 - Concatenate two Strings
function concatenateString() {
    var string01 = document.getElementById('conString01').value;
    var string02 = document.getElementById('conString02').value;
    var conString = 'none';
    var newSegment = '<strong>Please Enter both Strings!</strong>';
    if (string01=="" || string02=="") {
        document.getElementById('alert12').innerHTML = newSegment;
        document.getElementById('alert12').className = 'alert alert-danger text-center';
    }
    else {
        conString = string01 + ' ' + string02;
        newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
        string02 + '"</strong><br> New Concatenated String: <strong>"' + conString + '"</strong>';
        document.getElementById('alert12').innerHTML = newSegment;
        document.getElementById('alert12').className = 'alert alert-success text-center';
    }
}


// Function # 13 - Compare two Strings
function compareString() {
    var string01 = document.getElementById('comString01').value;
    var string02 = document.getElementById('comString02').value;
    var status = 'none';
    var newSegment = '<strong>Please Enter both Strings!</strong>';
    if (string01=="" || string02=="") {
        document.getElementById('alert13').innerHTML = newSegment;
        document.getElementById('alert13').className = 'alert alert-danger text-center';
    }
    else {
        if (string01.length == string02.length) {
            status = 'equal'
        }
        else {
            status = 'not equal'
        }
        newSegment = 'First String: <strong>"' + string01 + '"</strong><br> Second String: <strong>"' + 
        string02 + '"</strong><br> First String is <strong>"' + status + '"</strong> to Second String';
        document.getElementById('alert13').innerHTML = newSegment;
        document.getElementById('alert13').className = 'alert alert-success text-center';
    }
}


// Function # 14 - Convert string to uppercase
function convertToUpperCase() {
    var string = document.getElementById('upperString').value;
    var newString = string.toUpperCase();
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert14').innerHTML = newSegment;
        document.getElementById('alert14').className = 'alert alert-danger text-center';
    }
    else {
        newSegment = 'Old String: <strong>"' + string + '"</strong><br> New String: <strong>"' + newString + '"</strong>';
        document.getElementById('alert14').innerHTML = newSegment;
        document.getElementById('alert14').className = 'alert alert-success text-center';
    }
}


// Function # 15 - Convert string to lowercase
function convertToLowerCase() {
    var string = document.getElementById('lowerString').value;
    var newString = string.toLowerCase();
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert15').innerHTML = newSegment;
        document.getElementById('alert15').className = 'alert alert-danger text-center';
    }
    else {
        newSegment = 'Old String: <strong>"' + string + '"</strong><br> New String: <strong>"' + newString + '"</strong>';
        document.getElementById('alert15').innerHTML = newSegment;
        document.getElementById('alert15').className = 'alert alert-success text-center';
    }
}


// Function # 16 - Convert string to togglecase
function convertToToggleCase() {
    var string = document.getElementById('toggleString').value;
    var oldString= string;
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert16').innerHTML = newSegment;
        document.getElementById('alert16').className = 'alert alert-danger text-center';
    }
    else {
        for(var i=0; i<string.length; i++) {
            if (string.slice(i,i+1) == string.slice(i,i+1).toLowerCase()) {
                string = string.slice(0, i) + string.slice(i, i+1).toUpperCase() + string.slice(i+1, string.length);
            }
            else {
                string = string.slice(0, i) + string.slice(i, i+1).toLowerCase() + string.slice(i+1, string.length);
            }
        }
        newSegment = 'Old String: <strong>"' + oldString + '"</strong><br> New String: <strong>"' + string + '"</strong>';
        document.getElementById('alert16').innerHTML = newSegment;
        document.getElementById('alert16').className = 'alert alert-success text-center';
    }
}


// Function # 17 -  Find total number of alphabets, digits, and special characters in a string
function countCharacterType() {
    var string = document.getElementById('countString').value;
    var alphabets = 0;
    var digits = 0;
    var special = 0;
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert17').innerHTML = newSegment;
        document.getElementById('alert17').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1).match(/[a-z,A-Z]/g)) {
                alphabets = alphabets + 1;
            }
            else if (string.slice(i, i+1).match(/[0-9]/g)) {
                digits = digits + 1;
            }
            else {
                special = special + 1;
            }
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Alphabets: <strong>"' + alphabets + 
        '"</strong><br> Digits: <strong>"' + digits + '"</strong><br> Special Characters: <strong>"' + 
        special + '"</strong>';
        document.getElementById('alert17').innerHTML = newSegment;
        document.getElementById('alert17').className = 'alert alert-success text-center';
    }
}


// Function # 18 - Count total number of Vowels and Consonants
function countAlphabetType() {
    var string = document.getElementById('alphabetString').value;
    var vowels = 0;
    var consonants = 0;
    var newSegment = '<strong>Please Enter a Alphabetic String!</strong>';
    if (string=="") {
        document.getElementById('alert18').innerHTML = newSegment;
        document.getElementById('alert18').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1).match(/[a-z,A-Z]/g)) {
                if (string.slice(i, i+1).match(/[aeiou,AEIOU]/g)) {
                    vowels = vowels + 1;
                }
                else {
                    consonants = consonants + 1;
                }
            }
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Vowels: <strong>"' + vowels + 
        '"</strong><br> Consonants: <strong>"' + consonants + '"</strong>';
        document.getElementById('alert18').innerHTML = newSegment;
        document.getElementById('alert18').className = 'alert alert-success text-center';
    }
}


// Function # 19 - Count total number of words in a string
function countWords() {
    var string = document.getElementById('wordsString').value;
    var oldString = string;
    var words = 0;
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert19').innerHTML = newSegment;
        document.getElementById('alert19').className = 'alert alert-danger text-center';
    }
    else {
        while (string.match('  ')) {
            string = string.replace('  ', ' ');
        }
        for (var i=1; i<string.length-1; i++) {
            if (string.slice(i, i+1) == ' '){
                words = words+1;
            }
        }
        newSegment = 'String: <strong>"' + oldString + '"</strong><br> Words: <strong>"' + (words+1) + 
        '"</strong>';
        document.getElementById('alert19').innerHTML = newSegment;
        document.getElementById('alert19').className = 'alert alert-success text-center';
    }
}


// Function # 20 - Find reverse of the string
function reverseString() {
    var string = document.getElementById('revString').value;
    var reverseString = '';
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert20').innerHTML = newSegment;
        document.getElementById('alert20').className = 'alert alert-danger text-center';
    }
    else {
        for (i=string.length; i>0; i--) {
            reverseString = reverseString + string.slice(i-1, i);
        }
        newSegment = 'String: <strong>"' + string + '"</strong><br> Reversed: <strong>"' + reverseString + 
        '"</strong>';
        document.getElementById('alert20').innerHTML = newSegment;
        document.getElementById('alert20').className = 'alert alert-success text-center';
    }
}


// Function # 21 - Check if the string is palindrome or not
function palindromeCheck() {
    var string = document.getElementById('palString').value;
    var reverseString = '';
    var status = 'none';
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert21').innerHTML = newSegment;
        document.getElementById('alert21').className = 'alert alert-danger text-center';
    }
    else {
        for (i=string.length; i>0; i--) {
            reverseString = reverseString + string.slice(i-1, i);
        }

        if (string == reverseString) {
            status = 'Palindrome';
        }
        else {
            status = 'not Palindrome';
        }
        newSegment = 'This string: <strong>"' + string + '"</strong><br> String is <strong>"' + status + 
        '"</strong>';
        document.getElementById('alert21').innerHTML = newSegment;
        document.getElementById('alert21').className = 'alert alert-success text-center';
    }
}


// Function # 22 - Reverse order of words
function reverseWords() {
    var string = document.getElementById('revWords').value;
    var reversedString = ''
    var word = ''
    var newSegment = '<strong>Please Enter a String!</strong>';
    if (string=="") {
        document.getElementById('alert22').innerHTML = newSegment;
        document.getElementById('alert22').className = 'alert alert-danger text-center';
    }
    else {
        while (string.match('  ')) {
            string = string.replace('  ', ' ');
        }
        for (var i=string.length; i>0; i--) {
            if (string.slice(i, i+1) != ' '){
                word = string.slice(i, i+1) + word;
            }
            else {
                if (reversedString == '') {
                    reversedString = word;
                    word = '';
                }
                else {
                    reversedString = reversedString + ' ' + word;
                    word = '';
                }
            }
        }
        reversedString = reversedString + ' ' + word;
        newSegment = 'String: <strong>"' + string + '"</strong><br> Reversed String: <strong>"' + reversedString + 
        '"</strong>';
        document.getElementById('alert22').innerHTML = newSegment;
        document.getElementById('alert22').className = 'alert alert-success text-center';
    }
}


// Function # 23 - Find first occurance of a character
function firstOccurance() {
    var string = document.getElementById('firstOccuString').value;
    var character = document.getElementById('firstOccuCharacter').value;
    var occurance = 'none';
    var newSegment = '<strong>Please Enter both String and Character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert23').innerHTML = newSegment;
        document.getElementById('alert23').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.indexOf(character);

        if (occurance == -1) {
            occurance = 'not found';
        }

        newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
        '"</strong><br> First Occured at: <strong>"' + occurance + '"</strong>';
        document.getElementById('alert23').innerHTML = newSegment;
        document.getElementById('alert23').className = 'alert alert-success text-center';
    }
}


// Function # 24 - Find last occurance of a character
function lastOccurance() {
    var string = document.getElementById('lastOccuString').value;
    var character = document.getElementById('lastOccuCharacter').value;
    var occurance = 'none';
    var newSegment = '<strong>Please Enter both String and Character!</strong>';
    if (string=='' || character=='') {
        document.getElementById('alert24').innerHTML = newSegment;
        document.getElementById('alert24').className = 'alert alert-danger text-center';
    }
    else {
        occurance = string.lastIndexOf(character);

        if (occurance == -1) {
            occurance = 'not found';
        }
        
        newSegment = 'String: <strong>"' + string + '"</strong><br> Character: <strong>"' + character + 
        '"</strong><br> Last Occured at: <strong>"' + occurance + '"</strong>';
        document.getElementById('alert24').innerHTML = newSegment;
        document.getElementById('alert24').className = 'alert alert-success text-center';
    }
}


// Function # 25 - Read and print elements of an array
function printArray() {
    var string = document.getElementById('readArray').value;
    var array = [];
    var word = ''
    var newSegment = '<strong>Please Enter the array separated by comma(,)!</strong>';
    if (string=="") {
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        newSegment = 'Entered String: <strong>"' + string + '"</strong><br> Array: <strong>[' + array + 
        ']</strong>';
        document.getElementById('alert25').innerHTML = newSegment;
        document.getElementById('alert25').className = 'alert alert-success text-center';
    }
    
}


// Function # 26 - Print all negative elements of an array
function printNegativeArray() {
    var string = document.getElementById('negArray').value;
    var array = [];
    var word = '';
    var negativeArray = [];
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (array[i] < 0) {
                negativeArray.push(array[i]);
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Negative Array: <strong>[' + negativeArray + 
        ']</strong>';
        document.getElementById('alert26').innerHTML = newSegment;
        document.getElementById('alert26').className = 'alert alert-success text-center';
    }
}


// Function # 27 - Find Sum of all array elements
function sumArray() {
    var string = document.getElementById('sumElements').value;
    var array = [];
    var word = '';
    var sum = 0;
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var i=0; i<array.length; i++) {
            if (array[i].match(/[0-9]/g)) {
                sum = sum + parseFloat(array[i]);
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Sum of array is <strong>"' + sum + 
        '"</strong>';
        document.getElementById('alert27').innerHTML = newSegment;
        document.getElementById('alert27').className = 'alert alert-success text-center';
    }
}


// Function # 28 - Find maximum and minimum element in an array
function maxArray() {
    var string = document.getElementById('maxElement').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var max = min = array[0];
        for (var x=0; x<array.length; x++) {
            if (max < array[x]) {
                max = parseFloat(array[x]);
            }
            if (min > array[x]) {
                min = parseFloat(array[x]);
            }
        }
        console.log(array.length)
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Max Value: <strong>"' + max + 
        '"</strong><br> Min Value: <strong>"' + min + '"</strong>';
        document.getElementById('alert28').innerHTML = newSegment;
        document.getElementById('alert28').className = 'alert alert-success text-center';
    }
}


// Function # 29 - Find second largest element in an array
function secondLargest() {
    var string = document.getElementById('secLargestElement').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var tempElement;
        for (var x=0; x<array.length; x++) {
            for (var y=0; y<array.length; y++) {
                if (parseFloat(array[x]) > parseFloat(array[y])) {
                    tempElement = array[x];
                    array[x] = array[y];
                    array.splice(y, 1, tempElement);
                }
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Second Largest Value: <strong>"' + array[1] + 
        '"</strong>';
        document.getElementById('alert29').innerHTML = newSegment;
        document.getElementById('alert29').className = 'alert alert-success text-center';
    }
}


// Function # 30 - Find total number of odd and even numbers
function totalOddAndEven() {
    var string = document.getElementById('oddAndEven').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var odd = 0;
        var even = 0;
        for (var x=0; x<array.length; x++) {
            if (parseFloat(array[x])%2 == 0) {
                even = even + 1;
            }
            else {
                odd = odd + 1;
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Number of Odd Elements: <strong>"' + odd + 
        '"</strong><br> Number of Even Elements: <strong>"' + even + '"</strong>';
        document.getElementById('alert30').innerHTML = newSegment;
        document.getElementById('alert30').className = 'alert alert-success text-center';
    }
}


// Function # 31 - Find total number of negative elements in array
function totalNegativeElements() {
    var string = document.getElementById('negElements').value;
    var array = [];
    var word = '';
    var newSegment = '<strong>Please Enter numeric array separated by comma(,)!</strong>';
    if (string=="" || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        var negativeElements = 0;
        for (var x=0; x<array.length; x++) {
            if (parseFloat(array[x]) < 0) {
                negativeElements = negativeElements + 1;
            }
        }
        newSegment = 'Entered Array: <strong>[' + array + ']</strong><br> Number of Negative Elements: <strong>"' + 
        negativeElements + '"</strong>';
        document.getElementById('alert31').innerHTML = newSegment;
        document.getElementById('alert31').className = 'alert alert-success text-center';
    }
}


// Function # 32 - Copy all elements of an array to another array
function copyArrayElements() {
    var string1 = document.getElementById('copyElements1').value;
    var string2 = document.getElementById('copyElements2').value;
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var word = '';
    var newSegment = '<strong>Please Enter the both arrays separated by comma(,)!</strong>';
    if (string1=="" || string2=="") {
        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-danger text-center';
    }
    else {
        // Array 01
        for (var i=0; i<string1.length; i++) {
            if (string1.slice(i, i+1) != ' ' && string1.slice(i, i+1) != ','){
                word = word + string1.slice(i, i+1);
            }
            else if (word != ''){
                array1.push(word);
                word = '';
            }
        }
        if (word != '') {
            array1.push(word);
            word = '';
        }

        // Array 02
        for (var i=0; i<string2.length; i++) {
            if (string2.slice(i, i+1) != ' ' && string2.slice(i, i+1) != ','){
                word = word + string2.slice(i, i+1);
            }
            else if (word != ''){
                array2.push(word);
                word = '';
            }
        }
        if (word != '') {
            array2.push(word);
        }

        for (var x=0; x<array1.length; x++) {
            array3.push(array1[x]);
        }
        for (var y=0; y<array2.length; y++) {
            array3.push(array2[y]);
        }

        newSegment = 'Array 1: <strong>[' + array1 + ']</strong><br> Array 2: <strong>[' + array2 + 
        ']</strong><br> Modified Array 2: <strong>[' + array3 + ']</strong>';
        document.getElementById('alert32').innerHTML = newSegment;
        document.getElementById('alert32').className = 'alert alert-success text-center';
    }
}


// Function # 33 - Insert an element in an array
function insertElementInArray() {
    var string = document.getElementById('insertArray').value;
    var element = document.getElementById('insertElement').value;
    var array = [];
    var array2 = [];
    var word = '';
    var newSegment = '<strong>Please Enter both numeric array separated by comma(,) and a single element to insert!</strong>';
    if (string=="" || element=="" || element.match(' ')) {
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }

        array2 = array.slice(0);
        array2.push(element);

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Element: <strong>[' + element + 
        ']</strong><br> Modified Array: <strong>[' + array2 + ']</strong>';
        document.getElementById('alert33').innerHTML = newSegment;
        document.getElementById('alert33').className = 'alert alert-success text-center';
    }
}


// Function # 34 - Delete an element from array at specified position
function deleteElement() {
    var string = document.getElementById('deleteArray').value;
    var position = document.getElementById('deletePosition').value;
    var array = [];
    var array2 = [];
    var word = '';
    var newSegment = '<strong>Please Enter both array separated by comma(,) and position of element!</strong>';
    if (string=="" || position=="") {
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-danger text-center';
    }
    else {
        for (var i=0; i<string.length; i++) {
            if (string.slice(i, i+1) != ' ' && string.slice(i, i+1) != ','){
                word = word + string.slice(i, i+1);
            }
            else if (word != ''){
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }

        array2 = array.slice(0);
        array2.splice(position, 1);

        newSegment = 'Array: <strong>[' + array + ']</strong><br> Position: <strong>[' + position + 
        ']</strong><br> Modified Array: <strong>[' + array2 + ']</strong>';
        document.getElementById('alert34').innerHTML = newSegment;
        document.getElementById('alert34').className = 'alert alert-success text-center';
    }
}


// Function # 35 - Round the number 
function roundNumber() {
    var number = document.getElementById('roundValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please Enter a number</strong>';
    if (number=="") {
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            numberArray.push(tempNumber);
        }
        if (numberArray.length > 1) {
            tempNumber = numberArray[1];
            tempArray = [];
            for (x=0; x<tempNumber.length; x++) {
                tempArray.push(tempNumber[x]);
            }
            if (tempArray[0] > 5) {
                numberArray[0] = parseInt(numberArray[0]) + 1;
            } else if (tempArray[0] == 4 && tempArray.length > 1) {
                for (a=tempArray.length-1; a>0; a--) {
                    if (tempArray[a] >= 5) {
                        tempArray[a-1] = parseInt(tempArray[a-1]) + 1;
                    }
                }
            }
            if (tempArray[0] == 5) {
                numberArray[0] = parseInt(numberArray[0]) + 1;
            }
        }
        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert35').innerHTML = newSegment;
        document.getElementById('alert35').className = 'alert alert-success text-center';
    }
}


// Function # 36 - Ceil the number
function ceilNumber() {
    var number = document.getElementById('ceilValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please Enter a number</strong>';
    if (number=="") {
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            if (tempNumber != '') {
                numberArray.push(tempNumber);
            }
        }
        if (numberArray.length > 1) {
            numberArray[0] = parseInt(numberArray[0]) + 1;
        }
        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert36').innerHTML = newSegment;
        document.getElementById('alert36').className = 'alert alert-success text-center';
    }
}


// Function # 37 - Floor the number
function floorNumber() {
    var number = document.getElementById('floorValue').value;
    var tempNumber = '';
    var numberArray = [];
    var newSegment = '<strong>Please enter a number</strong>';
    if (number=="") {
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-danger text-center';
    }
    else {
        if (number.match('.')) {
            for (i=0; i<number.length; i++) {
                if(number[i] != '.') {
                    tempNumber = tempNumber + number[i];
                }
                else {
                    numberArray.push(tempNumber);
                    tempNumber = '';
                }
            }
            if (tempNumber != '') {
                numberArray.push(tempNumber);
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Rounded Number: <strong>"' + 
        numberArray[0] + '"</strong>';
        document.getElementById('alert37').innerHTML = newSegment;
        document.getElementById('alert37').className = 'alert alert-success text-center';
    }
}


// Function # 38 - Print all natural numbers from 1 to n
function naturalNumber() {
    var number = document.getElementById('naturalValue').value;
    var naturalNumbers = '';
    var newSegment = '<strong>Please enter a positive Integer</strong>';
    if (number=="" || number=="0" || number.match(/[.-]/g)) {
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-danger text-center';
    } else {
        for (var i=1; i<=number; i++) {
            if (i == number) {
                naturalNumbers = naturalNumbers + i;
            } else {
                naturalNumbers = naturalNumbers + i + ' ';
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Natural Numbers: <strong>"' + 
        naturalNumbers + '"</strong>';
        document.getElementById('alert38').innerHTML = newSegment;
        document.getElementById('alert38').className = 'alert alert-success text-center';
    }
}


// Function # 39 - Print all natural numbers reverse from n to 1
function reverseNaturalNumber() {
    var number = document.getElementById('reverseNaturalValue').value;
    var naturalNumbers = '';
    var newSegment = '<strong>Please enter a positive Integer</strong>';
    if (number=="" || number=="0" || number.match(/[.-]/g)) {
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-danger text-center';
    } else {
        for (var i=number; i>0; i--) {
            if (i == 1) {
                naturalNumbers = naturalNumbers + i;
            } else {
                naturalNumbers = naturalNumbers + i + ' ';
            }
        }

        newSegment = 'Entered Number <strong>"' + number + '"</strong><br> Natural Numbers: <strong>"' + 
        naturalNumbers + '"</strong>';
        document.getElementById('alert39').innerHTML = newSegment;
        document.getElementById('alert39').className = 'alert alert-success text-center';
    }
}


// Function # 40 - Print all alphabets from a-z
function printAlphabet () {
    var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var alphabet = '';

    for (var i=0; i<alphabetArray.length; i++) {
        if (alphabetArray[i] == 'z') {
            alphabet = alphabet + alphabetArray[i];
        } else {
            alphabet = alphabet + alphabetArray[i] + ' ';
        }
    }

    newSegment = 'Alphabets (a-z): <strong>"' + alphabet + '"</strong>';
    document.getElementById('alert40').innerHTML = newSegment;
    document.getElementById('alert40').className = 'alert alert-success text-center';
}


// Function # 41 - Print all even numbers between 1 to 100
function evenNumbers() {
    var evenValue = 100;
    var evenNumbers = '';

    for (var i=1; i<=evenValue; i++) {
        if (i%2 == 0) {
            if (i == 100) {
                evenNumbers = evenNumbers + i;
            } else {
                evenNumbers = evenNumbers + i + ' ';
            }
        } 
    }

    newSegment = 'Even Numbers (1-100): <strong>"' + evenNumbers + '"</strong>';
    document.getElementById('alert41').innerHTML = newSegment;
    document.getElementById('alert41').className = 'alert alert-success text-center';
}


// Function # 42 - Print all odd numbers between 1 to 100
function oddNumbers() {
    var oddValue = 100;
    var oddNumbers = '';

    for (var i=1; i<=oddValue; i++) {
        if (i%2 != 0) {
            if (i == 99) {
                oddNumbers = oddNumbers + i;
            } else {
                oddNumbers = oddNumbers + i + ' ';
            }
        } 
    }

    newSegment = 'Odd Numbers (1-100): <strong>"' + oddNumbers + '"</strong>';
    document.getElementById('alert42').innerHTML = newSegment;
    document.getElementById('alert42').className = 'alert alert-success text-center';
}