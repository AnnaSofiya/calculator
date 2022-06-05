(() => {
  "use strict";
  let t = !1;
  setTimeout(() => {
    if (t) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0);
  let e = "",
    n = "",
    o = "",
    c = !1;
  const i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
    s = ["-", "+", "X", "/", "%"],
    r = document.querySelector(".calc__screen p");
  (document.querySelector(".ac").onclick = function () {
    (e = ""), (n = ""), (o = ""), (c = !1), (r.textContent = 0);
  }),
    (document.querySelector(".buttons").onclick = (t) => {
      if (!t.target.classList.contains("button")) return;
      if (t.target.classList.contains("ac")) return;
      r.textContent = "";
      const l = t.target.textContent;
      if (i.includes(l))
        return (
          "" === n && "" === o
            ? ((e += l), (r.textContent = e))
            : "" !== e && "" !== n && c
            ? ((n = l), (c = !1), (r.textContent = n))
            : ((n += l), (r.textContent = n)),
          void console.log(e, n, o)
        );
      if (s.includes(l))
        return (o = l), (r.textContent = o), void console.log(e, n, o);
      if ("=" === l) {
        switch (("" === n && (n = e), o)) {
          case "+":
            e = +e + +n;
            break;
          case "-":
            e -= n;
            break;
          case "X":
            e *= n;
            break;
          case "/":
            if ("0" === n)
              return (
                (r.textContent = "Ошибка"), (e = ""), (n = ""), void (o = "")
              );
            e /= n;
            break;
          case "%":
            e /= 100;
        }
        (c = !0), (r.textContent = e), console.table(e, n, o);
      }
      button &&
        button.addEventListener("click", function (t) {
          button.length > 25 && (button = button.substring(0, 24) + "...");
        });
    }),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    });
})();
