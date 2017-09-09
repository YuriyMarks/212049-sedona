var search = document.querySelector(".search-button");
var modalForm = document.querySelector(".modal-form");
var focus = document.querySelector("[name=arrivel-time]");
var departureDate =document.querySelector("[name=departure-time]");
var form = document.querySelector("form");

search.addEventListener("click", function(evt){
  
  if(modalForm.classList.contains("modal-form-show")){
    evt.preventDefault();
    modalForm.classList.remove("modal-form-show");
    modalForm.classList.remove("modal-form-error");
  }
  else if(!modalForm.classList.contains("modal-form-show")){  
    evt.preventDefault();
    modalForm.classList.add("modal-form-show");
    focus.focus();
  } 
});

form.addEventListener("submit", function(evt){
  if(!focus.value || !departureDate.value){
      evt.preventDefault();
      modalForm.classList.remove("modal-form-error");
      modalForm.offsetWidth = modalForm.offsetWidth;
      modalForm.classList.add("modal-form-error");
  }
});
window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
      modalForm.classList.remove("modal-form-show");
      modalForm.classList.remove("modal-form-error");
  }
});