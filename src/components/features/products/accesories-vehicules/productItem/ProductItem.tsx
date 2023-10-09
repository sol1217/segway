import React, { useState } from 'react'
import Link from 'next/link'

import { ProductItemProps } from '@features/products/accesories-vehicules/AccesoriesVehicules.types'
import {
  NextButton,
  PrevButton,
  ChangeImage,
  AccesoriesContainer,
  SeeInformationButton,
  SeeInformationContainer,
} from '@features/products/accesories/ProductItem/ProductItem.elements'

export const ProductItem = ({ product }: ProductItemProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + product.images.length) % product.images.length)
  }

  return (
    <>
      <AccesoriesContainer>
        <h4>{product.name}</h4>
        <div>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <Link href={`/products/accesoriesVehicules/${product.alias}`}>
            <ChangeImage
              src={product.images[currentImage].src}
              width={product.images[currentImage].width}
            />
          </Link>
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </div>
        <SeeInformationContainer>
          <p>{product.property}</p>
          <SeeInformationButton href={`/products/accesoriesVehicules/${product.alias}`}>
            Ver Información
          </SeeInformationButton>
        </SeeInformationContainer>
      </AccesoriesContainer>
    </>
  )
}
