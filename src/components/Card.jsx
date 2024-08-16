import {
  Card, CardActionArea, CardContent,
  CardMedia, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles(() => ({
  card: {
    width: "300px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      transform: "scale(1.05)"
    }
  },
  image: {
    objectFit: "contain !important",
    borderRadius: "10px 10px 0 0",
    height: "200px"
  },
  content: {
    textAlign: "center",
    fontSize: "1.5rem"
  },
  title: {
    fontWeight: "bold",
    fontSize: "2rem",
  }
}));

export const CardProduct = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.name}
          height="200"
          image={data.imageUrl}
          title={data.name}
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.price)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
