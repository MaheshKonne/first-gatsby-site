import React from "react";
import Layout from '../components/layout';
import { Link } from 'gatsby';

const Error = () => {
  return (
    <Layout>
      <h3>Oops! Page not found</h3>
      <p>The page you are looking for does not exists.</p>
      <Link href="/">Home</Link>
    </Layout>
  )
};

export default Error;