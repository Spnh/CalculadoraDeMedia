function pegarNotas(){ 
	var nota1=parseFloat(document.getElementById("notaBim1").value);
	
	var nota2=parseFloat(document.getElementById("notaBim2").value);

	var nota3=parseFloat(document.getElementById("notaBim3").value);

	var nota4=parseFloat(document.getElementById("notaBim4").value);

	var media= (nota1+nota2+nota3+nota4)/4;
	var mostrarMedia =document.getElementById("mediaHtml");
	mostrarMedia.innerHTML=media.toFixed(1);
	if (media<6) {
		mostrarMedia.innerHTML="Você reprovou, sua média é : "+media;
	}
	
	else if (nota1>10 || nota1<0){
		mostrarMedia.innerHTML="Insira uma nota de 0 a 10!"
	}

	else if (nota2>10 || nota2<0){
		mostrarMedia.innerHTML="Insira uma nota de 0 a 10!"
	}

	else if (nota3>10 || nota3<0){
		mostrarMedia.innerHTML="Insira uma nota de 0 a 10!"
	}

	else if (nota4>10 || nota4<0){
		mostrarMedia.innerHTML="Insira uma nota de 0 a 10!"
	}

	else{
		mostrarMedia.innerHTML=
		"Parabéns você passou, sua média é : "+media;
	}

	}
