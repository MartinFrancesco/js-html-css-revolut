$( document ).ready(function() {

//Ref
var dropLinks = $('.with-dropdown > a');
var dropMenu = $('.with-dropdown .dropdown-menu, .with-dropdown .dropdown-menu-2');


   //EVENTI Show-Hide first drop
   dropLinks.click( function() {

     var actualMenu = $(this).next(dropMenu);

     dropMenu.not(actualMenu).hide();

     actualMenu.toggle();

   });
});
