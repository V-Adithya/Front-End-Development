"use strict";
document.querySelectorAll(".needs-validation").forEach(form =>{
  form.addEventListener("submit", event =>{
    if(!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
    }form.classList.add("was-validated")
  });
});