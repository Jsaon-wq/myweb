var logo = document.getElementsByName("logo");
var car = document.getElementsByName("car");

function selectAll() {
	for (var j = 0; j < logo.length; j++) {
		if (car[0].checked) {
			logo[j].checked = true;
		}
		if (!car[0].checked) {
			logo[j].checked = false;
		}
	}
}

// function notAll() {
// 	var isAllChecked = true;

// 	for (var i = 0; i < logo.length; i++) {
// 		if (!logo[i].checked) {
// 			isAllChecked = false;
// 			break;
// 		}
// 	}
// 	if (isAllChecked) {
// 		car[0].checked = true;
// 	}
// 	if (!isAllChecked) {
// 		car[0].checked = false;
// 	}
// }


function notAll() {
	var num = 0;
	for (var i = 0; i < logo.length; i++) {
		if (logo[i].checked) {
			num += 1;
			if (num == 6) {
				car[0].checked = true;
			} else {
				car[0].checked = false;
			}
		}
		if (!logo[i].checked) {
			break;
		}
	}
	if (num < 6) {
		car[0].checked == false;
	}
}
