function palindrome(str){
    var reg = /[\W_]/g;
    var smallStr = str.toLowerCase().replace(reg,'');

    var reverse = smallStr.split('').reverse().join('');
    if (reverse === smallStr)return true;

    return false;
}
console.log(palindrome('madam'));