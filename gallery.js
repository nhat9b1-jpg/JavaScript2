/*
 * Interactive Photo Gallery - JavaScript
 *
 * Functions:
 *   addTabIndex()        - Runs on page load; adds tabindex to each thumbnail image
 *   upDate(previewPic)   - On mouseover or focus, updates the large preview area
 *   undo()               - On mouseleave or blur, resets the preview area
 */

// --- onload function: add tabindex to every thumbnail image ---
function addTabIndex() {
  console.log("Page loaded – addTabIndex() is running");

  // Get all images inside the thumbnails container
  var images = document.querySelectorAll("#thumbnails img");

  // Loop through each image and set tabindex so it can receive keyboard focus
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1) + ": " + images[i].alt);
  }
}

// --- upDate: called on mouseover AND onfocus ---
function upDate(previewPic) {
  console.log("upDate triggered – " + previewPic.alt);

  var imgDiv = document.getElementById("image");

  // Show the alt text of the hovered/focused thumbnail
  imgDiv.innerHTML = previewPic.alt;

  // Set the background image to the thumbnail's source
  imgDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  // Update the aria-label for screen readers
  imgDiv.setAttribute("aria-label", previewPic.alt);
}

// --- undo: called on mouseleave AND onblur ---
function undo() {
  console.log("undo triggered – resetting preview");

  var imgDiv = document.getElementById("image");

  // Reset text
  imgDiv.innerHTML = "Hover over or focus on an image below to display here.";

  // Reset background image
  imgDiv.style.backgroundImage = "url('')";

  // Reset aria-label
  imgDiv.setAttribute("aria-label", "Hover over or focus on an image below to display here.");
}

