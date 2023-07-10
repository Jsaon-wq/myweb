// // 定义一个列表,将所有图片的路径放入。
// var imgArr = ['img/1.gif', 'img/2.gif', 'img/3.jpg', 'img/4.jpg', 'img/5.gif'];
// var image_1 = document.getElementById("image");

// function change(event) {
// 	image_1.src = imgArr[parseInt(event.currentTarget.innerText) - 1];
// }

var imgArr = [
	'../img/show1_big.jpg',
	'../img/show2_big.jpg',
	'../img/show3_big.jpg',
	'../img/show4_big.jpg',
	'../img/show5_big.jpg'
];
var big = document.getElementById('big');
var imgs = document.querySelectorAll('img');

function change(event) {
	var ctID = parseInt(event.currentTarget.id);
	big.src = imgArr[ctID - 1];
}
for (var i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener('click', change);
}
