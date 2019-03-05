import React from 'react';
import '../styles/pages/index.scss';
import Link from 'next/link';

function Home () {
  return (
    <React.Fragment>
      <h1>
        this is the website:
      </h1>
      <Link href='/overview'>
        <a>Real index page</a>
      </Link>
    </React.Fragment>
  );
}

export default Home;
