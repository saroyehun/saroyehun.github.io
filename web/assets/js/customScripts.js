// let darkMode = localStorage.getItem("darkMode");

// if (darkMode === "enabled") {
//     enableDarkMode();
// }
// else {
//     disableDarkMode();
// }

function disableDarkMode() {
    var link = document.getElementById('dark-toggle-link');
    let temp =  link.href.replace('main', 'light');
    link.href =  temp.replace('dark', 'light');
    localStorage.setItem("darkMode", null);
}

function enableDarkMode() {
    var link = document.getElementById('dark-toggle-link');
    let temp =  link.href.replace('main', 'dark');
    link.href =  temp.replace('light', 'dark');
    localStorage.setItem("darkMode", "enabled");
}

function darkToggle() {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        disableDarkMode();
    }
    else {
        enableDarkMode();
    }
}

// Citation show button
function toggleCitation (e) {
  $(e).next().toggleClass("is--visible");
}

// Copy citation
function copyToClipboard (e) {
  var $temp = $("<textarea>");
  var lwsRegex = /^\s*/gm;
  $("body").append($temp);
  $temp.val($(e).next().text().replace(lwsRegex, "")).select();
  document.execCommand("copy");
  $temp.remove();
}
