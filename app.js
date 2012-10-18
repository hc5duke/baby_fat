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
     percent = (percent * 100).toFixed(3);
     $('#percentage-gram').val(percent);
     $('#percentage-pound').val(percent);

     // convert to pounds
     var staOz = sta / 28.3495;
     var finOz = fin / 28.3495;
     var staLb = Math.floor(staOz / 16);
     var finLb = Math.floor(finOz / 16);
     staOz = (staOz - staLb * 16).toFixed(1);
     finOz = (finOz - finLb * 16).toFixed(1);
     $('#start-pound').val(staLb);
     $('#start-ounce').val(staOz);
     $('#finish-pound').val(finLb);
     $('#finish-ounce').val(finOz);
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
     percent = (percent * 100).toFixed(3);
     $('#percentage-gram').val(percent);
     $('#percentage-pound').val(percent);

     // convert to grams
     var staGram = sta * 28.3495;
     var finGram = fin * 28.3495;
     $('#start-gram').val(staGram.toFixed(1));
     $('#finish-gram').val(finGram.toFixed(1));
   }
  };
  $('#start-pound').change(poundChanged);
  $('#start-ounce').change(poundChanged);
  $('#finish-pound').change(poundChanged);
  $('#finish-ounce').change(poundChanged);
});
