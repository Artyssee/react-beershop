import { withRouter } from 'next/router';
import React from 'react';

const Page = withRouter((props) => (
  <React.Fragment>
    <h1>{props.router.query.productName}</h1>
    <p>This is the blog post content.</p>
  </React.Fragment>
));

export default Page;
