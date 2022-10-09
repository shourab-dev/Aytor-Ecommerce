$(function () {
  //*JQUERY CODE STARTS HERE

  // *SEARCH BAR
  const searchArea = $(".searchArea");
  const searchLg = $(".search-lg");
  const searchSm = $(".search-sm");

  searchLg.on("click", searchAreaToggler);
  searchSm.on("click", searchAreaToggler);

  function searchAreaToggler() {
    $(this).children("i").toggleClass("fa-xmark");

    searchArea.toggleClass("show");
  }

  //*SEARCH BAR ENDS HERE

  //*BANNER STARTS HERE
  const productDetailSlider = $(".productDetailSlider");
  const productMainImageSlider = $(".productMainImageSlider");
  const thumbSlides = $(".thumbSlider .thubSlide");

  productDetailSlider.slick({
    arrows: false,
    dots: false,
    asNavFor: ".productMainImageSlider",
    infinite: false,
  });
  productMainImageSlider.slick({
    arrows: false,
    dots: false,
    infinite: false,
    asNavFor: ".productDetailSlider",
  });

  thumbSlides.click(function () {
    let key = $(this).data("key");
    productMainImageSlider.slick("slickGoTo", key);
  });
  //*BANNER ENDS HERE
});
