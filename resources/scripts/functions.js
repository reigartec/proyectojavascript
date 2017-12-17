function agregarPostFavorito(postId)
{//begin function

  var localStorage = window.localStorage;
  var postFavorito = {};
  var dbpostFavoritos = localStorage.getItem('postFavorito');

  if(dbpostFavoritos != null)
  {
    postFavorito = JSON.parse(dbpostFavoritos);
  }          
    var existe = false;
    if (postId in postFavorito){
      delete postFavorito[postId];
    }else{
      existe = true;
      postFavorito[postId] = true;
    }

    localStorage.setItem('postFavorito', JSON.stringify(postFavorito));
    return existe;

}//end function