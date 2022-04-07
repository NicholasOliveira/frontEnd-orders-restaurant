import React from 'react';
import { Button } from '@mui/material';
import { OrderItem } from '../OrderItem';

import { Container, Footer, Text } from './styles';
import { Product } from '../../@types';

export type OrderProps = {
  handleOpen: () => void
  orderItems: Product[]
  setOrderItems: any
}

export const Order = ({ handleOpen, orderItems, setOrderItems }: OrderProps) => {

  const handleRemoveItem = (Product: Product) => {
    const newOrderItems = orderItems.filter((Item) => {
      return Item.id !== Product.id
    })
    setOrderItems(newOrderItems)
  }

  const totalCart = orderItems.reduce((total, item) => total + Number(item.price.replace(',', '')), 0)

  return (
    <Container>
      {
        orderItems.length === 0 &&
        <h3>Nada no carrinho</h3>
      }

      {
        orderItems.map((Product: Product) =>
          <OrderItem
            key={Product.id}
            Product={Product}
            handleRemoveItem={handleRemoveItem}
          />)
      }

      <Footer>
        <Text><strong>Total:</strong> <span>R$: {totalCart}</span></Text>
        <Button onClick={handleOpen}>
          Escolher Pagamento
        </Button>
      </Footer>
    </Container >
  )
    ;
}