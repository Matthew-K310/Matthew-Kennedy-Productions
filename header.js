class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; height: 200px; width: 80%; margin: auto; text-align: center; padding: 15px 0; padding-bottom: 30px;">
	<img style="height: 110%; width: auto;" alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjEzNSIgdmlld0JveD0iMCAwIDEzNSAxMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY3LjUiIGN5PSI2Ny41IiByPSI2NyIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTguOTc1MSA1My41NDRIMjAuODk1MUwzMi41NTkxIDc0LjE4NEw0NC4xNzUxIDUzLjU0NEg0NS45NTExVjg2Ljk1MkgxOC45NzUxVjUzLjU0NFpNMjAuNzUxMSA4NS4yMjRINDQuMTc1MVY1Ny4xNDRMMzMuMzc1MSA3Ni4xNTJIMzEuNjk1MUwyMC43NTExIDU2Ljg1NlY4NS4yMjRaTTY4LjQ3NDQgNjcuNTEyTDgyLjM5NDQgODdINTUuNTE0NFY1My41OTJIODIuMzk0NEw2OC40NzQ0IDY3LjUxMlpNNjcuMjI2NCA2OC43Nkw1Ny4yOTA0IDc4LjY5NlY4NS4yMjRINzguOTg2NEw2Ny4yMjY0IDY4Ljc2Wk05Mi40Mzc2IDg3VjUzLjU5MkgxMDYuNDA2QzEwOC43NDIgNTMuNTkyIDExMC43NTggNTQuMDI0IDExMi40NTQgNTQuODg4QzExNC40MDYgNTUuODggMTE1Ljk1OCA1Ny4zMDQgMTE3LjExIDU5LjE2QzExOC4yNjIgNjAuOTg0IDExOC44MzggNjMgMTE4LjgzOCA2NS4yMDhDMTE4LjgzOCA2Ny40MTYgMTE4LjI2MiA2OS40NDggMTE3LjExIDcxLjMwNEMxMTUuOTkgNzMuMTYgMTE0LjQ1NCA3NC41ODQgMTEyLjUwMiA3NS41NzZDMTEwLjgzOCA3Ni40NCAxMDguODA2IDc2Ljg3MiAxMDYuNDA2IDc2Ljg3MkgxMDEuMTc0Vjg3SDkyLjQzNzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
</div>`
	}
}

class SpecialFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<div class="footer" style="display: flex; font-size: 12px; align-items: center; padding-top: 10px; padding-bottom: 10px; margin: auto; width: auto; justify-content: center; text-align: center;">
      <p>&copy; 2025 Matthew Kennedy Productions. All Rights Reserved.</p>
    </div>

`
	}
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
