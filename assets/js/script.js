var input = document.getElementById('input-text')
var button = document.getElementsByClassName('.button-send')
function confirmacao(){
    if (input.value == ""){
        alert('##Fazer mensagem de insira mensagem')
    }else{
        window.modaldialog.showModal()
    }
}