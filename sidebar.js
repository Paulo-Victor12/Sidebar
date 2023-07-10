
var menuItem = document.querySelectorAll('.item-menu')




var btnExp = document.querySelector('#btn-exp')
var menuSidebar = document.querySelector('.menu-sidebar')

btnExp.addEventListener('click', function(){
    menuSidebar.classList.toggle('expandir')
})

function selectlink(){
    menuItem.forEach((item)=>
   item.classList.remove('ativo') 
    )
    this.class.list.add('ativo')
}

menuItem.forEach((item)=>
   item.addEventListener('click',selectlink)
)