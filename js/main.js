//  建立購物車
//  獲取HTML中 id="" 或class="" 的元素
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// 打開購物車-滑鼠點擊
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// 關閉購物車
closeCart.onclick = () => {
  cart.classList.remove("active");
};




/*// 點擊圖片跳出商品內容
let page = document.querySelector(".page");
let openpage = document.querySelector(".product-box">");
let closepage = document.querySelector("#page-cart");
// 打開購物車-滑鼠點擊
openpage.onclick = () => {
  page.classList.add("active");
};
// 關閉購物車
closepage.onclick = () => {
  page.classList.remove("active");
};



// 建立頁面*/

// 購物車執行JS
// 確保 DOM 結構被完整的讀取跟解析
if (document.readyState == "loading") { // 如果文件加載中
  document.addEventListener("DOMContentLoaded", ready);		// DOM 結構被完整的讀取跟解析-執行
} else {	// 如果文件加載完成
  ready();	// 執行function
}

// 執行
function ready() {
  // 從購物車刪除商品
  // 獲取所有指定名稱的元素：
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  
  // 增加/減少商品數量
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // 增加到購物車
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
// 前往結帳
function buyButtonClicked() { // 點擊後
  alert("已將您的訂單送出");  // 顯示
  // 購物車品項
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal(); //更新價格=0
}

// 從購物車中刪除商品
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  console.log(buttonClicked.parentElement)
  updatetotal();
}
// 改變商品數量
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// 加入購物車 event=click(取得名稱、價錢、圖片、品項---parentElement)
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  console.log(productImg);
  var color = shopProducts.getElementsByClassName("color")[0].value;
  addProductToCart(title, price, productImg,color);
  updatetotal();
}
function addProductToCart(title, price, productImg,color) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("你已經將該商品加入購物車囉!");
      return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
							</br>
							<div class="item">${color}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
							
                        </div>
                        <!-- 移除商品(垃圾桶圖示) -->
                        <i class='bx bxs-trash-alt cart-remove' ></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}





// 更新價格
// 取購物車內容、購物車box
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
};



//搜尋
let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector('#btn-search');
searchBtn.addEventListener('click',keywordSearch);

function keywordSearch(){
   var keyword = searchInput.value.trim().toLowerCase();
   var productData =  document.querySelectorAll('.product-title').innerText;
   var productList=[]
   productList.push(productData);
   let targetProduct = [];
   
   productList.some(productList => {
	   if (targetProduct = keyword.match(productList)){
		      document.location.href = 'page.html';
	   }
	})
}
	
