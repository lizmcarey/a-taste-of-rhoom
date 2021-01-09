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
    <h1>A bit about us and this blog</h1>
      <SEO title="About" />
      <p> This blog is a curated selection of recipes Leonard and Liz enjoyed 
      making during lockdown. 
      <br /> <br />

      At the beginning of lockdown, we used working from home as a great opportinity 
      to try out ambitious recipes we previously didn't have the time to make. 
      Although tasty and rewarding, we quickly realized we couldn't keep up with the constant grocery shopping and cleaning dishes. 
      < br /> <br />
      So, we moved to more practical recipes that let us use what we already had on hand or
      required minimal ingredients and didn't need us to use several dishes/pans.
      < br /> <br />
      A Taste of Rhoom is a play on A Taste of Rome. Is it funny? Probably not, but we're honestly not sure since we haven't had 
      much human contact since the start of lockdown. 

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