window.updateTheBackground = function(className) {
    if (className ==="red") {
      document.body.classList.add(className);
      document.body.classList.remove("white");
    } else if (className ==="white") {
      document.body.classList.add(className);
      document.body.classList.remove("red");
    }
}