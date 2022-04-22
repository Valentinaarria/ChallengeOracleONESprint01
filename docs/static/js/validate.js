document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        document.getElementById("text-in").value = "";
	}
};

const textarea = document.getElementById('text-in');
const expression = {
	textIn: /^[a-z]+$/m, // Letras mininusculas sin acento
};

const formValidate = (e) => {
	switch (e.target.name) {
		case "textIn":
			fieldValidate(expression.textIn, e.target);
		break;
    }
};

const fieldValidate =(expression, input) => {	
    let warningText= document.getElementById('warning'); 
	let warningImg=document.getElementById('warning-icon')
	
	if((expression.test(input.value)) || (input.value == "")){
		warningText.style.color="var(--gray-400)"
		warningImg.style.fill="var(--gray-400)"		
	}
	
	else {
     warningText.style.color= "red";
	 warningImg.style.fill="red"		 
	}
};

textarea.addEventListener('keyup', formValidate);
textarea.addEventListener('blur', formValidate);