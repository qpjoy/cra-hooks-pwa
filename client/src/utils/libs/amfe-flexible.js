(function flexible(window, document) {
  let docEl = document.documentElement;
  let dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = `${12 * dpr}px`;
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }

  setBodyFontSize();

  // set 1rem = viewWidth / 11
  function setRemUnit() {
    // var rem = docEl.clientWidth / 10
    // docEl.style.fontSize = rem + 'px'

    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    let w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    let width = w > h ? h : w;

    width = width > 720 ? 720 : width;
    let fz = ~~((width * 100000) / 98) / 10000;

    document.getElementsByTagName(
      "html",
    )[0].style.cssText = `font-size: ${fz}px`;
    let realfz =
      ~~(
        Number(
          window
            .getComputedStyle(document.getElementsByTagName("html")[0])
            .fontSize.replace("px", ""),
        ) * 10000
      ) / 10000;

    if (fz !== realfz) {
      document.getElementsByTagName(
        "html",
      )[0].style.cssText = `font-size: ${fz * (fz / realfz)}px`;
    }
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    let fakeBody = document.createElement("body");
    let testElement = document.createElement("div");

    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);

    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }

    docEl.removeChild(fakeBody);
  }
})(window, document);
