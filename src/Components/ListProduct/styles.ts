import styled from 'styled-components';

export type ContainerProps = {
  isCooking?: boolean
}


export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: ${({ isCooking }: ContainerProps)=> isCooking ? '100%' : '280px 280px'};
  gap: 20px;
`;
