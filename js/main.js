$( document ).ready(function() {


//Ref
var dropLinks = $('.with-dropdown > a');
var dropMenu = $('.with-dropdown .dropdown-menu');


   //EVENTI Show-Hide Menu
   dropLinks.click( function() {
     $(this).next(dropMenu).toggle();
   });

});
