// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

export function scrollFunction(target: HTMLElement, scrollDistance: number) {
  // When the user scrolls down the given distance from the top of the document, show the HTML element
  if (
    document.body.scrollTop > scrollDistance ||
    document.documentElement.scrollTop > scrollDistance
  ) {
    target.style.opacity = "1";
    target.style.pointerEvents = "all";
  } else {
    target.style.opacity = "0";
    target.style.pointerEvents = "none";
  }
}

export function topFunction() {
  // When the user clicks on the button, scroll to the top of the document
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export function generateNewColor(colors: any, element: any, property: string) {
  const oldColor = element["style"][property];

  let num = 0;
  let isColorNew = false;

  while (isColorNew === false) {
    num = Math.floor(Math.random() * colors.length);
    let newColor = `rgb(${colors[num].rgb})`;

    if (oldColor !== newColor) {
      isColorNew = true;
    }
  }

  return colors[num];
}