$(function(){
  $(".my-form").validate({
    onfocusout: false,
    onclick: false,
    onkeyup: false,
    onsubmit: true,
    wrapper: "",
    showErrors: function(errorMap, errorList){
      if (errorList.length > 0) {
        var $first_ele = $(errorList[0].element);
        var index = $first_ele.closest(".content-item").attr("index");
        $(".tab-swiper [index="+index+"]").trigger('tap');
        alert("Please select something.");
      }
    }
  });
});
