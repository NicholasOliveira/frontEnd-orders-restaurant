import React from 'react';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';
import { Box } from './styles'
import { Product } from '../../@types';

type OrderItemProps = {
  Product: Product
  handleRemoveItem: (Product: Product) => void
}

export const OrderItem = ({ Product, handleRemoveItem }: OrderItemProps) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"
            src={Product.img} />
        </ListItemAvatar>
        <ListItemText
          primary={Product.name}
          secondary={
            <Box>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                R$ {Product.price}
              </Typography>
              <RemoveCircle
                onClick={() => handleRemoveItem(Product)
                }
                sx={{ color: 'action.active' }} />
            </Box>
          }
        />
      </ListItem>
      <Divider variant="inset"
        component="li" />
    </List>
  );
}
