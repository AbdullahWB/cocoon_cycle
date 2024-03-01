$(document).ready(function () {
  $(".carousel").carousel();
});

function changeBg(bg, title) {
  const banner = document.querySelector("#content-bg");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../images/background/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

// filtaring
var mixer = mixitup('.gallery-part');
// gallery active class js
$('.gallery-menu ul li').click(function() {
    $(this).addClass('activ').siblings().removeClass('activ');
});
//veno box pop up
$('.venobox').venobox({
    numeration: true,
    infinigall: true,
    share: true,
});

