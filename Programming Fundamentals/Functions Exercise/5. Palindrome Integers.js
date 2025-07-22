function  palindrome(arr) {
    function checkPalindrome(num) {
        let str = num.toString();
        let reversed = str.split('').reverse().join('');
        return str === reversed ? true : false;
    }

    for (el of arr) {
        console.log(checkPalindrome(el))
    }
}

palindrome([123,323,421,121]);