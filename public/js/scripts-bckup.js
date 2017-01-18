// Menu slider handler (also prevents body from scroll on menu open)
function menuAction(){
  $('#side-bar').toggleClass('side-slide');

  if($('body').attr('style') == "overflow: hidden;"){
    $('body').removeAttr("style");
  } else {
    $('body').css({"overflow":"hidden"});
  };
  contentAction();
};

function contentAction(){
  $('#side-bar-content').toggleClass("side-slide-content");
}

// Grab image from post and place it in preview
function previewImageSetCallback(){
  $('.extra-content').remove();
}
function previewImageSet(){
  var placeholders = $('.img-container>img')
  for(var i=0;i<placeholders.length;i++){
    var images = $(placeholders[i]).parent().parent().find('p>img');
  	if(images[0] != null){
      $(placeholders[i]).replaceWith($(images[0]));
    }
  }
  previewImageSetCallback();
}

// Add media to pinterest share
function addMediaToPinterest(){
  var url = $($('.post-content>p>img')[0]).attr('src');
  url = "media=" + encodeURI(url);

  var string = $('#pinterest').attr("onclick");
  if(string){
    string = string.replace("media=", url);
    $('#pinterest').attr( "onclick", string );
  }
};

// Scroll to top
function animatedScroll(){
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, '500', 'swing');
}


document.addEventListener('DOMContentLoaded', function() {

  // Request Location Info based on IP
  var countryCode
  jQuery.ajax( {
    url: '//freegeoip.net/json/',
    type: 'POST',
    dataType: 'jsonp',
    success: function(location) {
      // example where I update content on the page.
      console.log("city: "+location.city);
      console.log("region name: "+ location.region_name);
      console.log("region code: "+location.region_code);
      // console.log("areacode: "+location.areacode);
      // console.log("zipcode: "+location.zipcode);
      console.log("ip: "+location.ip);
      // console.log("longitude: "+location.longitude);
      // console.log("latitude: "+location.latitude);
      console.log("country name: "+ location.country_name);
      console.log("country code:"+ location.country_code);
      countryCode = location.country_code;
    }
  } );

  document.querySelectorAll('[data-global]').forEach(function(item){
    if( $(item).data("global") == false && $(item).data("country") != countryCode ){
        $(item).remove();
    }
  });

  // Initialize OWL CAROUSEL
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  // Grab first image from post if exists and place it as main on post preview card
  var preview = $('.featured-post')
  for (var i=0; i<preview.length; i++){
    var img = $(preview[i]).find('p>img');
    if ( img[0] != null ){
      $(preview[i]).find('a>div>img').replaceWith(img[0]);
    }
  }

  // Grab first image from post if exists and place it as main on post preview card
  var prev1 = $('.recent-post')
  for (var i=0; i<prev1.length; i++){
    var img = $(prev1[i]).find('p>img');
    $(img).addClass('img-responsive');
    if ( img[0] != null ){
      $(prev1[i]).find('div>a>img').replaceWith(img[0]);
    }
  }

  // Zoom in on image when preview post is hovered
  $(".post-preview").hover(function(){
    $(this).find("img").addClass("grow");
     }, function(){
    $(this).find("img").removeClass("grow");
  });

  // Revome images and iframes from preview posts
  $('.post-preview').find('iframe').remove().end().find('p>img').parent().remove();

  // Side menu animation
  $( "#side-bar a" ).hover(function(){
    $( this ).parent().next().toggleClass("underline");
  });

  previewImageSet(previewImageSetCallback);

  addMediaToPinterest();

  // Recent posts aside animation
  $('#related-previews').hover(function(){
    $('#red-underline').toggleClass("red-grow");
  });

  // Zoom recent images side content
  $('.img-container>img').hover(function(){
    $(this).addClass("grow");
     }, function(){
    $(this).removeClass("grow");
  })
});








// This method uses HTML5 location to return lat long
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
//
// function success(pos) {
//   var crd = pos.coords;
//
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// };
//
// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };
//
// navigator.geolocation.getCurrentPosition(success, error, options);
