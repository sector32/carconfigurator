$(document).ready(function() {
  $("#content-slider").lightSlider({
    item:1,
    loop:true,
    keyPress:true,
    controls: false
  });

  $('#footer .left').on( 'click', prevPage );
  $('#footer .right').on( 'click', nextPage );
  $('#cheapEdition .bigButton').click( () => { car.edition = cheapEdition; car.striping = null; setPage1(); } );
  $('#sportEdition .bigButton').click( () => { car.edition = sportEdition; car.striping = redStripingColor; setPage1(); } );
  $('#m512 .bigButton').click( () => { car.engine = m512; setPage2(); } );
  $('#m640 .bigButton').click( () => { car.engine = m640; setPage2(); } );
  $('#m1000 .bigButton').click( () => { car.engine = m1000; setPage2(); } );
  $('#whiteCarColor').click( () => { car.color = whiteBodyColor; setPage3(); } );
  $('#greenCarColor').click( () => { car.color = tundraBodyColor; setPage3(); } );
  $('#brown1CarColor').click( () => { car.color = goulashBodyColor; setPage3(); } );
  $('#brown2CarColor').click( () => { car.color = stroganoffBodyColor; setPage3(); } );
  $('#brown3CarColor').click( () => { car.color = panosBodyColor; setPage3(); } );
  $('#marxWheel').click( () => { car.wheel = marxWheel; setPage4(); } );
  $('#leninWheel').click( () => { car.wheel = leninWheel; setPage4(); } );
  $('#trotskiWheel').click( () => { car.wheel = trotskiWheel; setPage4(); } );
  $('#maoWheel').click( () => { car.wheel = maoWheel; setPage4(); } );
  $('#stalinWheel').click( () => { car.wheel = stalinWheel; setPage4(); } );
  $('#stripingRed').click( () => { car.striping = redStripingColor; setPage5(); } );
  $('#stripingYellow').click( () => { car.striping = yellowStripingColor; setPage5(); } );
  $('#stripingWhite').click( () => { car.striping = whiteStripingColor; setPage5(); } );
  $('#noDoor').click( () => { car.door = null; setPage5(); } );
  $('#putin').click( () => { car.door = putinDoor; setPage5(); } );
  $('#star').click( () => { car.door = starDoor; setPage5(); } );
  $('#kunstmaan').click( () => { car.door = kunstmaanDoor; setPage5(); } );
  $('#noSputnik').click( () => { car.sputnik = null; setPage5(); } );
  $('#sputnikGreen').click( () => { car.sputnik = greenSputnikColor; setPage5(); } );
  $('#sputnikRed').click( () => { car.sputnik = redSputnikColor; setPage5(); } );
  $('#sputnikPurple').click( () => { car.sputnik = purpleSputnikColor; setPage5(); } );

  for (let i=0; i < options.length; i++) {
    $('#' + options[i].id + ' .bigButton').click( () => { car.switchOption(options[i]); setPage6(); } );
  }

  setPage();

  fetch('https://car-api.firebaseio.com/rest.json').then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    //return jsonResponse;
    setCapitalistImages(jsonResponse);
  });

});


/* VARIABLES
   ========= */

let page = 1;
let pageTitles = ['Uitvoering', 'Motor', 'Kleuren', 'Wielen', 'Exterieur', 'Opties', 'Recapitulatie'];

/* METHODS
   ========= */

function nextPage() {
  page++;
  setPage();
}

function prevPage() {
  page--;
  setPage();
}

function setPage() {
  if (page === 1) {
    $('#footer .left').addClass('none');
  }else{
    $('#footer .left').removeClass('none');
  }

  if (page === 7) {
    $('#footer .right').addClass('none');
  }else{
    $('#footer .right').removeClass('none');
  }

  $('#footer .center').html((page) + ' ' + pageTitles[page - 1]);
  $('.page').addClass('none');
  $('#page' + page).removeClass('none');

  window['setPage' + page]();
}

function setPrice () {
  $('#totalPrice').html(formatPrice(car.price));
}

function setTitle () {
  $('#info').html('Lađa ' + car.edition.description + ' ' + car.engine.description);
}

function setPage1() {
  $('#page1 .block').removeClass('selected');
  $('#' + car.edition.id).addClass('selected');

  $('#cheapEdition .price').html( formatPrice(car.basePrice + cheapEdition.price) );
  $('#sportEdition .price').html( formatPrice(car.basePrice + sportEdition.price) );

  setTitle();
  setPrice();
}

