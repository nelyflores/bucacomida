 
  function findMe(){
    var salida=document.getElementById('map');
  function localizacion(posicion){
    var latitude=posicion.coords.latitude;
    var longitude=posicion.coords.longitude;
    var imgURL="https://maps.googleapis.com/maps/api/staticmap?center="+
    latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&Key=AIzaSyD0SBG5F97yON9GcTOwudBMILlgKv4uTds";
    salida.innerHTML="<img src='"+imgURL+"'>";
  }
    navigator.geolocation.getCurrentPosition(localizacion);
  }findMe();
