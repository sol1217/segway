import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

import { LoaderSize } from '@core/Loader/Loader.types'

export type RootLayoutProps = {
  children: ReactNode
}

export type TextVariant = {
  fontFamily: CSSProperties['fontFamily']
  fontWeight: CSSProperties['fontWeight']
  fontSize: CSSProperties['fontSize']
  lineHeight: CSSProperties['lineHeight']
  letterSpacing: CSSProperties['letterSpacing']
  textTransform: CSSProperties['textTransform']
}

export type ButtonVariant = (disabled: boolean) => {
  styles: RuleSet
  loader?: {
    size?: LoaderSize
    color?: string
  }
  disabledLoader: {
    size?: LoaderSize
    color?: string
  }
}
export type ProductImage = {
  src: string
  width: number
}

export type Product = {
  name: string
  alias: string
  images: ProductImage[]
  picture: string
  completeDesciprtion?: string
  video?: string
  features?: string[]
  featuresImage?: FeaturesProduct[]
  logo?: string
  model?: string
  galleryImages?: GalleryImages[]
  price: number
  property?: string
  colorsAvailable?: ProductsColors[]
}

export interface FeaturesProduct {
  titleFeatures: string
  featuresDescription: string
  src: string
}

export interface GalleryImages {
  src: string
  width?: number
  height?: number
}

export enum ProductsColors {
  Pink = 'Rosa',
  Purple = 'Morado',
  Black = 'Negro',
  Yellow = 'Amarillo',
  Orange = 'Naranjado',
  Green = 'Verde',
  Blue = 'Azul',
  Red = 'Rojo',
  Gris = 'Gris',
}

export enum ProductEnum {
  SCOOTER_BAG = 'scooter-bag',
  NINEBOT_CASCO = 'ninebot-casco',
  NINEBOT_PHONE_HOLDER = 'phone-holder',
  SCOOTER_STORAGE_BAG = 'storage-bag',
  NINEBOT_PROTECTIVE_GEAR_SET = 'gear-set',
  NINEBOT_BAG = 'ninebot-bag',
}
