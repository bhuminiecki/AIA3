function loadContent (url) {
  return new Promise(function (resolve, reject) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'blob';
    xmlhttp.open("GET", url, true)
    xmlhttp.onload = function () { 
      if (xmlhttp.status === 200) {
        resolve(xmlhttp.response);
      } else {
        reject(new Error("Couldn't load the image : " + xmlhttp.statusText));
      }
    }
    xmlhttp.onerror = function () { 
      reject(Error("There has been an error!"));
    }
    xmlhttp.send();
  });
}