function findAll(arr, ele) {
	var num = 0
	var indexlist = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ele) {
			num++;
			indexlist.push(i + 1);
		}
	}
	return [`出现了${num}次,对应的索引号为${indexlist}`];
}
var arr = [1, 2, 3, 3, 1, 1, 5, 6, 3, 3, 2]
var indexlist = findAll(arr, 1)
document.write(indexlist);
