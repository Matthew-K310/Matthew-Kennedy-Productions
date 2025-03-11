class SpecialNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav>
    <style>
    /* Navigation styling */
    nav {
        padding: 10px 0;
        color: white;
        gap: 20px;
    }

    /* Navigation list styling */
    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        padding: 0;
        margin: 0;
        gap: 40px;
    }

    /* List item styling */
    nav ul li {
        display: flex;
        align-items: center;
        color: rgb(180, 180, 180);
        gap: 2px;
        white-space: nowrap;
    }

    /* Link styling */
    nav ul li a {
        font-size: 18px;
        font-weight: normal;
        /*color: rgb(170, 170, 170);*/
        text-decoration: none;
        font-weight: bold;
    }

    /* Icon styling */
    /*nav ul li svg {*/
    /*    width: 24px;*/
    /*    height: 24px;*/
    /*    max-width: 24px;*/
    /*    max-height: 24px;*/
    /*    margin-left: 5px;*/
    /*    margin-right: 1px;*/
    /*}*/

    nav ul li svg {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: 0; /* Prevent any unnecessary shifts */
    padding-left: 3px;
    padding-right: 3px;
    display: block; /* Ensures proper scaling */
}


    /* Responsive adjustments */
    @media (max-width: 768px) {
        nav ul li svg {
            width: 16px;
            height: 16px;
        }

        nav ul li a {
            font-size: 14px;
        }

        .nav_link {
            gap: 5px;
        }

        nav ul {
            gap: 5px; 
        }

	nav ul li {
	    align-items: center;
	    }
    }

    /* Section and header styling */
    section {
        color: white;
    }

    h2 {
        border-bottom: 4px solid rgba(60, 110, 80, 1);
        padding-bottom: 10px;
    }

    /* Fix underline effect */
    .nav_link a {
        position: relative;
        display: inline-block;
        color: white;
        text-decoration: none;
    }
    
    /* Underline Effect */
    .nav_link a::after {
        content: '';
        height: 2px;
        width: 0%; /* Start with no width */
        background-color: white; /* Ensure the underline color is white */
	color: white;
        position: absolute;
        left: 50%;
        bottom: -6px;
        opacity: 0;
        transition: width 0.2s ease-in-out, opacity 0.2s ease-in-out;
        transform: translateX(-50%);
    }
    
/* Underline Active Navigation Link */
.nav_link a.active {
  text-decoration: underline;
  color: white; /* Active link color */
}

/* Other existing styles for navigation */
.nav_link a {
  text-decoration: none;
  font-weight: bold;
}

    /* Hover Effect */
.nav_link a:hover::after,
.nav_link a:focus::after {
    width: 100%; /* Expand fully */
    opacity: 1;
    background-color: white; /* Keep the underline color white */
}

/* Dropdown Container */
.dropdown {
    position: relative;
}

/* Dropdown Menu */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    /*background-color: black;*/
    background-color: #0f0f0f;
    border-radius: 5px;
    list-style: none;
    padding: 0;
    margin: 5px 0 0;
    display: none; /* Initially hidden */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 10;
}

/* Dropdown Menu Items */
.dropdown-menu li {
    padding: 8px 12px;
    white-space: nowrap;
}

.dropdown-menu li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 8px 12px;
}


/* Make dropdown button clickable */
.dropdown > a {
    cursor: pointer;
}

/*/* show dropdown on hover */*/
/*.dropdown:hover .dropdown-menu {*/
/*    display: block;*/
/*}*/

/* show dropdown on click */
.dropdown:hover .dropdown-menu {
    display: block;
}

/* Hover effect */
/*.dropdown-menu li a:hover {*/
/*    background-color: rgba(255, 255, 255, 0.2);*/
/*}*/

    </style>
    <div class="nav-container">
       <ul>
        <!-- Home Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
            <a id="homelink" href="index.html" class="nav_link">Home</a>
        </li>

        <!-- Media Navigation Button -->
<li class="nav_link dropdown">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
        <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
        <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
    </svg>
    <a id="medialink" class="nav_link">Media ▼</a>
    
    <ul class="dropdown-menu">
        <li><a href="visuals.html">Featured Visuals</a></li>
        <li><a href="music.html">Featured Music</a></li>
    </ul>
</li>

        <!-- About Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <a id="aboutlink" href="about.html" class="nav_link">About</a>
        </li>

        <!-- Contact Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
            </svg>
            <!--<a id="contactlink" href="contact.html" class="nav_link">Contact</a>-->
            <a id="contactlink" href="mailto:matthewkennedyproductions@gmail.com" class="nav_link">Email</a>
        </li>
       </ul>
    </div>
</nav>
`;
  }
}

customElements.define("special-nav", SpecialNav);

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav_link a");
  const currentPath = window.location.pathname;

  // Loop through navigation links and add 'active' class if it matches the current URL
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mediaLink = document.getElementById("medialink");
  const dropdownMenu = mediaLink.nextElementSibling;

  mediaLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link action
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!mediaLink.parentElement.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});
