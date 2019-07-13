import React from 'react';
import { Layout } from '../components/layout';
import { Link } from 'gatsby';

const HomePage = () => {
    return(
        <Layout>  
            <h1>Whas Up!</h1> 
            <p>Home Page for Gatsby</p>
            <Link to="/about-me">About Me Mou?</Link>
        </Layout>
                                // save changes and it will take effect instantly without 
    );                           // manually refresh. (light refresh will be performed automatically after save)
}

export default HomePage; // The first funtion to run when this file is accessed.