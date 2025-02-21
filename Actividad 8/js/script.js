         function mensajeSwitch() {
            let respuesta = parseInt(document.getElementById("hora").value);
            switch (respuesta) {
               case 22:
               case 23:
               case 0:
               case 1:
               case 2:
               case 3:
               case 4:
               case 5: 
               case 6:
              document.getElementById("mensaje").innerHTML = "Buenas noches";
               break; 

               case 7:
               case 8:
               case 9:
               case 10:
               case 11:
               document.getElementById("mensaje").innerHTML = "Buenos dias";
               break;

               case 12:
               case 13:
               case 14:
               case 15:
               case 16: 
               case 17:
               case 18:
               case 19: 
               case 20:
               case 21:
               document.getElementById("mensaje").innerHTML = "Buenas tardes";
               break;
               default:
                  document.getElementById("mensaje").innerHTML = "La hora introducida no es valida";
              
             }
          }
    
function mensajeIf() {
   let hora;
   hora =parseInt(document.getElementById("hora").value, 10);
   if (hora > 6 && hora < 11) {
      document.getElementById("mensaje").innerHTML = "Buenos dias";
   }
   if (hora > 12 && hora < 21) {
      document.getElementById("mensaje").innerHTML = "Buenos tardes";
   }
   if ((hora > 21 && hora < 25) || (hora > 0 && hora < 7)) {
      document.getElementById("mensaje").innerHTML = "Buenos noches";
   }
   if (hora > 24) {
      document.getElementById("mensaje").innerHTML = "La hora que has introducida no es válida";

   }
      
   
}