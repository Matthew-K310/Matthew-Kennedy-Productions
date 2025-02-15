class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 200px; width: 80%; margin: auto; text-align: center; padding: 15px 0; padding-bottom: 30px;">
</div>`
	}
}

class SpecialFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<div class="footer" style="display: flex; font-size: 10px; align-items: center; padding-top: 10px; padding-bottom: 10px; margin: auto; width: auto; justify-content: center; text-align: center;">
      <p>&copy; 2025 Belle's Crafts. All Rights Reserved.</p>
    </div>

`
	}
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
