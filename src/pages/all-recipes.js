import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

// Import formatting
import Layout from "../components/layout"
import SEO from "../components/seo"

const allRecipes = ({ data, location, title }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <header>
          <h1>
            All Recipes
          </h1>
      </header>
        <h3> 
          Chicken
        </h3>
    </Layout>
    )
 
}

export default allRecipes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`