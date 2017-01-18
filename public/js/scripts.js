function addScripts(){
  var fontawesome, owl
  fontawesome = document.createElement("script");
  // owl = document.createElement("script");
  fontawesome.src = "https://use.fontawesome.com/37eb521d9c.js";
  // owl.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.min.js";

  document.body.appendChild(fontawesome);
  // document.body.appendChild(owl);
};
function startCarousel() {
  $(".owl-carousel").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !1,
    center: !0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1e3: {
        items: 5
      }
    }
  })
}
addScripts(startCarousel);

function menuAction(e) {
  $(".menu-close").click(function() {
    return !1
  }), $("#side-bar").toggleClass("side-slide"), $("#overlay").toggle(), "overflow: hidden;" == $("body").attr("style") ? $("body").removeAttr("style") : $("body").css({
    overflow: "hidden"
  }), contentAction()
}

function contentAction() {
  $("#side-bar-content").toggleClass("side-slide-content")
}

function previewImageSetCallback() {
  $(".extra-content").remove()
}

function previewImageSet() {
  for (var e = $(".img-container>img"), o = 0; o < e.length; o++) {
    var n = $(e[o]).parent().parent().find("p>img");
    null != n[0] && $(e[o]).replaceWith($(n[0]))
  }
  previewImageSetCallback()
}

function addMediaToPinterest() {
  var e = $($(".post-content>p>img")[0]).attr("src");
  e = "media=" + encodeURI(e);
  var o = $("#pinterest").attr("onclick");
  o && (o = o.replace("media=", e), $("#pinterest").attr("onclick", o))
}

function animatedScroll() {
  var e = $("html, body");
  e.stop().animate({
    scrollTop: 0
  }, "500", "swing")
}

// document.addEventListener("DOMContentLoaded", function(event) {

  var e;
  jQuery.ajax({
    url: "//freegeoip.net/json/",
    type: "POST",
    dataType: "jsonp",
    success: function(o) {
      console.log("city: " + o.city), console.log("region name: " + o.region_name), console.log("region code: " + o.region_code), console.log("ip: " + o.ip), console.log("country name: " + o.country_name), console.log("country code:" + o.country_code), e = o.country_code
    }
  }), document.querySelectorAll("[data-global]").forEach(function(o) {
    0 == $(o).data("global") && $(o).data("country") != e && $(o).remove()
  });
  for (var o = $(".featured-post"), n = 0; n < o.length; n++) {
    var t = $(o[n]).find("p>img");
    null != t[0] && $(o[n]).find("a>div>img").replaceWith(t[0])
  }
  for (var i = $(".recent-post"), n = 0; n < i.length; n++) {
    var t = $(i[n]).find("p>img");
    $(t).addClass("img-responsive"), null != t[0] && $(i[n]).find("div>a>img").replaceWith(t[0])
  }
  $(".post-preview").hover(function() {
    $(this).find("img").addClass("grow")
  }, function() {
    $(this).find("img").removeClass("grow")
  }), $(".post-preview").find("iframe").remove().end().find("p>img").parent().remove(), $("#side-bar a").hover(function() {
    $(this).parent().next().toggleClass("underline")
  }), $("#related-previews").hover(function() {
    $("#red-underline").toggleClass("red-grow")
  }), $(".img-container>img").hover(function() {
    $(this).addClass("grow")
  }, function() {
    $(this).removeClass("grow")
  }), $("select").change(function() {
    location.href = "/"
  }), previewImageSet(previewImageSetCallback), addMediaToPinterest(), startCarousel();
// });
