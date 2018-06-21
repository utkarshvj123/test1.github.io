 $(document).ready(()=> {
    $('.colDiv > img').click(function(e){
      let description = 
        $(this).parents('.colDiv').find('ul');
 
      if ($(description).is(':visible')) {
        description.hide("fast", "swing");
        $(this).attr("src", "image/up-arrow.png");
      } else {
        description.show("fast", "swing");
        $(this).attr("src", "image/down-arrow.png");
      }
    });
  });
