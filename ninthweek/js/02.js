document.write(`<table border='1px'>
	<tr>
	<th>ID</th>
	<th>商品编号</th>
	<th>价格</th>
	</tr>
	`)
var i = 1;
while (i <= 4) {
	document.write(`
	<tr>
	<td>${i}</td>
	<td>FZ00${i}</td>
	<td>${Math.random()*100}</td>
	</tr>
	`)
	i++;
}
document.write("</table>")
