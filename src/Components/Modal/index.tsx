import React, { useState } from 'react';
import { Box, Modal as ModalUI, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, TextField } from '@mui/material';

type ModalProps = {
  open: boolean
  handleClose: () => void
  handleSendOrder: (data: any) => void
  responseCode: number
}

const Modal = ({ open, handleClose, handleSendOrder, responseCode }: ModalProps) => {
  const [value, setValue] = useState('');
  const [showMoney, setShowMoney] = useState(false)

  const [name, setName] = useState('')
  const [obs, setObs] = useState('')
  const [cash, setCash] = useState('')

  const data = {
    name,
    obs,
    optionPayment: value,
    moneyHand: cash
  }

  const resetForm = () => {
    setName('')
    setObs('')
    setCash('')
    setValue('')
    setShowMoney(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueChanged = event.target.value
    setValue(valueChanged);
    setShowMoney(false)
    if (valueChanged === 'Dinheiro') {
      setShowMoney(true)
    }
  };
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <ModalUI
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {responseCode > 100 && responseCode < 299 ? <h2>Pedido realizado com sucesso !!!</h2>
          :
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Preencha esses campos:
            </FormLabel>

            <TextField
              id="outlined-basic"
              label="Nome completo e mesa"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Observações do pedido"
              variant="outlined"
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            /><br /><br />

            <FormLabel id="demo-controlled-radio-buttons-group">Escolha a forma de pagamento:</FormLabel><br />
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Dinheiro"
                control={<Radio />}
                label="Dinheiro"
              />

              <TextField id="outlined-basic"
                label="Valor para troco ?"
                variant="outlined"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                style={{ display: showMoney ? 'block' : 'none' }} />

              <FormControlLabel
                value="Cartão"
                control={<Radio />}
                label="Cartão" />

            </RadioGroup>
            <Button onClick={() => [
              handleSendOrder(data),
              resetForm()
            ]}>
              Finalizar Pedido
            </Button>
          </FormControl>
        }
      </Box>
    </ModalUI>
  );
}

export default Modal;