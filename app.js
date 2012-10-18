$(function($){
  $('#togglePound').click(function(){
    if ($('#pounds').is(':hidden')) {
      $('#pounds').show();
      $('#grams').hide();
    } else {
      $('#pounds').hide();
      $('#grams').show();
    }
    return false;
  });

  var gramChanged = function(){
   var sta = Number($('#start-gram').val());
   var fin = Number($('#finish-gram').val());
   if (!isNaN(sta) && !isNaN(fin) && sta > 0 && fin > 0) {
     var percent = (fin - sta) / sta;
     $('#percentage-gram').val((percent * 100).toFixed(3));
   }
  };
  $('#start-gram').change(gramChanged);
  $('#finish-gram').change(gramChanged);

  var poundChanged = function(){
   var staLb = Number($('#start-pound').val());
   var staOz = Number($('#start-ounce').val());
   var finLb = Number($('#finish-pound').val());
   var finOz = Number($('#finish-ounce').val());

   var sta = staLb * 16 + staOz;
   var fin = finLb * 16 + finOz;

   if (!isNaN(sta) && !isNaN(fin) && sta > 0 && fin > 0) {
     var percent = (fin - sta) / sta;
     $('#percentage-pound').val((percent * 100).toFixed(3));
   }
  };
  $('#start-pound').change(poundChanged);
  $('#start-ounce').change(poundChanged);
  $('#finish-pound').change(poundChanged);
  $('#finish-ounce').change(poundChanged);
});
