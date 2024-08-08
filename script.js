window.onload = function(){
// Make the DIV element draggable:
var section = document.getElementById("dragdiv");
var pull = document.getElementById("dragdivPull");
dragElement(section);

function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  pull.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    // No need for `window.event`, just use `e` directly
    e.preventDefault();
    // get the mouse cursor position at startup:
    //pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    //pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    //pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    //element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released: */
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
}