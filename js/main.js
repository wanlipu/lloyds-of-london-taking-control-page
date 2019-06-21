// $(document).ready(function () {
//     $("#first-item-ha").hover(
//   function () {
//      // $('.submenus').stop(true, true).slideDown('medium');
//      $(".submenus").css("visibility", "visible");

//   }, 
//   function () {
//      // $('.submenus').stop(true,true).slideUp('medium');
//      $(".submenus").css("visibility", "hidden");
     
//   }
// );

// });



  $(document).ready(function () {
    $("#first-item-ha").hover(function () {
      $(".submenus").css("visibility", "visible");
    });

    $(".submenus").hover(function() {
      $(".submenus").css("visibility", "visible");
    });

    $(".submenus, #first-item-ha").mouseleave(function() {
      $(".submenus").css("visibility", "hidden");
    })


});