import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const aboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
    <h1>Resources</h1>
      <SEO title="Resources" />
      <h2> Books we love </h2> 
        <p> 
      - Six Seasons, by  <br /> 
      </p>
      <h2> People we follow </h2>
      <p> 
      - Melisa King <br /> 
      - David Chang
      </p>
      
    </Layout>
  )
}

export default aboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
 `