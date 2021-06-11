import {makeStyles} from "@material-ui/core/styles";
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
    const {products} = props;
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
                                <Typography gutterBottom variant="h6" component="h2">
                                    {products[idx].name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    style={{
                                        minHeight: '80px'
                                    }}
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
                                        lineHeight: "1.5",
                                    }}
                                >
                                    <strong>price(USD): {products[idx].price}</strong><br/>
                                        Region: {products[idx].region}<br/>
                                        Season: {products[idx].season}<br/>
                                        Stock Category: {products[idx].stock_cat}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" style={{border: '1px solid black', backgroundColor: '#444', color: 'white'}}>
                                Edit
                            </Button>
                            <Button size="small" color="primary" style={{border: '1px solid black', backgroundColor: '#444', color: 'white'}}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </>
    );
}
