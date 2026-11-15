// golfimprovementonline.com: hide optional images that haven't been added yet.
(function () {
  document.querySelectorAll('.optional-photo img').forEach(function (img) {
    function hide() { img.closest('.optional-photo').hidden = true; }
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
  });
})();
