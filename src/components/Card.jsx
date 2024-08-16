import {
  Card, CardActionArea, CardContent,
  CardMedia, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(() => ({
  card: {
    width: "300px",
  },
  image: {
    objectFit: "contain !important",
  }
}));

export const CardProduct = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          width="160"
          image={"" + data.imageUrl}
          title="Contemplative Reptile"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2" noWrap>
            {data.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2" noWrap>
            {data.brand}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2" noWrap>
            {data.price}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2" noWrap>
            {data.description}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2" noWrap>
            {data.quantity}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}
