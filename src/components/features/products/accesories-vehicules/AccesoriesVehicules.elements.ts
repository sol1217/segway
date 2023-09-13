import styled from 'styled-components'

export const ProductAccesoriesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 25px;
  padding: 20px;

  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 400px);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 90%);
  }
`
