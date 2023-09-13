import Link from 'next/link'
import styled from 'styled-components'

export const SeeInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 530px) {
    flex-direction: row;
  }
`

export const SeeInformationButton = styled(Link)`
  background: linear-gradient(to left, #d92a19, darkred);
  border: none;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 15px;
  border-radius: 20px;

  @media (max-width: 630px) {
    width: 65%;
  }

  @media (max-width: 530px) {
    width: 48%;
  }
`

export const AccesoriesContainer = styled.div`
  box-shadow: 0 0 10px 0 #d3c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  position: relative;
  text-align: center;

  @media (max-width: 900px) {
    height: 400px;
  }

  @media (max-width: 630px) {
    height: 450px;
  }

  @media (max-width: 530px) {
    height: 300px;
  }
`

export const ChangeImage = styled.img`
  height: 100%;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 630px) {
    width: 80%;
    height: 85%;
  }

  @media (max-width: 530px) {
    width: 150px;
    height: 150px;
  }
`

export const PrevButton = styled.button`
  z-index: 99;
  position: absolute;
  left: 0;
  bottom: 160px;
  background-color: transparent;
  border: none;
  width: 60px;
  font-size: 35px;
  color: rgba(169, 169, 169, 0.34);

  &:hover {
    color: #332e2e;
  }
`

export const NextButton = styled.button`
  z-index: 99;
  position: absolute;
  right: 0;
  bottom: 160px;
  background-color: transparent;
  border: none;
  width: 60px;
  font-size: 35px;
  color: rgba(169, 169, 169, 0.34);

  &:hover {
    color: #332e2e;
  }
`
