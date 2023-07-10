// 获取相关的元素
const listall = document.getElementById('small');
const small = listall.getElementsByTagName('img');
const big = document.getElementById('big');

function display(num){
	  smallImage.addEventListener('mouseover', function() {
	    // 获取当前小图对应的大图URL
	    const largeImageUrl = this.getAttribute('data-large-image');
	    
	    // 更新大图的URL
	    largeImage.src = largeImageUrl;
	    
	    // 显示大图
	    largeImageContainer.style.display = 'block';
	  });
	  
	  // 绑定鼠标移出事件
	  smallImage.addEventListener('mouseout', function() {
	    // 隐藏大图
	    largeImageContainer.style.display = 'none';
	  });
	}
}
