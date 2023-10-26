'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { BiMailSend } from 'react-icons/bi'

import icon from '@assets/png/icono-segway.png'
import bill from '@assets/png/pago_efectivo.png'
import sinpeMovil from '@assets/png/sinpe-movil.png'
import tranfers from '@assets/png/transfers.png'
import useCart, { ProductData } from '@hooks/useCart/useCart'
import {
  IconCar,
  IconHome,
  MenuCart,
  ShopCart,
  NameClient,
  CommentText,
  DeliverText,
  MethodsName,
  ChangeButton,
  CountProduct,
  DataDelivery,
  ImageProduct,
  ProductToBuy,
  SubmitButton,
  IconContainer,
  LineContainer,
  PaymentImages,
  CardsContainer,
  TotalContainer,
  CompletePayment,
  CommentContainer,
  PaymentContainer,
  SendMessageButton,
  TypeTripContainer,
  CardTotalContainer,
  NameClientContainer,
  SelectMethodPayment,
  PaymentCardContainer,
  CheckoutPageContainer,
  ColorProductContainer,
  DataDeliveryContainer,
  ProductToBuyContainer,
  ProductTotalContainer,
  SelectPyamentDelivery,
  CheckDeliveryContainer,
  ProductInformationWrap,
  DeliveryMethodContainer,
  LocationDeliveryContainer,
} from '@features/checkout/CheckoutPage/CheckoutPage.elements'

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>('retirar')
  const [selectedMethodPayment, setSelectedMethodPayment] = useState<string | null>('transferencia')
  const { cart } = useCart()
  const [cartItems, setCartItems] = useState([] as ProductData[])
  const [deliveryMethodText, setDeliveryMethodText] = useState('Retirar en la tienda')
  const [deliveryMethodPayment, setDeliveryMethodPayment] = useState('Transferencia Bancaria')
  const formDelivery = useRef<HTMLFormElement | null>(null)
  const [productDescription, setProductDescription] = useState('')
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({})
  const [totalCartPriceNumber, setTotalCartPriceNumber] = useState<number>(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)

  const handleInputChange = (e: any) => {
    const value = e.target.value

    const numericValue = value.replace(/\D/g, '')

    setInputValue(numericValue)
  }

  useEffect(() => {
    const storedSelectedColors = JSON.parse(localStorage.getItem('selectedColors') || '{}')
    setSelectedColors(storedSelectedColors)
  }, [])

  useEffect(() => {
    const description = cart
      .map((product) => {
        const quantityDescription =
          product.quantity === undefined || product.quantity === 0
            ? '1 unidad \n'
            : `${product.quantity} unidades \n `
        return `${product.name}: ${quantityDescription}\n`
      })
      .join('')
    setProductDescription(description)
  }, [cart])

  useEffect(() => {
    // @ts-ignore
    setCartItems(cart)
  }, [cart])

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method)

    if (method === 'retirar') {
      setDeliveryMethodText('Retirar en la tienda')
    } else if (method === 'enviar') {
      setDeliveryMethodText('Enviar a domicilio')
    }
  }

  const handleMethodChangePayment = (method: string) => {
    setSelectedMethodPayment(method)

    if (method === 'Sinpe movil') {
      setDeliveryMethodPayment('Sinpe Movil')
    } else if (method === 'Transferencia') {
      setDeliveryMethodPayment('Transferencia Bancaria')
    } else if (method === 'Efectivo') {
      setDeliveryMethodPayment('Efectivo')
    }
    setSelectedPaymentMethod(method)
  }

  useEffect(() => {
    const storedTotalCartPrice = localStorage.getItem('totalCartPrice')
    const parsedTotalCartPrice = storedTotalCartPrice
      ? parseFloat(storedTotalCartPrice.replace(/,/g, ''))
      : 0
    setTotalCartPriceNumber(parsedTotalCartPrice)
  }, [])

  const form = useRef(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_gcm5ude', 'template_0repe1p', form.current, 'eVV5LaeW7q_SV6WCE')
        .then(
          (result) => {
            console.log(result.text)
            setFormSubmitted(true)
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }

  return (
    <CheckoutPageContainer>
      <PaymentContainer>
        <MethodsName>Metodos de Pago</MethodsName>
        <CompletePayment>
          {formSubmitted
            ? 'Selecciona un método de pago:'
            : 'Por favor, Completa el formulario para acceder a los métodos de pago.'}
        </CompletePayment>
        {formSubmitted && (
          <PaymentCardContainer>
            <CardsContainer $background="#f3ba35" href="./payment">
              <PaymentImages src={sinpeMovil.src} width={120} height={70} alt="" />
            </CardsContainer>
            <CardsContainer $background="#f1e9e9" href="./payment">
              <PaymentImages
                style={{ borderRadius: '50%' }}
                src={tranfers.src}
                width={135}
                height={75}
                alt=""
              />
            </CardsContainer>
            <CardsContainer $background="#EE1616FF" href="./payment">
              <PaymentImages src={bill.src} width={100} height={55} alt="" />
            </CardsContainer>
          </PaymentCardContainer>
        )}

        <IconContainer>
          <LineContainer />
          <Image src={icon.src} width={70} height={40} alt="" />
          <LineContainer />
        </IconContainer>

        <DeliveryMethodContainer>
          <h3>Metodo de Entrega</h3>
          <SelectMethodPayment>Selecciona un metodo de Entrega</SelectMethodPayment>
          <CheckDeliveryContainer>
            <TypeTripContainer>
              <div>
                <input
                  type="radio"
                  id="retirar-checkbox"
                  name="delivery-method"
                  checked={selectedMethod === 'retirar'}
                  onChange={() => handleMethodChange('retirar')}
                />
              </div>
              <IconCar />
              Retirar en la tienda
            </TypeTripContainer>
            <TypeTripContainer>
              <div>
                <input
                  type="radio"
                  id="enviar-checkbox"
                  name="delivery-method"
                  checked={selectedMethod === 'enviar'}
                  onChange={() => handleMethodChange('enviar')}
                />
              </div>
              <IconHome />
              Enviar a domicilio
            </TypeTripContainer>
          </CheckDeliveryContainer>
        </DeliveryMethodContainer>
        {selectedMethod === 'enviar' && (
          <LocationDeliveryContainer>
            <h2>Entrega a Domicilio</h2>
            <DeliverText>El envío se coordina luego de verificar la compra.</DeliverText>
            <SendMessageButton href="https://wa.link/xjt48l">
              <BiMailSend style={{ fontSize: '23px' }} />
              Coordinar
            </SendMessageButton>
          </LocationDeliveryContainer>
        )}

        <DataDeliveryContainer ref={form} onSubmit={sendEmail}>
          <div>
            <h2>Datos de Entrega</h2>
            <DeliverText>Necesitamos esta información para coordinar la entrega</DeliverText>
          </div>
          <NameClientContainer>
            <NameClient required placeholder="Nombre " type="text" name="from_name" />
            <NameClient required placeholder="Apellidos" type="text" name="from_lastname" />
          </NameClientContainer>
          <DataDelivery placeholder="Email" type="email" name="from_email" />
          <DataDelivery
            required
            maxLength={9}
            minLength={8}
            placeholder="Teléfono"
            type="text"
            name="from_telephone"
            inputMode="tel"
            value={inputValue}
            onChange={handleInputChange}
          />
          <DataDelivery placeholder="Dirección" type="text" name="from_location" />
          <label>Seleciona el Metodo de pago:</label>
          <SelectPyamentDelivery
            name="from_methodo"
            value={selectedMethodPayment || ''}
            onChange={(e) => handleMethodChangePayment(e.target.value)}>
            <option value="Transferencia">Transferencia Bancaria</option>
            <option value="Sinpe movil">Sinpe Movil</option>
            <option value="Efectivo">Efectivo</option>
          </SelectPyamentDelivery>
          <label>Monto Total:</label>
          <DataDelivery
            readOnly
            name="from_total"
            value={totalCartPriceNumber.toLocaleString('en-US')}
          />
          <label>Descripción del Producto:</label>
          {cartItems.map((product) => (
            <DataDelivery
              name="description"
              key={product.name}
              readOnly
              value={`${product.name}: ${
                (product.quantity !== undefined ? product.quantity : 1) === 1
                  ? '1 unidad'
                  : `${product.quantity} unidades`
              }, Color: ${selectedColors[product.name] || 'Predeterminado'}`}
              style={{ whiteSpace: 'pre-line' }}
            />
          ))}

          <SubmitButton type="submit" value={formSubmitted ? 'Enviado ✔' : 'Enviar'} />
        </DataDeliveryContainer>
      </PaymentContainer>

      <ProductTotalContainer>
        <ShopCart>Carrito de Compras</ShopCart>
        <ProductToBuyContainer>
          {cartItems.map((product, index) => (
            <ProductToBuy key={index}>
              <ProductInformationWrap>
                <ImageProduct src={product.picture} width={100} height={90} alt="" />
                <CountProduct>{product.quantity || 1}</CountProduct>
                <ColorProductContainer>
                  <h3>{product.name}</h3>
                  {selectedColors[product.name] && <p>Color: {selectedColors[product.name]}</p>}
                </ColorProductContainer>
              </ProductInformationWrap>
              <h3>${(product.price || 0) * (product.quantity || 1)}</h3>
            </ProductToBuy>
          ))}
        </ProductToBuyContainer>
        <MenuCart>Menú Cart</MenuCart>

        <CommentContainer>
          <CommentText>Presione el botón para regresar al Carrito de Compras.</CommentText>
          <ChangeButton>
            <Link href="/cart">Regresar</Link>
          </ChangeButton>
        </CommentContainer>

        <TotalContainer>
          <CardTotalContainer>
            <h3>Metodo de Envio:</h3>
            <h3>{deliveryMethodText}</h3>
          </CardTotalContainer>
          <CardTotalContainer>
            <h3>Envio</h3>
            <p>Se coordina después de la compra.</p>
          </CardTotalContainer>
          <CardTotalContainer>
            <h3>Metodo de pago:</h3>
            <h3>{deliveryMethodPayment}</h3>
          </CardTotalContainer>
          <CardTotalContainer>
            <h2>Total</h2>
            <h2>${totalCartPriceNumber.toLocaleString('en-US')}</h2>
          </CardTotalContainer>
        </TotalContainer>
      </ProductTotalContainer>
    </CheckoutPageContainer>
  )
}
