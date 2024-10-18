
const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", function (e) {
   
  const elementoClicado = e.target 
  
  const verifyModal = document.getElementById('modal')
  const menu = document.getElementById('contextMenu')
   

  if(verifyModal.className === 'modalOff' && elementoClicado.className === 'line' ){
    e.preventDefault(); 
    contextMenu.style.display = "block";
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
    
  }else if(menu.style.display){
    contextMenu.style.display = "none";
  }


contextMenu.querySelectorAll("li").forEach(function (item) {
    item.addEventListener("click", function () {

      
      let items = item.innerText.toLocaleLowerCase();
      let text = elementoClicado.innerText 
        
      if(items === "editar"){
        
        let modal = document.getElementById("modal")
        modal.classList = "modalOn"

        let nameModal = document.getElementById("nameModal")
        nameModal.innerText = items.toLocaleUpperCase();

        let input = document.getElementById('altertext')
        input.value = text

         let sendButton = document.getElementById('catch')
        // sendButton.addEventListener('click', () => {
        // }, {once:true});

        sendButton.addEventListener('click', atualizarTexto);

        function atualizarTexto() {
          let newInfo = document.getElementById('altertext');
          elementoClicado.innerText = newInfo.value
          
          let modal = document.getElementById("modal")
          modal.classList = "modalOff"
        }
        
        
        //sendButton.removeEventListener('click', atualizarTexto);

        

      
      } else if(items === "alterar"){
        
        let modal = document.getElementById("modal")
        modal.classList = "modalOn"

        let input = document.getElementById('altertext')
        input.value = text

        let nameModal = document.getElementById("nameModal")
        nameModal.innerText = items.toLocaleUpperCase();


      }


      let cancelar = document.getElementById('back');
      cancelar.addEventListener("click", () => verifyModal.classList ='modalOff');

      contextMenu.style.display = "none";
    });
    
  });

});



document.addEventListener("click", function () {
  contextMenu.style.display = "none";

   const verifyModal = document.getElementById('modal');
   const popup = document.querySelector('.popup');

    verifyModal.addEventListener("click", ()=>{
      if(verifyModal.className === 'modalOn'){
        verifyModal.classList = "modalOff"
      }
    })
    popup.addEventListener("click", (event) => {
      event.stopPropagation();
    });

});




