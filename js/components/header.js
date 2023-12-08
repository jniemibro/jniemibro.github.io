class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <!-- Simpler header, using a filtered gallery in the portfolio/home page -->
            <div class="header">
                <a href="../index.html" class="logo">
                    Jonathan Niemi
                </a>
                
                <div class="header-right">
                    <a href="../index.html">Portfolio</a>
                    <a href="about.html">About</a>
                </div>
            </div>

            <!-- older header
            <div class="header">
                <a href="../index.html" class="logo">Jonathan Niemi</a>
                <div class="header-right">
                    <a href="../html/acrylic.html">Art</a>
                    <a href="../html/gamedev.html">Game Dev</a>
                    <a href="../html/about.html">About</a>
                </div>
            </div>
            -->
        </header>`
    }
}

customElements.define("header-component", Header)