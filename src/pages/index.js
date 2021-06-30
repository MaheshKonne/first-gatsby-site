import React from "react"
import { Link } from "gatsby"
import "./index.module.scss"
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h3>Home Page</h3>
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </Layout>
  )
}
