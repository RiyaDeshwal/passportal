function check () {
    // (C1) INIT
    var valid = true, error = "", field = "";
  
    // (C2) NAME
    field = document.getElementById("name");
    
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      field.classList.remove("valid");
    
    } else {
      field.classList.remove("err");
      field.classList.add("valid");
     
    }
    
  
    // (C3) NUMBER
    field = document.getElementById("number");
  
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      field.classList.remove("valid");
      
    } else {
      field.classList.remove("err");
      field.classList.add("valid");
     
    }
  //c4
  field=document.getElementById("age");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");
    
  } else {
    field.classList.remove("err");
    field.classList.add("valid");
   
  }
  //c5
  field=document.getElementById("email");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");
    
  } else {
    field.classList.remove("err");
    field.classList.add("valid");
   
  }
  //c6
  field=document.getElementById("number");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");
    
  } else {
    field.classList.remove("err");
    field.classList.add("valid");
   
  }
  //c7
  field=document.getElementById("idtype");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");
   
  }
  //c8
  field=document.getElementById("idnum");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");
    
  } else {
    field.classList.remove("err");
    field.classList.add("valid");
   
  }
    return valid;
  }