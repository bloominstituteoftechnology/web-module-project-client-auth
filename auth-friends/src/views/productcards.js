import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "3vh 1vh",
    boxShadow: "0 0 1vh #aaa",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const { products } = props;
  console.log(products);
  const classes = useStyles();

  return (
    <>
      {products &&
        products.map((item, idx) => {
          return (
            <Card className={classes.root} key={idx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={products[idx].img_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {products[idx].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {products[idx].description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      paddingTop: "2vh",
                    }}
                  >
                    <strong>sku: {products[idx].id}</strong>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      lineHeight: "2",
                    }}
                  >
                    <strong>price(USD): {products[idx].price}</strong>
                    <p>Region: {products[idx].region}</p>
                    <p>Season: {products[idx].season}</p>
                    <p>Stock Category: {products[idx].stock_cat}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </>
  );
}
