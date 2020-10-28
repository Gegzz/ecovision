import React from 'react'
import { Section } from 'react-bulma-components'
import './main.css'

const Footer = () => (
    <footer class="footer" style={{ marginTop: 0 }}>
        <div class="container">
            <div class="has-text-centered max-w-650 mx-auto">
                <h1 class="has-text title is-size-2 font-900">Stay in the know</h1>
                <p class="has-text is-size-5">Subscribe to our newsletter to get news about our projects.</p>
                <form action="" class="is-flex"><input type="text" placeholder="Your Best Email Address"></input><button>SUBSCRIBE</button></form>
            </div>
            <div class="line"></div>
            <div className="content has-text-centered">
                <p>
                    <p><strong>Ecovision</strong> &copy; 2020</p>
                    Trademark Ecovision is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </div>
    </footer>
)

export default Footer