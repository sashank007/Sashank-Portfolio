import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    card: {
      maxWidth: 200,
      margin: "0 auto",
      maxHeight: 325,
      borderRadius: 10,
      display: "inline-block",
      float: "left",
      padding: "25px",
      margin: "50px",
      background: "#ffffff",
      [theme.breakpoints.down("600")]: {
        margin: 30
      }
    },
    media: {
      height: 200,
      width: 200,
      margin: 10,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "50%",
      [theme.breakpoints.down("600")]: {
        height: 100,
        width: 100,
        margin: "0px"
      }
    }
  };
});

export default function ModCard(props) {
  const classes = useStyles();
  const { image, title, content } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent> */}
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
