import React, { useState } from 'react';
import { Product } from '../../@types';
import { ListProduct } from '../../Components/ListProduct';
import Modal from '../../Components/Modal';
import { Order } from '../../Components/Order';
import { SearchBar } from '../../Components/SearchBar';
import { api } from '../../services';

import { Container, Content } from './styles';

type HomeProps = {
  orderItems: Product[]
  setOrderItems: any
}

export const Home = ({ orderItems, setOrderItems }: HomeProps) => {
  const [open, setOpen] = useState(false);
  const [responseCode, setResponseCode] = useState(0);
  const [searchTerm, setSearhTerm] = useState('')

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setResponseCode(0)
  };

  const handleSendOrder = async (data: any) => {
    const newOrderItems: Product[] = orderItems.map((Order: Product) => ({
      ...Order,
      status: 'Aguardando'
    }))
    try {
      const { status } = await api.post('/orders', { ...data, orderItems: newOrderItems })
      setResponseCode(status)
      setOrderItems([])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <SearchBar
        setSearhTerm={setSearhTerm}
      />
      <Content>
        <ListProduct
          setOrderItems={setOrderItems}
          orderItems={orderItems}
          searchTerm={searchTerm}
        />
        <Order
          handleOpen={handleOpen}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      </Content>
      <Modal
        handleSendOrder={handleSendOrder}
        open={open}
        handleClose={handleClose}
        responseCode={responseCode}
      />
    </Container>
  );
}
