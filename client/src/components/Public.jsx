import {Link} from 'react-router-dom'
import React from 'react'

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>Welcome to the <span className="nowrap">Tech Notes</span></h1>
      </header>
      <main className="public__main">
        <p>Located in Beautiful Downtown Foo City, Tech Notes provides a trained staff ready to meet your tech repair needs.</p>
        <address className="public__addr">
          Tech Notes<br />
          555 Foo Drive<br />
          Foo City, CA 12345<br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: John Doe</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  )
  return content;
}

export default Public