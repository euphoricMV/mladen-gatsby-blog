import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        minHeight: 310,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginTop: 12,
        marginBottom: 12,
    },
}));

const ArticleCard = (props) => {
    const classes = useStyles();
    const ArticleLink = props => <Link to={props.path} {...props}>Read more</Link>;

    return (
        <Card className={classes.card}>
            <CardContent>
                {props.image.localFile &&
                    <Img fixed={props.image.localFile.childImageSharp.fixed} />
                }
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary" dangerouslySetInnerHTML={{ __html: props.body }} />
            </CardContent>
            <CardActions>
                <Button size="small" path={props.path} component={ArticleLink}>Read more</Button>
            </CardActions>
        </Card>
    );
};

ArticleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default ArticleCard;