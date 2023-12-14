const firebaseConfig = {
   apiKey: "AIzaSyB9Wj748t988SdgxBNClGRJfF5aOMiOtmc",
	authDomain: "bingobin-a75d5.firebaseapp.com",
	projectId: "bingobin-a75d5",
	storageBucket: "bingobin-a75d5.appspot.com",
	messagingSenderId: "588243712335",
	appId: "1:588243712335:web:1374b633d69a13de776d3a"
};

firebase.initializeApp(firebaseConfig);



	var fileText = document.querySelector(".fileText");
	var uploadPercentage = document.querySelector(".uploadPercentage");
	var progress =  document.querySelector(".progress");
	var percentVal;
	var fileItem;
	var fileName;
	var img = document.querySelector(".imgs");

	
	document.querySelectorAll(".drop-zone__input").forEach(function(inputElement) {
	var dropZoneElement = inputElement.closest(".drop-zone");
	// 觸發點擊事件
	  dropZoneElement.addEventListener("click", function(a){
		inputElement.click();
	});
	// 當圖框改變時，從無到有 or 換圖
	// 選取的檔案數量不為0(true)才執行--更新預覽圖
	// 獲取第一個檔案[0]
	  inputElement.addEventListener("change", function(a) {
		  
		//取得檔案(用於資料庫)
		fileItem = a.target.files[0];
		fileName = fileItem.name;
		fileText.innerHTML = fileName;
		console.log(fileItem); 
		  
		if (inputElement.files.length); {
		  updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	  });
	// dragover把文件拖放進去時觸發
	// 取消DOM預設功能否則可能無法正確觸發 drag 事件(用法)
	  dropZoneElement.addEventListener("dragover", function(a) {
		a.preventDefault();
	});

	// 取消DOM預設功能否則可能無法正確觸發 drop 事件(用法)
	// 檔案成功拖入時觸發
	// 數據傳輸文件dataTransfer.files檔案數量不為0(true)執行--更新inputElement、更新預覽圖
	  dropZoneElement.addEventListener("drop", function(a){
		a.preventDefault();
		
		if (a.dataTransfer.files.length) {
		  inputElement.files = a.dataTransfer.files;
		  updateThumbnail(dropZoneElement, a.dataTransfer.files[0]);
		};
	  })
	 
});

//original
	/**
	 * Updates the thumbnail on a drop zone element.
	 *
	 * @param {HTMLElement} dropZoneElement
	 * @param {File} file
	 */
	 // 更新預覽圖
	 // 設定預覽圖
	function updateThumbnail(dropZoneElement, file) {
	  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

	  // 第一次---當提示文字出現(true)--移除提示文字
	  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	  }

	  // 第一次---創造預覽圖，當預覽圖不存在時成立
	  // 建立新class方便設定css
	  // 在框框中添加子集---預覽圖
	  if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	  }
	  // 設定預覽圖的屬性label=圖片檔名
	  thumbnailElement.dataset.label = file.name;

	  // 顯示圖片
	  // startsWish("image/")判斷是否為圖片格式true---讀取圖片，圖片上傳成功---預覽圖出現
	  // false顯示空白
	  if (file.type.startsWith("image/")) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function() {
		  thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		  
		};
	  } else {
		thumbnailElement.style.backgroundImage = null;
	  }
	}

var uplo = document.querySelector(".btn");
uplo.addEventListener("click",function(){
    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);


	 uploadTask.on("state_changed",(snapshot)=>{
			console.log(snapshot);
			//percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
			//console.log(percentVal);
			//uploadPercentage.innerHTML = percentVal+"%";
			//progress.style.width=percentVal+"%";
		},(error)=>{
			console.log("Error is ", error);
		},()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src",url);
			}	
			const title = document.getElementById("title");
			const intro = document.getElementById("intro");
			const link = document.getElementById("link");
			const list = document.getElementById("list");
			const price = document.getElementById("price");
			var upImage = img.src;
			
				list.innerHTML = list.innerHTML +`
				<div class = "article">
				<h2>${title.value}</h2>
				<span>$${price.value}</span>
				<p>${intro.value}</p>
				<p>${link.value}</p>
				<img id="upImage" src="${upImage}">
				`;

				title.value= " ";
				intro.value= " ";
				link.value= " ";
				price.value=" ";
			});
            

        })
		
    })
   


	
	