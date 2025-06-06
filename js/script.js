function adjustFontSize() {
  const el = document.getElementById("role-text");
  const container = el.parentElement;

  let fontSize = 40; // Start big
  el.style.fontSize = fontSize + "px";

  // Reduce size until it fits within container height or width
  while ((el.scrollWidth > container.clientWidth || el.scrollHeight > container.clientHeight) && fontSize > 14) {
    fontSize--;
    el.style.fontSize = fontSize + "px";
  }
}