import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {product.price}
        </Button>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}


export default () => {

  const products = [
    {
      name: 'Product 1',
      image: 'https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m000083-bi-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$10'
    },
    {
      name: 'Product 2',
      image: 'https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m000516-bi-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$12'
    },
    {
      name: 'Product 3',
      image: 'https://cdn.eyerim.com/media/catalog/product/cache/shared/image/9df78eab33525d08d6e5fb8d27136e95/s/r/sryb-g000026-m106269-bi-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '$15'
    }
  ]
  return (
    <div>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Home
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {products.map((product, i) => (
          <Grid
            item
            key={i}
            md={4}
            sm={6}
            xs={12}
          >
            <ProductCard product={product} />
          </Grid>
        ))}

      </Grid>

    </div>
  )
}
