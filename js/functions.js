$( document ).ready(function() {
  // Menu Toggle Script
  $("#sidebar-toggle").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('sidebar-exp sidebar-min');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('#sidebar-exp').toggle();
    $('#sidebar-min').toggle();
  });
});
