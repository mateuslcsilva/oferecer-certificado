	document.querySelector('.inputCostumer').focus()
	document.querySelector('.input').addEventListener('focus', (event) => {
	event.target.value = 44
	})

	const messageState = () => {
	let newMessage = `Oi, ${hour >= 12? 'boa tarde' : 'bom dia' }, aqui é ${salesMan}, da Publisoft, tudo bem? Vi que o certificado digital da ${costumer} está vencendo dia ${validate}.%0A%0A Nós fazemos a renovação por aqui também, sai ${certificateValue}. Você tem interesse em renovar com a gente?`
	return newMessage
}

	const updateHref  = () => {
	document.querySelector('#sendMessage').href=`https://wa.me/${phoneNumber}/?text=${message.replaceAll(' ', '%20')}`
}

	const getSalesMan = (element) => {
	salesMan = element.value
	message = messageState()
	updateHref()
}
	const getCertificateValue = (element) => {
	certificateValue = element.value
	message = messageState()
	updateHref()
}

	const getNumber = (element) => {
	phoneNumber = `55${element.value.replace(/[^0-9]/g, '')}`
	updateHref()

	if(element.value.replace(/[^0-9]/g, '').length < 11){
	document.querySelector('#sendMessage').classList.add('disabled')
	document.querySelector('.alert-invalid-phone-number').style.display = 'block'
	element.style.borderColor = 'red'
	} else {
	document.querySelector('#sendMessage').classList.remove('disabled')
	document.querySelector('.alert-invalid-phone-number').style.display = 'none'
	element.style.borderColor = '#191919'
	}
}

	const getCostumer = (element) => {
	costumer = `*${element.value.toUpperCase()}*`
	message = messageState()
	updateHref()
}

	const getValidate = (event, element) => {

	if (event.key == 'Backspace') return // a função não faz nada se você teclar espaço

	/*if (element.value.length > 5) { // a função não te deixa digitar mais de 4 números
	element.value = element.value.substring(0, 5)
	return
}*/

	let value = element.value.replaceAll(/[^0-9]/g, '')	// a função não te deixa digitar nada além de números

	if(value.length >= 2){ // mascara o valor, adicionando automaticamente o "/" em "dd/mm"
	element.value = value.substring(0,2) + '/' + value.substring(2, value.length+1)
	} else {
	element.value = value
	}

	if (element.value.length > 5) { // a função não te deixa digitar mais de 4 números
	element.value = element.value.substring(0, 5)
	return
	}

	if (element.value.substring(0,2) > 31 || element.value.substring(3, element.value.length + 1) > 12){
	element.style.borderColor = 'red'
	document.querySelector('.alert-invalid-validate').style.display = 'block'
	document.querySelector('#sendMessage').classList.add('disabled')
	} else {
	element.style.borderColor = '#191919'
	document.querySelector('.alert-invalid-validate').style.display = 'none'
	document.querySelector('#sendMessage').classList.remove('disabled')
	}

	validate = `*${element.value}*` // guarda o valor do input como variável
	message = messageState() // atualiza a mensagem com o valor da variável alterada acima
	updateHref() // altera a mensagem no href que vai chamar o chat do whats
}



let date = new Date()
let hour = date.getHours()
let phoneNumber = ''
let costumer = ''
let validate = ''
let salesMan = document.querySelector('#salesMan').value
let certificateValue = document.querySelector('#certificateType').value
let message = messageState()