/**
 * Created by Jack on 2015-04-25.
 */
var samplePson = {};
var prehtml = template('person_data',samplePson);
//$("#data").html(prehtml);

$(document).ready(function(){
  titleChange();
  $(document).delegate("#modify", "click", [["local-model/person.json", show], ["local-model/person2.json", show]],toggalRequest());
  $(document).delegate(".person-cell", "mouseenter", function(){console.log("透明" + this.id);});
});

function toggalRequest(){
  var toggal = 1;
  return function(event) {
    toggal = (toggal == 0?toggal+1:toggal-1);
    $.getJSON(event.data[toggal][0], event.data[toggal][1]);
  }
}

function show(jsondata){
  var prehtml = template("person_data",jsondata);
  $("#data").html(prehtml);
}