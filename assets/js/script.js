var input = document.getElementById('input-text')
function confirmacao(){
    if (input.value == ""){
        alert('Digite alguma mensagem antes de enviar')
    }else{
        window.modal.showModal()
    }
}