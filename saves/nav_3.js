document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll(".nav_link a");
	const currentPath = window.location.pathname;

	// Loop through navigation links and add 'active' class if it matches the current URL
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
        gap: 2px;
        white-space: nowrap;
    }

    /* Link styling */
    nav ul li a {
        font-size: 1.2rem;
        font-weight: normal;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    /* Icon styling */
    nav ul li svg {
        width: 24px;
        height: 24px;
        max-width: 24px;
        max-height: 24px;
        margin-left: 5px;
        margin-right: 1px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        nav ul li svg {
            width: 18px;
            height: 18px;
        }

        nav ul li a {
            font-size: 0.75rem;
        }

        .nav_link {
            gap: 2px;
        }

        nav ul {
            gap: 5px; 
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

    /* Navigation link effects */
    .nav_link.active {
        color: white !important;
    }

    .nav_link.active::after {
        opacity: 1;
    }

    .nav_link {
        display: flex;
        /*color: rgb(76, 76, 76);*/
        /*color: #181A1B;*/
        align-items: center;
        gap: 5px;
        position: relative;
    }

    .nav_link::after {
        /*content: '';*/
        height: 2px;
        width: 100%;
        background-color: white;
	/*color: white;*/
        position: absolute;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 0.2s;
        pointer-events: none;
    }

    .nav_link:hover::after,
    .nav_link:focus::after {
        width: 100%; /* Expands fully */
        opacity: 1; /* Becomes visible */
    }


    /*.nav_link:hover,*/
    /*.nav_link:focus {*/
    /*    color: white;*/
    /*}*/

    </style>
    <div class="nav-container">
       <ul>
        <!-- Home Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36" stroke-width="2">
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
            <a id="homelink" href="index.html" class="nav_link">Home</a>
        </li>

        <!-- Media Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
                <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
                <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
            </svg>
            <a id="medialink" class="nav_link">Media</a>
        </li>

        <!-- About Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36" stroke-width="2">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
            <a id="aboutlink" href="about.html" class="nav_link">About</a>
        </li>

        <!-- Contact Navigation Button -->
        <li class="nav_link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="36" height="36" stroke-width="2">
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
            </svg>
            <a id="contactlink" href="contact.html" class="nav_link">Contact</a>
        </li>
       </ul>
    </div>
</nav>
`;
	}
}

customElements.define('special-nav', SpecialNav);
