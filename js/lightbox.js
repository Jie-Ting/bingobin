// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[0];
btn_modal.addEventListener("click", function(){
  lightbox_el.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[0];
btn_modal_close.addEventListener("click", function(){
  lightbox_el.classList.add("none");
});

var lightbox_el = document.getElementById("lightbox");
lightbox_el.addEventListener("click", function(){
  this.classList.add("none");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});

/*
<button type="button" class="btn_modal">開啟 Modal 彈跳視窗</button>
<a href="https://tw.yahoo.com" target="_blank">yahoo 連結</a>

<div id="lightbox" class="none">
  <article>
    <h1>這是 Modal 裡的標題</h1>
    <p>這是 Modal 段落</p>
    <button type="button" class="btn_modal_close">關閉</button>
  </article>
</div>
*/

button{
  cursor: pointer;
}
#lightbox{
/*   border: 1px solid red; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, .5);
}
.none{
  display: none;
}

/* 元素 article 置中及基本樣式 */
#lightbox > article{
  background-color: white;
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}