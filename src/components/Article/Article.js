import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const Article = (props) => (
  <>
    {props.image.localFile &&
      <Img fluid={props.image.localFile.childImageSharp.fluid} />
    }
    <Typography variant="h2" paragraph>{props.title}</Typography>
    <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.body }} />

  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string
};

export default Article;