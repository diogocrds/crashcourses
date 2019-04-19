import React from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  return (
    <React.Fragment>
      {/* <!-- Section --> */}
      <section>
        <header className='major'>
          <h2>Ipsum sed dolor</h2>
        </header>
        <div className='posts'>
          <article>
            <Link
              to={{ pathname: '/generic/10', params: { id: 10 } }}
              className='image'
            >
              <img src='images/pic01.jpg' alt='' />
            </Link>
            <h3>Interdum aenean</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <Link
              to={{ pathname: '/generic/11', params: { id: 11 } }}
              className='image'
            >
              <img src='images/pic02.jpg' alt='' />
            </Link>
            <h3>Nulla amet dolore</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <Link to='/' className='image'>
              <img src='images/pic03.jpg' alt='' />
            </Link>
            <h3>Tempus ullamcorper</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <Link to='/' className='image'>
              <img src='images/pic04.jpg' alt='' />
            </Link>
            <h3>Sed etiam facilis</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <Link to='/' className='image'>
              <img src='images/pic05.jpg' alt='' />
            </Link>
            <h3>Feugiat lorem aenean</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <Link to='/' className='image'>
              <img src='images/pic06.jpg' alt='' />
            </Link>
            <h3>Amet varius aliquam</h3>
            <p>
              Aenean ornare velit lacus, ac varius enim lorem ullamcorper
              dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
              lorem feugiat tempus aliquam.
            </p>
            <ul className='actions'>
              <li>
                <Link to='/' className='button'>
                  More
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Posts;
