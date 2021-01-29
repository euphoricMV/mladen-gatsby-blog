import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout'
import ArticleCard from '../components/ArticleCard/ArticleCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h2">Hi people</Typography>
        <Typography variant="subtitle1" paragraph>
          Welcome to your new Gatsby site using <a href="https://material-ui.com">Material UI</a> for the UI.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Now go build something great.
        </Typography>
      </Paper>
      <Box mt={3}>
        <Grid container spacing={1}>
        {
          props.data.allNodeArticle.edges.map(({ node: article }) => (
            <Grid item key={article.title} xs={6} md={4}>
              <ArticleCard
                title={article.title}
                body={article.body.summary}
                image={article.relationships.image}
                path={article.path.alias}
              />
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </Layout>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IndexPage;

// The result of this GraphQL query will be injected as props.data into the
// IndexPage component.
export const query = graphql`
  query {
    allNodeArticle(sort: {fields: [changed], order:DESC}) {
      edges {
        node {
          title
          body {
            summary
            processed
          }
          drupal_id
          path {
            langcode
            alias
          }
          relationships {
            image: field_image {
              localFile {
                childImageSharp {
                  fixed(width: 345, height: 180) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
