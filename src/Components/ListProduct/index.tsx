import React, { useEffect, useState } from 'react';
import { api } from '../../services'
import { Order, Product } from '../../@types';
import { ProductItem } from '../ProductItem';
import { ProductItemCooking } from '../ProductItem/Cooking';

import { Container, Wrapper, InfoOrder } from './styles';
import { Typography } from '@mui/material';

export type ListProductProps = {
  isCooking?: boolean
  setOrderItems: any
  orderItems: Product[]
  searchTerm?: string
}

export const ListProduct = ({ isCooking, orderItems, setOrderItems, searchTerm = '' }: ListProductProps) => {

  const [products, setProducts] = useState<Product[]>([] as Product[])

  const [orders, setOrders] = useState<Order[]>([] as Order[])

  const [refresh, setRefresh] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get(`/products${searchTerm}`)
      setProducts(data)
    }
    getData()
  }, [searchTerm])

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await api.get('/orders')
      setOrders(data)
    }
    getOrders()
  }, [refresh])

  if (isCooking) {
    return (
      <Container isCooking={isCooking}>
        {
          orders.map((Order: Order) =>
            <div key={Order.id}>
              <InfoOrder>
                <Typography variant="body2"
                  color="text.secondary">
                  {Order.name}
                </Typography>

                <Typography variant="body2"
                  color="text.secondary">
                  <strong>Observações: </strong>
                  {Order.obs}
                </Typography>


                {Order.moneyHand && <Typography variant="body2"
                  color="text.secondary">
                  <strong>Troco para: </strong>
                  {Order.moneyHand}
                </Typography>}
              </InfoOrder>
              <Wrapper>
                <br />
                {Order.orderItems.map((Product) => (
                  <ProductItemCooking
                    key={Product.id}
                    setRefresh={setRefresh}
                    OrderID={Order.id}
                    Product={Product}
                  />
                ))}
              </Wrapper>
            </div>
          )
        }
      </Container>
    )
  }
  return (
    <Container>

      {
        products.map((Product: Product) =>
          <ProductItem
            key={Product.id}
            Product={Product}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />)
      }


    </Container>
  );
}
