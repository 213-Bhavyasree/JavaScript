function numberWithSpaces(value, pattern) {
    var i =0,
    phone = value.toString();
    return pattern.replace(/#/g, _ => phone[i++]);

}
console.log(numberWithSpaces('+911234567890', '=91 1234567890'));
