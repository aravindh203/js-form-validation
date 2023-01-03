
let form=document.getElementById("form");

form.addEventListener("submit",function(e){
	e.preventDefault();

	let name=document.getElementById("name");	
	if(name.value===""){
		let error1=document.createElement("p");
		name.parentNode.appendChild(error1);
		error1.innerText="name cannot be empty";
		name.style.border="1px solid red";
	}
	else{
		name.nextElementSibling.remove();
		name.style.border="1px solid black";
	}
	
	let email=document.getElementById("email");
	if(email.value===""){
		let error2=document.createElement("p");
		email.parentNode.appendChild(error2);
		error2.innerText="email cannot be empty";
		email.style.border="1px solid red";
	}
	else{
		email.nextElementSibling.remove();
		email.style.border="1px solid black";
	}

	let mobile=document.getElementById("mobile");
	if(mobile.value.length!==10){
		let error3=document.createElement("p");
		mobile.parentNode.appendChild(error3);
		error3.innerText="enter a valid mobile number";
		mobile.style.border="1px solid red";
	}
	else{
		mobile.nextElementSibling.remove();
		mobile.style.border="1px solid black";
	}

	let password1=document.getElementById("pass");

	let password2=document.getElementById("confirm");
	if(password2.value!==password1.value){
		let error4=document.createElement("p");
		password2.parentNode.appendChild(error4);
		error4.innerText="password does not match";
		name.style.border="1px solid red";
	}
	else{
		password2.nextElementSibling.remove();
		password2.style.border="1px solid black";
	}
})