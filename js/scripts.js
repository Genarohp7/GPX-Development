/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

//proyectos secction doobarin

// let selfTeam = document.getElementById("doobarin");
// let anchoVentana = window.innerWidth;

// if ((anchoVentana) => 50) {
//   setInterval(() => {
//     let $last = selfTeam.firstElementChild;
//     $last.remove();
//     selfTeam.appendChild($last);
//   }, 2000);
// } else {
// }

document.addEventListener("DOMContentLoaded", function () {
  let selfTeam = document.getElementById("doobarin");
  let anchoVentana = window.innerWidth;

  if (selfTeam && anchoVentana >= 50) {
    setInterval(() => {
      if (selfTeam.children.length > 0) {
        let $last = selfTeam.firstElementChild;
        selfTeam.removeChild($last);
        selfTeam.appendChild($last);
      }
    }, 2000);
  }
});

//proyectos secction citadel
document.addEventListener("DOMContentLoaded", function () {
  let selfTeam1 = document.getElementById("citadel");
  let anchoVentana1 = window.innerWidth;

  if (selfTeam1 && anchoVentana1 >= 50) {
    setInterval(() => {
      if (selfTeam1.children.length > 0) {
        let $last = selfTeam1.firstElementChild;
        selfTeam1.removeChild($last);
        selfTeam1.appendChild($last);
      }
    }, 2000);
  }
});

//proyectos secction garambullo
document.addEventListener("DOMContentLoaded", function () {
  let selfTeam2 = document.getElementById("garambullo");
  let anchoVentana2 = window.innerWidth;

  if (selfTeam2 && anchoVentana2 >= 50) {
    setInterval(() => {
      if (selfTeam2.children.length > 0) {
        let $last = selfTeam2.firstElementChild;
        selfTeam2.removeChild($last);
        selfTeam2.appendChild($last);
      }
    }, 2000);
  }
});
