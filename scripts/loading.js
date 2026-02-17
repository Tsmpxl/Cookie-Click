 window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");

    // Check if loader has already been shown
    if (localStorage.getItem("cookieLoaderShown")) {
      loader.remove();
      return;
    }

    // Mark as shown
    localStorage.setItem("cookieLoaderShown", "true");

    // Show for 6 seconds, then fade and remove
    setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => {
        loader.remove();
      }, 800);

    }, 6000);
  });