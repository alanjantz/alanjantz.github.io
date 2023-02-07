(function () {
  setDraggableElementsInitialPosition();

  var draggableElements = document.getElementsByClassName("draggable");
  for (let i = 0; i < draggableElements.length; i++) {
    dragElement(draggableElements[i]);
  }
})();

window.addEventListener('resize', function(event) {
  setDraggableElementsInitialPosition();
}, true);

function dragElement(element) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (element) {
    element.onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function setDraggableElementsInitialPosition() {
  setInitialPosition(document.getElementById("corgi"), 305, -180);
  setInitialPosition(document.getElementById("loona"), -280, -100);
  setInitialPosition(document.getElementById("pachimari"), -150, 400);
  setInitialPosition(document.getElementById("sushi"), -100, -360);
}

function setInitialPosition(element, top, left) {
  var anchor = document.getElementById("anchor");
  if (!element) return;
  element.style.top = anchor.offsetTop - top + "px";
  element.style.left = anchor.offsetLeft - left + "px";
}
