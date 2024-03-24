// Selecting elements
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const contentDiv = document.getElementById("content");

// Content for each page
const homeContent =
  "<h2>Welcome to Home Page</h2><p>This is the home page content.</p>";
const aboutContent =
  "<h2>About Us</h2><p>Learn more about our company here.</p>";
const contactContent =
  "<h2>Contact Us</h2><p>Contact us at contact@example.com.</p>";

// Event listeners for navigation links
homeLink.addEventListener("click", () => {
  contentDiv.innerHTML = homeContent;
});

aboutLink.addEventListener("click", () => {
  contentDiv.innerHTML = aboutContent;
});

contactLink.addEventListener("click", () => {
  contentDiv.innerHTML = contactContent;
});
