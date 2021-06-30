import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <h3>About Page</h3>
      <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default About;
