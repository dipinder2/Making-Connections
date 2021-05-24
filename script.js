function changeName() {
  var getnametag = document.querySelector(".card-content > h2");
  // this is going to give me 7 * 7 = 49 possible different possibilies by reusing same characters in the name
  var trueRandomizer = nonreprandomizer(getnametag.innerHTML.length);
  var startname = getnametag.innerHTML.toString();
  var newname = "";
  for (var idx in startname) {
    var randIdx = trueRandomizer[idx];
    newname += startname[randIdx];
  }
  getnametag.innerHTML = newname;
}

// function nonreprandomizer:[]
function nonreprandomizer(len) {
  var randomizedArray = [];
  // loops until new random index array's != len
  while (randomizedArray.length < len) {
    var randomIdx = Math.floor(Math.random() * len);
    // if randomIdx already exists; we dont add and skip over it so that we dont get repetive indexes.
    if (randomizedArray.includes(randomIdx)) {
      continue;
    }
    randomizedArray.push(randomIdx);
  }
  return randomizedArray;
}
function deleteElement(element) {
  if (element.alt == "confirm") {
    var number = document.querySelector("#btn-connection-count").value;
    var num = parseInt(number);
    num += 1;
    document.querySelector("#btn-connection-count").value = num;
  }
  var number = document.querySelector("#btn-req-count").value;
  var num = parseInt(number);
  num -= 1;
  document.querySelector("#btn-req-count").value = num;
  element.parentNode.remove();
}
