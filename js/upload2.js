const firebaseConfig = {
    apiKey: "AIzaSyB9Wj748t988SdgxBNClGRJfF5aOMiOtmc",
    authDomain: "bingobin-a75d5.firebaseapp.com",
    projectId: "bingobin-a75d5",
    storageBucket: "bingobin-a75d5.appspot.com",
    messagingSenderId: "588243712335",
    appId: "1:588243712335:web:1374b633d69a13de776d3a"
  };
  firebase.initializeApp(firebaseConfig);


//設定
//var fileText = document.querySelector(".fileText");
//var uploadPercentage = document.querySelector(".uploadPercentage");
//var progress =  document.querySelector(".progress");
//var percentVal;
//var fileItem;
//var fileName;
//var img = document.querySelector(".img");
 //function getFile(e){
    //fileItem = e.target.files[0];
    //fileName = fileItem.name;
    //fileText.innerHTML = fileName;
//}

  //點擊發布
  function uploadImage(){
    //let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";
            }


        })


    })
  }