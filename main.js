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

  var helmentcards = [
    {
      name: "LS2 FF901",
      price: "351,74",
      type: "modulable",
      image:
        "https://www.aspshop.eu/data/product/1024_1024/ff901-advant-x-solid-matt-titanium-569011007.png",
    },
    {
      name: "HJC RPHA1  ",
      price: "999,90",
      type: "integral",
      image:
        "https://hjchelmets.us/cdn/shop/products/mc1___rpha-1n-quartararo-replica_1.png?v=1687937703",
    },
    {
      name: "Shark Ridill 2",
      price: "154.19",
      type: "integral",
      image:
        "https://2ride.twic.pics/cdn/Images-To-Sort/52149/image-thumb__52149__1000x1000/1_RIDILL2_APEX_KWB_34Lfront_HE1111_1.png",
    },
    {
      name: "FOX V1 Nitro",
      price: "154.00",
      type: "jett",
      image:
        "https://www.goodtimecentre.ca/cdn/shop/files/31370551_2.webp?v=1702056209",
    },
  ];

  var helcontain = $("#helcrd");
  each(helmentcards, function (element, i) {
    helcontain.append(`
            <div class="cards">
              <div class="container">
                <div class="wrapper1">
                  <img src="${element.image}" alt="${element.name}">
                  <h1>${element.name}</h1>
              <h3>${element.price}</h3>
                  <h3>${element.type}</h3>
                </div>
                
              </div>
            </div>
          `);
  });
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }