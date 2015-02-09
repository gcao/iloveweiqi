// Try to make code here work on all browsers
// Put browser specific code in another js (e.g. chrome.js, firefox.js)

//console.log('iloveweiqi')

//var URL = "http://localhost:8000/jsgameviewer/js/test.js";
var URL = "http://gcao.github.io/jsgameviewer/js/test.js";
var SCRIPT_ID = "iloveweiqi-script";

// Add a cache id param to url to force reload this script every hour
if (URL.indexOf('?') < 0) {
  URL += "?";
} else if (URL.indexOf('&') > 0) {
  URL += "&";
}
URL += "cacheId=" + timeToString();

//console.log(URL);

var script = document.createElement("script")
script.setAttribute("id", SCRIPT_ID);
script.type = "text/javascript";
script.src = URL;
document.documentElement.lastChild.appendChild(script);

function timeToString() {
  var time = new Date();
  return padStr(time.getFullYear()) +
         padStr(1 + time.getMonth()) +
         padStr(time.getDate()) +
         padStr(time.getHours());
}

function padStr(i) {
  return (i < 10) ? "0" + i : "" + i;
}
