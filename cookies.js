
function checkCookie() {
  var username = getCookie("hayden14hi");
  if (username != "hayden14hi") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "hayden14hi" && username != null) {
      setCookie("hayden14hi", username, 365);
    }
  }
}
