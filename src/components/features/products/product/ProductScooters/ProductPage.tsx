'use client'

import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { PiShoppingCartBold } from 'react-icons/pi'

import useCart from '@hooks/useCart/useCart'

import {
  LogoImage,
  NameModel,
  NameProduct,
  ImageProduct,
  ProductAdded,
  TitleGallery,
  ImagesGallery,
  TitleFeatures,
  ContactSection,
  DesignFeatures,
  ImagesFeatures,
  FeaturesProduct,
  TextInformation,
  CatalogueSection,
  ContactContainer,
  CatalogueContainer,
  DescriptionSection,
  DesignFeaturesItems,
  ProductPageContainer,
  ViewProductContainer,
  FeaturesTextContainer,
  ImagesGalleryContainer,
  ImagesSectionContainer,
  TitleFeaturesContainer,
  DesignFeaturesContainer,
  FeaturesProductContainer,
} from './ProductPage.elements'
import { ProductPageProps } from './ProductPage.types'

export const ProductPageScooter = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [isProductAdded, setProductAdded] = useState(false)
  const { cart, addToCart } = useCart()

  const handleAddToCart = () => {
    if (!productInfo) return
    const { picture, name, price, colorsAvailable } = productInfo

    const productData = { picture, name, price, colorsAvailable, quantity: 1 }

    addToCart(productData)
    setProductAdded(true)
  }

  return (
    <ProductPageContainer>
      <div>
        <LogoImage src={productInfo?.logo} />
        <video width="100%" src={productInfo?.video} controls={false} autoPlay muted loop />
      </div>

      <ViewProductContainer>
        <NameModel>
          <NameProduct src={productInfo?.model} />
        </NameModel>

        <FeaturesProductContainer>
          <ImageProduct src={productInfo?.picture} />
          <FeaturesProduct>
            <DescriptionSection>{productInfo?.completeDesciprtion}</DescriptionSection>
            <h2>Características</h2>
            <FeaturesTextContainer>
              {productInfo?.features?.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </FeaturesTextContainer>
          </FeaturesProduct>
        </FeaturesProductContainer>

        <ContactSection>
          {isProductAdded ? (
            <ProductAdded>
              <FaCheckCircle style={{ color: 'green' }} />
              <p>Añadido correctamente</p>
            </ProductAdded>
          ) : (
            <ContactContainer onClick={handleAddToCart}>
              <PiShoppingCartBold style={{ fontSize: '24px' }} />
              Añadir al Carrito
            </ContactContainer>
          )}
        </ContactSection>
      </ViewProductContainer>

      <DesignFeaturesContainer>
        <TitleFeaturesContainer>Características de Diseño</TitleFeaturesContainer>
        <DesignFeatures>
          {productInfo?.featuresImage?.map(({ src, titleFeatures, featuresDescription }, i) => (
            <DesignFeaturesItems key={i}>
              <ImagesFeatures src={src} width="100%" />
              <TitleFeatures>{titleFeatures}</TitleFeatures>
              <TextInformation>{featuresDescription}</TextInformation>
            </DesignFeaturesItems>
          ))}
        </DesignFeatures>
      </DesignFeaturesContainer>

      <CatalogueContainer>
        <CatalogueSection>
          <a href="/catalogo.pdf" download>
            Descargar Catálogo
          </a>
        </CatalogueSection>
      </CatalogueContainer>

      <ImagesSectionContainer>
        <TitleGallery>Galería {productInfo?.name}</TitleGallery>
        <ImagesGalleryContainer>
          {productInfo?.galleryImages?.map(({ src, width, height }, i) => (
            <ImagesGallery key={i} src={src} width={width} height={height} />
          ))}
        </ImagesGalleryContainer>
      </ImagesSectionContainer>
    </ProductPageContainer>
  )
}
