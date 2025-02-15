class SpecialNav extends HTMLElement {
        connectedCallback() {
                this.innerHTML = `
  <nav>
	  <style type="text/css">
/* Nav bar styling */
.nav-container {
	display: flex;
        /*color: white;*/
        /*background-color: white;*/
	justify-content: center;
	align-items: center;
	font-size: 18px;
	margin: auto;
	height: 5%;
	width: auto;
	padding: 0 20px;
	gap: 80px;
	/* Space between nav items */
}

.nav_link {
	display: flex;
	color: rgba(255, 255, 255, 0.7);
	align-items: center;
	gap: 10px;
	position: relative;
}

.nav_link::after {
	content: '';
	height: 2px;
	width: 100%;
        /*color: white;*/
	/*background-color: white;*/
	/*display: block;*/
	position: absolute;
	left: 0;
	bottom: -6px;
	opacity: 0;
	transition: all 0.2s;
	pointer-events: none;
}

.nav_link:hover::after,
.nav_link:focus::after {
        color: white;
	opacity: 1;
}

.nav_link:hover,
.nav_link:focus,
.nav_text:focus {
	color: #fff;
}

.nav_link li {
	list-style: none;
}

.nav_link a {
	text-decoration: none;
	color: inherit;
	font-size: 18px;
}
  </style>
    <div class="nav-container">
      <!--Home Nav Button-->
      <div class="nav_link"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"
          viewBox="0 0 36 36" stroke-width="2" style="--darkreader-inline-stroke: currentColor;"
          data-darkreader-inline-stroke="">
          <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
        </svg>
        <li><a class="nav_text" href="index.html">Home</a></li>
      </div>
      <!--Shop Nav Button-->
      <div class="nav_link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" width="36" height="36" viewBox="0 0 36 36" stroke-width="2"
          style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
          <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        <li><a class="nav_text" href="shop.html">Shop</a></li>
      </div>
      <!--About Nav Button-->
      <div class="nav_link"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"
          viewBox="0 0 36 36" stroke-width="2" style="--darkreader-inline-stroke: currentColor;"
          data-darkreader-inline-stroke="">
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
        <li><a class="nav_text" href="about.html">About</a></li>
      </div>
      <!--Contact Nav Button-->
      <div class="nav_link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" width="36" height="36" viewBox="0 0 36 36" stroke-width="2"
          style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke="">
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
          <path d="M3 7l9 6l9 -6"></path>
        </svg>
        <li><a class="nav_text" href="contact.html">Contact</a></li>
        <!--<li><a href="mailto:bellescrafts06@gmail.com">Email</a>-->
        <!--</li>-->
      </div>
    </div>
  </nav>
`
        }
}

customElements.define('special-nav', SpecialNav)
