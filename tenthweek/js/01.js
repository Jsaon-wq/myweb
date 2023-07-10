var str = 'Hello,World!'

function fn(str) {
	document.write(str.split("").reverse().join(""))
}
console.log(fn(str))

document.write("<br/>")


var reverseString = function(str) {
	var newStr = '',
		i = str.length;
	for (; i >= 0; i--) {
		newStr += str.charAt(i);
	}
	return newStr;
};
var a = reverseString('abcde')
document.write(a)
