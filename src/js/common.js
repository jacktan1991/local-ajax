/**
 * Created by Jack on 2015-04-25.
 */

var jsonGetFn = function(get_url, handler) {
  return function() {
    jQuery.getJSON(get_url,handler);
  };
}

var jsonPostFn = function(handler) {
  // TODO-uncompleted:http POST function
}

var titleChange = function(hidden_title){
  var RelTitle = document.title;
  var hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }
  function handleVisibilityChange() {
      const default_title = " ( ●–-–● ) Hi, BayMax";
      if (document[hidden]) {
        document.title = hidden_title || default_title;
      } else {
        document.title = RelTitle;
      }
  }
  if (typeof document.addEventListener !== "undefined" || typeof document[hidden] !== "undefined") {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
  }
}