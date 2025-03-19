var btnAbrirCard = document.querySelector('#btnAbrirCard')
var containerModalCard = document.querySelector('.container-modal-card')

btnAbrirCard.addEventListener('click', ()=>{
      containerModalCard.classList.toggle('ativo')
})
btnAbrirCardSair.addEventListener('click', ()=>{
      containerModalCard.classList.toggle('ativo')
})

//abri menu
var btnAbrirMenu = document.querySelector('#btnAbrirMenu')
var btnAbrirMenuSair = document.querySelector('#btnAbrirMenuSair')
var containerMenu = document.querySelector('.container-menu')

btnAbrirMenu.addEventListener('click', ()=>{
      containerMenu.classList.toggle('ativo')
})
btnAbrirMenuSair.addEventListener('click', ()=>{
      containerMenu.classList.toggle('ativo')
})

//consumo json
var listaCardapio = document.querySelector('.lista-cardapio')
var btnMenuBebidas = document.getElementById
fetch('/data.json')
      .then(response => response.json())
      .then(json => console.log(json.bebidas))    
//get lanches
let btn

//alerta enviar pedido
var btnEnviarPedido = document.querySelector('#enviar-pedido')
      btnEnviarPedido.addEventListener('click', ()=>{
            let confirmarenvio = confirm('deseja enviar pedido ao resourante')
            if(confirmarenvio){
                  alert('Pedido enviado com sucesso')
            }else{
                  alert('O pedido nao foi enviado')
            }
      })