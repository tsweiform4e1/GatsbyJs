import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout.jsx';

const NotFoundPage = () => {
    return(
        <Layout>
            <h1>Error 404: Page not found.</h1>
            <p>Just like your purpose for life.</p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default NotFoundPage;
