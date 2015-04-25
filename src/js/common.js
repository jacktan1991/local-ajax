/**
 * Created by Jack on 2015-04-25.
 */

var jsonGetFn = function(handler) {
  return function(event) {
    $.getJSON(event.data,handler);
  };
}

var jsonPostFn = function(handler) {
  // TODO-uncompleted:http POST function
}