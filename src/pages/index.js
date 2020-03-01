import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  background_image
                  hero_content
                  hero_title
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                primary {
                  section_title
                }
                fields {
                  button_destination {
                    ... on PRISMIC_Page {
                      page_title
                      content
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_action_title
                  content
                  featured_image
                }
              }
              ... on PRISMIC_HomepageBodyPrice_list {
                type
                primary {
                  title
                }
                fields {
                  price_list_description
                  price_list_title
                  price_per_month
                  price_type
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  console.log(props)
  const body = props.data.prismic.allHomepages.edges[0].node.body
  return (
    <Layout>
      <SliceZone body={body} />
    </Layout>
  )
}

export default IndexPage
