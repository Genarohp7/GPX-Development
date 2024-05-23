/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

// window.addEventListener("DOMContentLoaded", (event) => {
//   // Navbar shrink function
//   var navbarShrink = function () {
//     const navbarCollapsible = document.body.querySelector("#mainNav");
//     if (!navbarCollapsible) {
//       return;
//     }
//     if (window.scrollY === 0) {
//       navbarCollapsible.classList.remove("navbar-shrink");
//     } else {
//       navbarCollapsible.classList.add("navbar-shrink");
//     }
//   };

//   // Shrink the navbar
//   navbarShrink();

//   // Shrink the navbar when page is scrolled
//   document.addEventListener("scroll", navbarShrink);

//   // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector("#mainNav");
//   if (mainNav) {
//     new bootstrap.ScrollSpy(document.body, {
//       target: "#mainNav",
//       rootMargin: "0px 0px -40%",
//     });
//   }

//   // Collapse responsive navbar when toggler is visible
//   const navbarToggler = document.body.querySelector(".navbar-toggler");
//   const responsiveNavItems = [].slice.call(
//     document.querySelectorAll("#navbarResponsive .nav-link")
//   );
//   responsiveNavItems.map(function (responsiveNavItem) {
//     responsiveNavItem.addEventListener("click", () => {
//       if (window.getComputedStyle(navbarToggler).display !== "none") {
//         navbarToggler.click();
//       }
//     });
//   });
// });

//prueba responsive aun

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
    responsiveNavItem.addEventListener("click", (event) => {
      if (
        window.getComputedStyle(navbarToggler).display !== "none" &&
        !responsiveNavItem.classList.contains("dropdown-toggle")
      ) {
        navbarToggler.click();
      }
    });
  });

  // Dropdown menu for "Proyectos"
  const proyectosNavItem = document.querySelector(".nav-item.dropdown");
  const submenu = document.querySelector(".dropdown-menu");

  // Toggle submenu on click for desktop
  const toggleSubmenu = function (event) {
    if (window.innerWidth >= 992) {
      // Desktop size
      event.preventDefault();
      event.stopPropagation();
      proyectosNavItem.classList.toggle("show");
      submenu.classList.toggle("show");
    }
  };

  proyectosNavItem.addEventListener("click", toggleSubmenu);

  // Close submenu when clicking outside on desktop
  document.addEventListener("click", function (event) {
    if (window.innerWidth >= 992 && !proyectosNavItem.contains(event.target)) {
      proyectosNavItem.classList.remove("show");
      submenu.classList.remove("show");
    }
  });

  // Close submenu when an item is clicked
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (window.innerWidth < 992) {
        // Mobile size: Close the submenu and navigate to the link
        event.preventDefault();
        const href = item.getAttribute("href");
        navbarToggler.click();
        setTimeout(() => {
          window.location.href = href;
        }, 350); // Adjust the timeout to match the animation duration
      } else {
        proyectosNavItem.classList.remove("show");
        submenu.classList.remove("show");
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

// proyecto dooriban automatico
// document.addEventListener("DOMContentLoaded", function () {
//   let selfTeam = document.getElementById("doobarin");
//   let anchoVentana = window.innerWidth;

//   if (selfTeam && anchoVentana >= 50) {
//     setInterval(() => {
//       if (selfTeam.children.length > 0) {
//         let $last = selfTeam.firstElementChild;
//         selfTeam.removeChild($last);
//         selfTeam.appendChild($last);
//       }
//     }, 2000);
//   }
// });
