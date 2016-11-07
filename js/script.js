function todoapp(){
  //Boton like
  var like = document.createElement('span');
  like.setAttribute('type','button');
  like.setAttribute('class','iconos');

  var likeicon = document.createElement('i');
  likeicon.setAttribute('class', 'fa fa-heart');
  like.appendChild(likeicon);

  //Boton erase
  var erase = document.createElement('span');
  erase.setAttribute('type','button');
  erase.setAttribute('class','iconos');

  var eraseicon = document.createElement('i');
  eraseicon.setAttribute('class', 'fa fa-trash');
  erase.appendChild(eraseicon);

  //Boton check
  var tiket= document.createElement("input");
  tiket.setAttribute("id" , "check");
  tiket.setAttribute("type", "checkbox");

  //Tareas nuevas + botones
  var li = document.createElement("li");
  var inputValue = document.getElementById("agregatarea").value;
  var texto = document.createTextNode(inputValue);
  li.appendChild(tiket);
  li.appendChild(texto);
  li.appendChild(like);
  li.appendChild(erase);

  //Condicion "Tarea en blanco"
  if (inputValue === null || inputValue==="") {
    alert("¡¡No puede quedar en blanco!!");
  } else {
    document.getElementById("nuevalista").appendChild(li);
  }
  document.getElementById("agregatarea").value = "";

  //Propiedades Like
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(like);
  li.appendChild(span);

  //Propiedades Erase
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(erase);
  li.appendChild(span);

  //Evento like
  like.addEventListener('click', function(){
    like.classList.toggle('like');
  });

  //Evento erase
  erase.addEventListener('click', function(){
    li.style.display = "none";
  });

  //Evento check
  tiket.addEventListener("click", function(){
    li.classList.toggle("checked");
  });


}