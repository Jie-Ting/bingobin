/*帳號密碼*/
	const loginButton = document.getElementById('login')
	const accountInput = document.getElementById('account')
	const passwordInput = document.getElementById('password')
	const resultOutput = document.getElementById('result')
	function login() {
		resultOutput.style.color = '#00f'
		resultOutput.innerText = 'Login..'
		setTimeout(function(){
			const
				accountValue = accountInput.value
				passwordValue = passwordInput.value
			if (accountValue === 's11055015' && passwordValue === 's11055015') {
			
			document.location.href="user1.html";
			}
			
		else{
		resultOutput.style.color = '#f00'
		resultOutput.innerText = '請檢查帳號密碼是否正確'
			}
		}, 2000)
	}
	loginButton.addEventListener('click', login)
	
	

