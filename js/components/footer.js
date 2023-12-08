class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <style>
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

            footer {
                min-height: 60px;
                padding: 0 10px;
                list-style: none;
                align-items: center;
                justify-content: center;
                background-color: #222;
            }

            ul li {
                list-style: none;
                display: inline;
            }

            a {
                margin: 0 15px;
                color: inherit;
                <!-- border-radius: 50%; -->
                background-color: #111;
            }

            a:hover {
                color: wheat;
            }

            .social-row {
                display: flex-column;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }

            .social-row li a {
                margin: 0 15px;
            }
        </style>
        <footer>
            <br>
            <hr>
            <div>
                <br>
                <ul class="social-row">
                    <li><a href="https://github.com/jniemibro"><i class="fab fa-github"></i></a></li>
                    <!-- <li><a href="https://twitter.com/jniemibro"><i class="fab fa-twitter"></i></a></li> -->
		            <li><a href="https://instagram.com/jniemiart/"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://artstation.com/jniemibro"><i class="fab fa-artstation"></i></a></li>
                    <li><a href="https://youtube.com/channel/UCf_98oNIQUDQp0FDxDNXl4Q"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://linkedin.com/in/jontniemi/"><i class="fab fa-linkedin"></i></a></li>
                    <!-- <li><a href="https://bio.link/jniemibro"><i class="far fa-link"></i></a></li>
                    <li><a href="https://sketchfab.com/jniemibro"><i class="fas fa-cube"></i></a></li> -->
                </ul>
            </div>
            <div>
                <br>
                <p>Copyright © 2025. All Rights Reserved.</p>
                <br>
            </div>
        </footer>
      `;
    }
  }

  customElements.define('footer-component', Footer);
