
//Em testes
function btnbag(){
    var action = document.querySelector('#container-button #button-bag')
    var novaImg = 'url(./img/shopping-cart-contrast.png)'
    for (var i = 0; i < action.length; i++){
        var checkAction = action[i];
        checkAction.addEventListener('mouseover', function(btnbag){
            this.querySelector('img').src = novaImg
        })
    }
}

btnbag()