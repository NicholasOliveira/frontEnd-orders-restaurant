import React from 'react';
import { SearchRounded } from '@mui/icons-material';

import { Container, TexFieldUI } from './styles';

export type SearchBarProps = {
  setSearhTerm: any
}

export const SearchBar = ({ setSearhTerm }: SearchBarProps) => {
  return (
    <Container>
      <SearchRounded
        sx={{
          color: 'action.active',
          mr: 1,
          my: 0.5
        }}
      />
      <TexFieldUI
        label="Pesquisar nome do produto"
        variant="standard"
        onChange={(e) => setSearhTerm(`?name_like=${e.target.value}`)}
      />
    </Container>
  );
}
