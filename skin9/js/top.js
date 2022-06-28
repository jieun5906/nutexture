
$(document).ready(function() {
    $('nav li').hover(
      function() {
          var obj = $('ul', this);
          if(obj.attr("data-slide") != "on") {
            obj.attr("data-slide", "on")
            obj.fadeIn(200, function() {
                //obj.attr("data-slide", "off");
            });
          }
      },
      function() {
          var obj = $('ul', this);
          obj.fadeOut(70, function() {
               obj.attr("data-slide", "off");
          });
      }
    );
});
