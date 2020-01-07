export  function afterDOMHasLoaded(runThis) {
  document.addEventListener(
    "DOMContentLoaded", function () {
      runThis
    }
  );
}