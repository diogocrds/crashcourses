import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id='sidebar'>
      <div className='inner'>
        {/* <!-- Search --> */}
        <section id='search' className='alt'>
          <form method='post' action='#'>
            <input type='text' name='query' id='query' placeholder='Search' />
          </form>
        </section>
        {/* <!-- Menu --> */}
        <nav id='menu'>
          <header className='major'>
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <Link to='/'>Homepage</Link>
            </li>
            <li>
              <Link to='/pg/0'>Generic</Link>
            </li>
            <li>
              <Link to='elements.html'>Elements</Link>
            </li>
            <li>
              <span className='opener'>Submenu</span>
              <ul>
                <li>
                  <Link to='/'>Lorem Dolor</Link>
                </li>
                <li>
                  <Link to='/'>Ipsum Adipiscing</Link>
                </li>
                <li>
                  <Link to='/'>Tempus Magna</Link>
                </li>
                <li>
                  <Link to='/'>Feugiat Veroeros</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>Etiam Dolore</Link>
            </li>
            <li>
              <Link to='/'>Adipiscing</Link>
            </li>
            <li>
              <span className='opener'>Another Submenu</span>
              <ul>
                <li>
                  <Link to='/'>Lorem Dolor</Link>
                </li>
                <li>
                  <Link to='/'>Ipsum Adipiscing</Link>
                </li>
                <li>
                  <Link to='/'>Tempus Magna</Link>
                </li>
                <li>
                  <Link to='/'>Feugiat Veroeros</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>Maximus Erat</Link>
            </li>
            <li>
              <Link to='/'>Sapien Mauris</Link>
            </li>
            <li>
              <Link to='/'>Amet Lacinia</Link>
            </li>
          </ul>
        </nav>
        {/* <!-- Section --> */}
        <section>
          <header className='major'>
            <h2>Ante interdum</h2>
          </header>
          <div className='mini-posts'>
            <article>
              <Link to='/' className='image'>
                <img src='images/pic07.jpg' alt='' />
              </Link>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <Link to='/' className='image'>
                <img src='images/pic08.jpg' alt='' />
              </Link>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
            <article>
              <Link to='/' className='image'>
                <img src='images/pic09.jpg' alt='' />
              </Link>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                dolore aliquam.
              </p>
            </article>
          </div>
          <ul className='actions'>
            <li>
              <Link to='/' className='button'>
                More
              </Link>
            </li>
          </ul>
        </section>
        {/* <!-- Section --> */}
        <section>
          <header className='major'>
            <h2>Get in touch</h2>
          </header>
          <p>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </p>
          <ul className='contact'>
            <li className='fa-envelope-o'>
              <a href='/'>information@untitled.tld</a>
            </li>
            <li className='fa-phone'>(000) 000-0000</li>
            <li className='fa-home'>
              1234 Somewhere Road #8254
              <br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>
        {/* <!-- Footer --> */}
        <footer id='footer'>
          <p className='copyright'>
            &copy; Untitled. All rights reserved. Demo Images:{' '}
            <a href='https://unsplash.com'>Unsplash</a>. Design:{' '}
            <a href='https://html5up.net'>HTML5 UP</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Sidebar;