function setPage2() {
  $('#page2 .block').removeClass('selected');
  $('#' + car.engine.id).addClass('selected');

  $('#m512 .price').html( formatPrice(car.basePrice + car.edition.price + m512.price) );
  $('#m640 .price').html( formatPrice(car.basePrice + car.edition.price + m640.price) );
  $('#m1000 .price').html( formatPrice(car.basePrice + car.edition.price + m1000.price) );

  setTitle();
  setPrice();
}

function setPage3() {
  $('#page3 .gridContainer div').removeClass('selected');
  $('#' + car.color.id + 'CarColor').addClass('selected');
  $('#colorTitle').html(car.color.description);
  $('#colorPrice').html( formatPrice(car.color.price) );

  setPrice();
}

function setPage4() {
  $('#page4 .gridContainer div').removeClass('selected');
  $('#' + car.wheel.id).addClass('selected');
  $('#wheelTitle').html(car.wheel.description + ', ' + car.wheel.materialName);
  $('#wheelPrice').html( formatPrice(car.wheel.price) );

  setPrice();
}

function setPage5() {
  $('#page5 .gridContainer div').removeClass('selected');

  if (car.edition.id === 'sportEdition') {
    $('#stripingContainer').removeClass('none');

    $('#' + car.striping.id).addClass('selected');
    $('#stripingTitle').html(car.striping.description);
    $('#stripingPrice').html( formatPrice(0) );
  }else{
    $('#stripingContainer').addClass('none');
  }

  if (car.door) {
    $('#' + car.door.id).addClass('selected');
    $('#doorTitle').html(car.door.description);
    $('#doorPrice').html( formatPrice(car.door.price) );
  }else{
    $('#noDoor').addClass('selected');
    $('#doorTitle').html('Njet');
    $('#doorPrice').html( formatPrice(0) );
  }


  if (car.sputnik) {
    $('#' + car.sputnik.id).addClass('selected');
    $('#sputnikTitle').html(car.sputnik.description);
    $('#sputnikPrice').html( formatPrice(car.sputnik.price) );
  }else{
    $('#noSputnik').addClass('selected');
    $('#sputnikTitle').html('Njet');
    $('#sputnikPrice').html( formatPrice(0) );
  }

  setPrice();
}

function setPage6() {
  //alert(car.options);

  for (let i=0; i < options.length; i++) {

    if (car.hasOption(options[i])) {
      $('#' + options[i].id).addClass('selected');
      $('#' + options[i].id + ' .bigButton').html('VERWЧDEЯEN');
    }else{
      $('#' + options[i].id).removeClass('selected');
      $('#' + options[i].id + ' .bigButton').html('TФEVOEGEЛ');
    }

  }

  setPrice();
}

function setPage7() {
  $('#endEdition').html(car.edition.description);
  $('#endMotor').html(car.engine.description);
  $('#endColor').html(car.color.description);
  $('#endWheel').html(car.wheel.description + ', ' + car.wheel.materialName);

  $('#endTotalPrice').html(formatPrice(car.price));

  if (car.options.length > 0) {
    let text = '';
    for (let i=0; i < car.options.length; i++) {
      text += car.options[i].description + '<br>';
    }
    $('#endOptions').html(text);
  }else{
    $('#endOptions').html('U heeft geen extra opties');
  }

  setPrice();
}

function formatPrice(price) {
  return price + ' RUB';
}

function setCapitalistImages(json) {
  audiOption.image = json[0].logoUrl;
  bmwOption.image = json[1].logoUrl;
  vwOption.image = json[2].logoUrl;
}

let device = window.device;

if ( device.mobile() ) {
  $('#configurator, #footer').css('max-width', '5000px');
}

window.onresize = function(event) {
    setMode();
};

function setMode() {
  //alert(window.innerWidth);

  if ( !(device.mobile()) ) {

    if (window.innerWidth > 750) {

      $('#configurator, #footer').css('max-width', '400px');
      $('.sliderContainer').css('position', 'fixed');
      $('.sliderContainer').css('left', (window.innerWidth - 400 - 350) * .5 + 400 + 'px');
      //$('.sliderContainer').css('top', (window.innerHeight - 300) * .5 + '0px');

    }else{
      $('#configurator, #footer').css('max-width', '750px');
      $('.sliderContainer').css('position', 'relative');
      $('.sliderContainer').css('left', '0px');
      $('.sliderContainer').css('top', '0px');
    }

  }
}

setMode();
