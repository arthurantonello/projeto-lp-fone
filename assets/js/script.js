function confirmacao(){
    var input = document.getElementById('input-text')
    if (input.value == ""){
        window.modalErro.showModal()
    }else{
        window.modalOk.showModal()
    }
}