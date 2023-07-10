// 定义一个列表,将所有图片的路径放入。
var imgArr = ['img/1.gif', 'img/2.gif', 'img/3.jpg', 'img/4.jpg', 'img/5.gif'];
var image_1 = document.getElementById("image");

function change(event) {
	image_1.src = imgArr[parseInt(event.currentTarget.innerText) - 1];
}
