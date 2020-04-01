var modal={
  btn_2 : document.getElementsByClassName('btn_2'),
  text : document.getElementById('text'),
  medlem : document.getElementById('medlem'),
  regiter:document.getElementById('register')
}



function send() {

  modal.text.style.display='none';
  modal.register.style.display='none';
  
}


  function bli() {
    modal.text.style.display='none';
    modal.medlem.style.display='block';
  }
