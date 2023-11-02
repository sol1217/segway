'use client'

import Link from 'next/link'

import segwaycar from '@assets/jpeg/montain-segway.jpeg'
import segwaymula from '@assets/jpeg/mula-segway.jpeg'
import segwayblue from '@assets/jpeg/segway-blue.jpeg'
import segwayvillain from '@assets/jpeg/segway-car.jpeg'
import segwaygreen from '@assets/jpeg/segway-green.jpeg'
import segwaynew from '@assets/jpeg/segway-new.jpeg'
import segwaytwo from '@assets/jpeg/segway-two.jpeg'
import segwaycuadra from '@assets/jpeg/serway-cuadra.jpeg'
import segwaystreet from '@assets/jpeg/street-segway.jpeg'
import madeLogo from '@assets/png/about-logo.png'
import fear from '@assets/png/fear-place.png'
import segwaylogo from '@assets/png/logo-red.png'
import {
  TextName,
  LogoImage,
  ContactText,
  MadeLogoImg,
  SloganImage,
  ContactButton,
  ImagesGallery,
  AboutContainer,
  TitleContainer,
  VideoContainer,
  InformationText,
  SloganContainer,
  ImageInformation,
  SloganDefinition,
  LogoNameContainer,
  ContactSectionWrap,
  InformationCompany,
  InformationSection,
  FoundationContainer,
  ImageInformationWrap,
  ImagesGalleryContainer,
  ImagesSectionContainer,
  InformationCompanyText,
  InformationCompanyContainer,
} from '@features/about/Aboutpage/About.elements'

export default function AboutUsPage() {
  return (
    <AboutContainer>
      <VideoContainer>
        <MadeLogoImg src={madeLogo.src} />
        <video
          style={{ opacity: '.6 ' }}
          width="100%"
          src="/videos/segway-tiger.mp4"
          controls={false}
          autoPlay
          muted
          loop
        />
      </VideoContainer>
      <FoundationContainer>
        <LogoNameContainer>
          <TextName>Segway PowerSports</TextName>
        </LogoNameContainer>
        <LogoImage src={segwaylogo.src} alt="Segway Powersports" width={500} height={200} />
        <InformationCompanyContainer>
          Segway, fundada en 1999 por el renombrado empresario Dean Kamen en los EUA. Fundada en
          Estados Unidos como una de las empresas pioneras en dispositivos VMP, Segway ha crecido
          hasta convertirse en un monstruo tecnológico que se ha ido ramificando con el paso de los
          años y la evolución del sector. Fue en 2019 cuando Segway presentó en el salón de Milán su
          división SEGWAY POWERSPORTS como constatación del crecimiento de la compañía, yendo un
          paso más allá de los dispositivos de movilidad personal y las alianzas con grandes
          compañías del sector tecnológico como de la automoción.
        </InformationCompanyContainer>
      </FoundationContainer>

      <InformationSection $background="#fff" $color="#000">
        <InformationCompany>
          <ImageInformationWrap>
            <ImageInformation src={segwaycar.src} width={450} height={450} alt="" />
          </ImageInformationWrap>
          <InformationCompanyText>
            <TitleContainer>Perfil de la compañía</TitleContainer>
            <InformationText>
              Segway Powersports redobla su presencia y ha querido darnos a conocer su catálogo de
              productos offroad. Ellos han sido los encargados de montar un plan perfecto para
              cualquiera al que le guste el motor y hacer gamberradas sobre ruedas, poniendo a
              nuestra disposición el ATV Snarler AT6, el UTV Fugleman y el SXS Villain. Un trío de
              (supuestas) herramientas de trabajo, pero que dan mucho, mucho juego.
            </InformationText>
          </InformationCompanyText>
        </InformationCompany>
      </InformationSection>

      <InformationSection $background="#000" $color="#fff">
        <InformationCompany>
          <InformationCompanyText>
            <TitleContainer>Filosofías</TitleContainer>
            <InformationText>
              La empresa se dedica a la venta y servicio de unidades. Vela por el bienestar,
              satisfacción y diversión de sus clientes. Siempre buscando el desarrollo y la
              superación.
            </InformationText>
          </InformationCompanyText>
          <ImageInformationWrap>
            <ImageInformation src={segwayvillain.src} width={450} height={450} alt="" />
          </ImageInformationWrap>
        </InformationCompany>
      </InformationSection>

      <InformationSection $background="#fff" $color="#000">
        <InformationCompany>
          <ImageInformationWrap>
            <ImageInformation src={segwaymula.src} width={450} height={450} alt="" />
          </ImageInformationWrap>
          <InformationCompanyText>
            <TitleContainer>Generación</TitleContainer>
            <InformationText>
              En 2018 fue creada Segway Tecnology Co, LTD para la búsqueda, desarrollo, producción y
              comercialización de vehículos Off-Road – ATV, SSV y UTV. Con el principal centro de
              desarrollo asentado en EUA, la segunda generación del modelo Segway PT trae el control
              sin cables y la revolucionaria tecnología LeanSteeer – girando el manillar para los
              lados.
            </InformationText>
          </InformationCompanyText>
        </InformationCompany>
      </InformationSection>

      <SloganContainer>
        <SloganImage src={fear.src} width={800} height={150} alt="" />
        <SloganDefinition>
          &quot;FEAR NO PLACE&quot; Significa que el Segway no sólo es usado, sino que, vive, se
          esfuerza, supera sus límites cada día y es valiente para explorar cualquier terreno.
        </SloganDefinition>
      </SloganContainer>

      <ImagesSectionContainer>
        <ImagesGalleryContainer>
          <ImagesGallery src={segwayblue.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaynew.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaygreen.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaystreet.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaytwo.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaycuadra.src} alt="" width={300} height={200} />
        </ImagesGalleryContainer>
      </ImagesSectionContainer>

      <ContactSectionWrap>
        <ContactText>
          Segway Powersports ponte en contacto con uno de nuestros encargados.
        </ContactText>
        <ContactButton>
          <Link href="/contacts">Enviar Mensaje</Link>
        </ContactButton>
      </ContactSectionWrap>
    </AboutContainer>
  )
}
