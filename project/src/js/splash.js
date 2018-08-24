let device = window.device;

window.onresize = function(event) {
    setMode();
};

function setMode() {

  console.log("device.landscape(): " + device.landscape());
  console.log("device.mobile(): " + device.mobile());
  console.log("device.tablet(): " + device.tablet());

  if (device.landscape() && device.mobile() && !(device.tablet())) {
    $('#mainContainer').css('display', 'none');
    $('#horizontalContainer').css('display', 'block');
  }else{
    $('#mainContainer').css('display', 'block');
    $('#horizontalContainer').css('display', 'none');
  }
}

setMode();

$('.bigButton').click(() => {
  self.location = 'configurator.html';
});
