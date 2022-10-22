function kontrolet()
	{
	var mail = document.getElementById("email").value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
	
	if (regex.test(mail)==true)
	{
		alert("Mail adresi geçerli");
	}
	
	else
	{
		alert("Hata geçersiz mail adresi girdiniz!");
	}
}