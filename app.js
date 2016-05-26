var template = function(text) {
   return '<p><input type="checkbox"><i class="star">*</i><span>' + text + '</span><i class="remove">X</i></p>'; 
 };

var main = function() {
  $('form').submit(function() {
    var todo = $('#todo'); 
    if(todo.val() !== "") {
      var html = template(todo.val());
      $(html).appendTo('.list'); 
      $(todo).val(""); 
    } 
    return false; 
  }); 
  
  $(document).on("click", '.remove', function(){
    $(this).parent().remove(); 
  }); 
  $(document).on("click", '.star', function() {
    $(this).toggleClass('active'); 
  }); 
}; 


$(document).ready(main); 