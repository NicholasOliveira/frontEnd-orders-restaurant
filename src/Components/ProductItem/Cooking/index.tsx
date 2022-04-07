import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { api } from '../../../services'

import { Container } from './styles';
import { Product } from '../../../@types';

type ProductItemCookingProps = {
  Product: Product
  OrderID: string
  setRefresh: any
}

export const ProductItemCooking = ({ Product, OrderID, setRefresh }: ProductItemCookingProps) => {


  const handleStartOrder = async (id: string) => {
    const { data } = await api.get(`orders/${OrderID}`)
    const dataFormatted = data?.orderItems?.map((Order: Product) => {
      if (Order.id === id) {
        return {
          ...Order,
          status: 'Preparando'
        }
      }
      return Order
    })
    api.put(`orders/${OrderID}/`, {
      ...data,
      orderItems: dataFormatted,
    })
    setRefresh(Date.now())
  }

  const handleOrderCompleted = async (id: string) => {
    const { data } = await api.get(`orders/${OrderID}`)
    const dataFormatted = data?.orderItems?.map((Order: Product) => {
      if (Order.id === id) {
        return {
          ...Order,
          status: 'Completed'
        }
      }
      return Order
    })
    api.put(`orders/${OrderID}/`, {
      ...data,
      orderItems: dataFormatted,
    })
    setRefresh(Date.now())
  }

  return (
    <Container>
      <Card
        style={{
          marginRight: 20,
          marginBottom: 20,
          minHeight: 320,
          minWidth: 280
        }}
        sx={{ maxWidth: 280 }}
      >

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
        </CardContent>

        <CardActions>
          {Product.status !== 'Completed' &&
            <Button size="small"
              variant="contained"
              color="warning"
              disabled={Product.status === 'Preparando'}
              onClick={() =>
                handleStartOrder(Product.id)
              }
            >
              {
                Product.status === 'Preparando' ? 'Preparando...' : 'Inicar preparo'
              }
            </Button>
          }

          <Button size="small"
            variant="contained"
            disabled={Product.status === 'Completed'}
            onClick={() =>
              handleOrderCompleted(Product.id)
            }
            color="success">
            Pedido Pronto
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
