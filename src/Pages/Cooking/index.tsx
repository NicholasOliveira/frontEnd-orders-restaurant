import React from 'react';
import { Product } from '../../@types';
import { ListProduct } from '../../Components/ListProduct';

import { Container, Content } from './styles';

type CookingProps = {
  orderItems: Product[]
  setOrderItems: any
}

export const Cooking = ({ orderItems, setOrderItems }: CookingProps) => {
  return (
    <Container>
      <Content>
        <ListProduct
          setOrderItems={setOrderItems}
          orderItems={orderItems}
          isCooking={true}
        />
      </Content>
    </Container>
  );
}
