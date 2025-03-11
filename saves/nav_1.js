document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll(".nav_link a");
	const currentPath = window.location.pathname;

	links.forEach(link => {
		if (link.getAttribute("href") === currentPath) {
			link.classList.add("active");
		}
	});
});

class SpecialNav extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<nav>
	<style>
	/* In-site links formatting */
nav {
	/*background: black;*/
	font-weight: normal;
	padding: 10px 0;
	color: white;
	gap: 20px;
}

nav ul {
    display: flex; /* Keeps items in a single row */
    justify-content: center; /* Centers items horizontally */
    align-items: center; /* Aligns items vertically */
    flex-wrap: nowrap; /* Prevents wrapping */
    padding: 0;
    margin: 0;
    gap: 40px; /* Adds space between items */
}

nav ul li {
    display: flex;
    align-items: center; /* Ensures text and icons are aligned */
    gap: 2px; /* Reduce space between icon and text */
    white-space: nowrap; /* Prevents text from breaking */
    /*color: #181A1B;*/
}

nav ul li a {
    /*font-size: 18px;*/
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-weight: bold;
    color: white;
}

/* Default font size */
nav ul li a {
    font-size: 1.2rem; /* Normal desktop size */
    /*font-weight: normal;*/
    font-weight: normal;
}

nav ul li svg {
    width: 24px;
    height: 24px;
    max-width: 24px;
    max-height: 24px;
    margin-left: 5px;
    margin-right: 1px;
}

/* Scale down icons for smaller screens */
@media (max-width: 768px) {
    nav ul li svg {
        width: 18px;
        height: 18px;
    }

    nav ul li a {
        font-size: 0.75rem; /* Adjust for readability */
    }

    .nav_link {
        gap: 2px; /* Slightly reduce spacing */
    }

}

/* Responsive Scaling: Keeps it in a row but reduces spacing on smaller screens */
@media (max-width: 768px) {

nav ul {
        gap: 5px; 
}

section {
	color: white;
}

h2 {
	border-bottom: 4px solid rgba(60, 110, 80, 1);
	padding-bottom: 10px;
}

label {
	margin: 10px 0 5px;
}

.nav_link.active {
    color: white !important; /* Ensures white color */
}

.nav_link.active::after {
    opacity: 1; /* Makes the underline visible */
}

.nav_link {
	display: flex;
	color: #888;
	align-items: center;
	gap: 5px;
	position: relative;
}

.nav_link::after {
	content: '';
	height: 2px;
	width: 100%;
	background-color: white;
	/*display: block;*/
	position: absolute;
	left: 0;
	bottom: -6px;
	opacity: 0;
	transition: all 0.2s;
	pointer-events: none;
}

.nav_link:hover,
.nav_link:focus {
	color: white;
}

</style>
    <div class="nav-container">
       <ul>
        <!--Home Nav Button-->
	<li class="nav_link">
  	 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
	         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"
	         viewBox="0 0 36 36" stroke-width="2" style="--darkreader-inline-stroke: currentColor;"
	         data-darkreader-inline-stroke="">
	         <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
	         <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
	         <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
	        </svg>
         <a id="homelink" href="index.html" class="nav_link">Home</a></li>
	 <!--      <!--Video Nav Button-->
	 <!--      <li class="nav_link">-->
	 <!--       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"-->
	 <!--        stroke-linecap="round" stroke-linejoin="round" width="36" height="36" viewBox="0 0 36 36" stroke-width="2"-->
	 <!--        style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">-->
	 <!--        <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>-->
	 <!--        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>-->
	 <!--       </svg>-->
	 <!--<a id="shoplink" href="videos.html">Videos</a></li>-->
	 <!--        <!--Music Nav Button-->
	 <!--      <li class="nav_link">-->
	 <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""> <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path> <path d="M9 17v-13h10v13"></path> <path d="M9 8h10"></path>-->
	 <!-- </svg>-->
	 <!--<a id="shoplink" href="music.html">Music</a></li>-->
        <!--Media Nav Button-->
	<li class="nav_link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""> <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path> <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path> <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path> 

			  </svg> 
	<a id="aboutlink" class="nav_link">Media</a></li>
        <!--About Nav Button-->
	<li class="nav_link">
  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
	         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"
	         viewBox="0 0 36 36" stroke-width="2" style="--darkreader-inline-stroke: currentColor;"
	         data-darkreader-inline-stroke="">
	         <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
	         <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
	       </svg>
	<a id="aboutlink" href="about.html" class="nav_link">About</a></li>
	<!--Contact Nav Button-->
        <li class="nav_link">
  	 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
	         stroke-linecap="round" stroke-linejoin="round" width="36" height="36" viewBox="0 0 36 36" stroke-width="2"
	         style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
	         <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
	         <path d="M3 7l9 6l9 -6"></path>
	       </svg>
        <a id="contactlink" href="contact.html" class="nav_link">Contact</a></li>
        <!--<li><a href="mailto:bellescrafts06@gmail.com">Email</a>-->
        <!--</li>-->
       </ul>
    </div>
  </nav>
`
	}
}

customElements.define('special-nav', SpecialNav)
