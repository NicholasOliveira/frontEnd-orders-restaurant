import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Product } from '../../@types'

import { Container } from './styles';

type ProductItemProps = {
  setOrderItems: any
  orderItems: Product[]
  Product: Product
}

export const ProductItem = ({ setOrderItems, orderItems, Product }: ProductItemProps) => {

  const handleAddProduct = (Product: Product) => {
    setOrderItems([...orderItems, Product])
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 280 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Product.img}
        />
        <CardContent>
          <Typography gutterBottom
            variant="h5"
            component="div">
            {Product.name}
          </Typography>
          <Typography variant="body2"
            color="text.secondary">
            R$: {Product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleAddProduct(Product)}
          >
            Realizar pedido
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
