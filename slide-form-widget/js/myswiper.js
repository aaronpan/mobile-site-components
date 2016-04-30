var MySwiper = {
  tabSwiper: null,
  contentSwiper: null,

  initSwipers: function() {
    var that = this;
    this.tabSwiper = new Swiper(".tab-swiper", {
      slidesPerView: "auto"
    });

    this.contentSwiper = new Swiper(".content-swiper", {
      slidesPerView: '1',
      onSlideChangeEnd: function(swiper) {
        var index = swiper.activeIndex;
        index >= 0 && that.slideTo(index, true);
      }
    });

    $(document).on("tap click", ".tab-item", function(event){
      var index = $(this).attr("index");
      $(".tab-item").removeClass("on");
      $(this).addClass("on");

      setTimeout(function(){
        that.slideTo(index, true);
        that.slideTo(index, false);
      }, 400);
      return false;
    });

    $(document).on("tap click", ".content-item-txt", function(event){
      event.preventDefault();
      var $my = $(this);

      $my.siblings(".content-item-txt").removeClass("on");
      $my.addClass("on");
      that.check();

      setTimeout(function(){
        var next = +Number($my.closest(".content-item").attr("index"));
        if (next < $(".content-item").length -1) {
          next++;
          that.slideTo(next, false);
          that.slideTo(next, true);
        }
        $my.find('input').prop('checked', 'checked');
      }, 400);
      return false;
    });
  },

  slideTo: function(index, swipe_tab) {
    if (swipe_tab) {
      this.tabSwiper.slideTo(index);
      var $tab_item = $(".tab-item");

      $tab_item.removeClass('on');
      $($tab_item[index]).addClass('on');
    } else {
      this.tabSwiper.slideTo(index);
      this.contentSwiper.slideTo(index);
    }
  },

  check: function() {
    // do something
  }
}
