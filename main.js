$(document).ready(function () {
  function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }

  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }

  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }

  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }

  var homecards = [
    {
      name: "Helment",
      image:
        "https://ls2helmets.com/images/products/10353J1011/grey/10353J1011img_web800.webp",
    },
    {
      name: "Clothes",
      image:
        "https://m.media-amazon.com/images/I/81V1jR1UgeL._AC_UF894,1000_QL80_.jpg",
    },
  ];

  var contain = $("#homecrd");

  each(homecards, function (element, i) {
    contain.append(`
            <div class="cards">
              <div class="container">
                <div class="wrapper">
                  <img src="${element.image}" alt="${element.name}">
                  <h1>${element.name}</h1>
                </div>
                <div class="button-wrapper">
                  <button class="btn outline" id="button-${i}">View more</button>
                </div>
              </div>
            </div>
          `);
  });

  $("#button-0").click(function () {
    window.location.href = "http://127.0.0.1:5500/Articles/Helmets.html";
  });

  $("#button-1").click(function () {
    window.location.href = "http://127.0.0.1:5500/Articles/Clothes.html";
  });
});

var helmentcards = [
  {
    name: "Helment",
    price : "99",
    image:
      "https://ls2helmets.com/images/products/10353J1011/grey/10353J1011img_web800.webp",
  },
  {
    name: "Clothes",
    image:
      "https://m.media-amazon.com/images/I/81V1jR1UgeL._AC_UF894,1000_QL80_.jpg",
  },
];
