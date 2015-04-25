/**
 * Created by Jack on 2015-04-25.
 */
var samplePson;
var prehtml = template('person_data',samplePson);
$("#data").html(prehtml);

$(document).ready(function(){
  $(document).delegate("#modify", "click", "local-model/person.json", jsonGetFn(show));
});

function show(jsondata){
  var prehtml = template('person_data',jsondata);
  $("#data").html(prehtml);
}