const contextMenu = document.getElementById("contextMenu");

document.addEventListener("contextmenu", function (e) {
  const elementoClicado = e.target;
  const verifyModal = document.getElementById('modal');
  
  if (verifyModal.classList.contains('modalOff') && elementoClicado.classList.contains('line')) {
    e.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
  } else if (contextMenu.style.display === "block") {
    contextMenu.style.display = "none";
  }

  contextMenu.querySelectorAll("li").forEach(function (item) {
    item.onclick = function () {

      const text = elementoClicado.innerText;
      const items = item.innerText.toLowerCase();
      const sendButton = document.getElementById('catch');
      const input = document.getElementById('altertext');

      if (items === "editar" || items === "alterar") {
        if(items === "editar"){

          //console.log("Editar")

           openModal(items);
           incluir(sendButton, text, elementoClicado, input);


        }else if(items === "alterar"){
         // console.log("Alterar")


        }
      }

      const cancelar = document.getElementById('back');
      cancelar.onclick = () => closeModal();

      contextMenu.style.display = "none";
    };
  });
});


document.addEventListener("click", function () {
  contextMenu.style.display = "none";
  const verifyModal = document.getElementById('modal');
  
  if (verifyModal.classList.contains('modalOn')) {
    verifyModal.onclick = () => closeModal();
  }
  
  const popup = document.querySelector('.popup');
  popup.onclick = (event) => {
    event.stopPropagation();
  };
});






function incluir(sendButton, text, elementoClicado, input){
   input.value = text;
  sendButton.onclick = () => {
    elementoClicado.innerText = input.value;
     closeModal();
  };
}

function openModal(items){
  const modal = document.getElementById("modal");
  modal.classList.remove("modalOff");
  modal.classList.add("modalOn");
  const nameModal = document.getElementById("nameModal");
  nameModal.innerText = items.toUpperCase();
}

function closeModal(){
  const modal = document.getElementById("modal");
  modal.classList.remove("modalOn");
  modal.classList.add("modalOff");
}
