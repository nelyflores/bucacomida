 

  function findMe(){
    var salida=$('#map');
  function localizacion(posicion){
    var latitude=posicion.coords.latitude;
    var longitude=posicion.coords.longitude;
   var coordenadas={
    lat:latitude,
    lng:longitude
  };
  var imgURL="https://maps.googleapis.com/maps/api/staticmap?center="+
    latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&Key=AIzaSyD0SBG5F97yON9GcTOwudBMILlgKv4uTds";
    salida.html("<img src='"+imgURL+"'>"); 
  }

   function cambiarUbicacion(coord){
    var latitud= $(this).data("latitud");
    var longitud=$(this).data("longitud");
    console.log(latitud);
    var coordenadas={
    lat:latitude,
    lng:longitude
  };

  }
  


    navigator.geolocation.getCurrentPosition(localizacion);
  };

  $(document).ready(findMe);


