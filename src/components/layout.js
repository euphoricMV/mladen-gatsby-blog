import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation/Navigation';

const Layout = (props) => {
  const {children} = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          >
            <html lang="en"/>
          </Helmet>
          <Container maxWidth="lg">
            <Navigation siteTitle={data.site.siteMetadata.title}/>
            <Box component="main">
              {children}
            </Box>
          </Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;