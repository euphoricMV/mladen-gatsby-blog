import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Article from '../components/Article/Article';

const articleTemplate = (props) => {
  const { nodeArticle: article } = props.data;

  return (
    <Layout>
      <Helmet
        title={`Blog - ${article.title}`}
        meta={[
          {name: 'description', content: article.title},
        ]}
      />
      <Paper>
        <Article
          {...article}
          body={article.body.processed}
          image={article.relationships.image}
        />
      </Paper>
    </Layout>
  )
};

export default articleTemplate;

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
  query ArticleTemplate($drupal_id: String!) {
    nodeArticle(drupal_id: {eq: $drupal_id}) {
      drupal_id,
      title,
      body {
        processed
      }
      relationships {
        image: field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;