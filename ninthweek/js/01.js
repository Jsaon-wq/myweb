// prompt({
// 	title: '设置比值',
// }, function(value, index, elem) {
// 	alert(value);
// 	if (isNaN(value)) {
// 		alert('请输入数字!');
// 		return;
// 	} else {
// 		alert('输入的是数字!');
// 	}
// 	close(index);
// });
function myFunction(){
	var x;
	var number=prompt("请输入一个数字:")
	if not(isNaN(number)){
		alert('请输入数字!');
	}
	else{
		alert('输入的是数字!')
	}
}