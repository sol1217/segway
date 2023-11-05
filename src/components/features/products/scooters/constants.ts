import { Product, ProductsColors } from '@types'
import bateryGt1 from '@assets/jpeg/batery-gta1.jpeg'
import a6Uno from '@assets/jpeg/gallery-A6-1.jpeg'
import a6Dos from '@assets/jpeg/gallery-A6-2.jpeg'
import sensorA6 from '@assets/jpeg/gallery-A6-3.jpeg'
import a6Cuatro from '@assets/jpeg/gallery-A6-4.jpeg'
import a6Cinco from '@assets/jpeg/gallery-A6-5.jpeg'
import a6Seis from '@assets/jpeg/gallery-A6-6.jpeg'
import c20Uno from '@assets/jpeg/gallery-C20-1.jpeg'
import c20Dos from '@assets/jpeg/gallery-C20-2.jpeg'
import c20Cinco from '@assets/jpeg/gallery-c20-5.jpeg'
import c8Dos from '@assets/jpeg/gallery-C8-2.jpeg'
import c8Cuatro from '@assets/jpeg/gallery-c8-4.jpeg'
import c8Cinco from '@assets/jpeg/gallery-c8-5.jpeg'
import e8Uno from '@assets/jpeg/gallery-E8-1.jpeg'
import e8Dos from '@assets/jpeg/gallery-E8-2.jpeg'
import e8Tres from '@assets/jpeg/gallery-E8-3.jpeg'
import e8cino from '@assets/jpeg/gallery-E8-5.jpeg'
import e8Seis from '@assets/jpeg/gallery-E8-6.jpeg'
import gt1Dos from '@assets/jpeg/gallery-gt2-2.jpeg'
import gt1Ocho from '@assets/jpeg/gallery-gt2-5.jpeg'
import gt1Cuatro from '@assets/jpeg/gallery-gt2-6.jpeg'
import gt2Siete from '@assets/jpeg/gallery-gt2-7.jpeg'
import gt1Uno from '@assets/jpeg/gallery-gta1-1.jpeg'
import gtTres from '@assets/jpeg/gallery-gta1-3.jpeg'
import gt1Seis from '@assets/jpeg/gallery-gta2-3.jpeg'
import gt1Cinco from '@assets/jpeg/gallery-gta2-4.jpeg'
import modesE8 from '@assets/jpeg/mode-e8.jpeg'
import structureC8 from '@assets/jpeg/structure-c8.jpeg'
import aspectC8 from '@assets/jpg/aspect-c8.jpg'
import bateryA6 from '@assets/jpg/batery-a6.jpg'
import bateryC20 from '@assets/jpg/batery-c20.jpg'
import leverC20 from '@assets/jpg/c20- lever.jpg'
import tiresC20 from '@assets/jpg/c20-tires.jpg'
import brakingC8 from '@assets/jpg/c8-braking.jpg'
import engineGt2 from '@assets/jpg/engine-gta2.jpg'
import c20Tres from '@assets/jpg/gallery-C20-3.jpg'
import c20Cuatro from '@assets/jpg/gallery-C20-4.jpg'
import c20Seis from '@assets/jpg/gallery-c20-6.jpg'
import c8Uno from '@assets/jpg/gallery-C8-1.jpg'
import gt1Siete from '@assets/jpg/gallery-gt2-6.jpg'
import tiresA6 from '@assets/jpg/pneumatic-a6.jpg'
import securityE8 from '@assets/jpg/safety-e8.jpg'
import securityGt1 from '@assets/jpg/safety-gta1.jpg'
import speedUpE8 from '@assets/jpg/speed-up-e8.jpg'
import c8Product from '@assets/png/C8-Product.png'
import e8Product from '@assets/png/e8-product.png'
import functionGt2 from '@assets/png/function-gta2.png'
import a6Tres from '@assets/png/gallery-A6-new-3.png'
import c8Tres from '@assets/png/gallery-C8-3.png'
import c8Seis from '@assets/png/gallery-C8-6.png'
import e8cuatro from '@assets/png/gallery-E8-4.png'
import logoC20 from '@assets/png/logo-c20.png'
import logoA6 from '@assets/png/model-a6.png'
import logoC8 from '@assets/png/model-c8.png'
import logoE8 from '@assets/png/model-e8.png'
import logoGta1 from '@assets/png/model-gt1.png'
import logoGta2 from '@assets/png/model-gt2.png'
import suspensionGt2 from '@assets/png/suspension.png'
import zinga6two from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-A6/a6-1.png'
import zinga6 from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-A6/a6-2.jpg'
import a6Product from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-A6/a6-product.png'
import zingc20 from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-c20/c20-1.jpg'
import zingc20two from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-c20/c20-2.jpg'
import c20Product from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-c20/c20-product.png'
import zingc8 from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-c8/c8-1.jpg'
import zingc8two from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-c8/c8-2.jpg'
import zinge8two from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-e8/e8-1.jpg'
import zinge8three from '@assets/images/SEGWAY-VEHICULOS/ninebot-ekickscooter-zing-e8/e8-2.jpg'
import gt2 from '@assets/images/SEGWAY-VEHICULOS/SUPERSCOOTER-GT1/gt1-1.jpg'
import gt2Product from '@assets/images/SEGWAY-VEHICULOS/SUPERSCOOTER-GT1/GT2-product.png'
import gt1Product from '@assets/images/SEGWAY-VEHICULOS/SUPERSCOOTER-GT2/Gt-product.png'
import gt2two from '@assets/images/SEGWAY-VEHICULOS/SUPERSCOOTER-GT2/gt2-1.png'
import gt2three from '@assets/images/SEGWAY-VEHICULOS/SUPERSCOOTER-GT2/gt2-2.png'

export const products: Product[] = [
  {
    name: 'Ninebot ekickScooter ZING C20',
    alias: 'ekickscooter-c20',
    completeDesciprtion:
      '3 modos de conducción para adaptarse al nivel de cada niño, una estructura ligera, pero sobre todo, ¡hasta 20 km de pura diversión!',
    video: '/videos/C20.mp4',
    picture: c20Product.src,
    features: [
      '20km/h-Autonomia 20km',
      'Freno de mano con energía EBS',
      'Ligero y fácil de transportar',
      'Diseñado para adolescentes',
      '3 modos de velocidad',
      'Precio: $425',
    ],
    featuresImage: [
      {
        src: bateryC20.src,
        titleFeatures: 'Alto rendimiento de la batería',
        featuresDescription:
          'El paquete de baterías de iones de litio, el controlador y el BMS,Con un tiempo de carga de hasta 5 horas, ZING tiene una autonomía de hasta 20 km. ',
      },
      {
        src: tiresC20.src,
        titleFeatures: 'Neumáticos de caucho macizo ',
        featuresDescription:
          'Los neumáticos de goma de alta elasticidad están diseñados para ser resistentes al desgaste y la banda de rodadura para mejorar el agarre.',
      },
      {
        src: leverC20.src,
        titleFeatures: 'Palancas de goma termoplástica (TPR)',
        featuresDescription:
          'Las palancas están hechas de material TPR (caucho termoplástico) fáciles de limpiar y mantener, cómodos y antideslizantes. ',
      },
    ],
    logo: '',
    model: logoC20.src,
    price: 425,
    galleryImages: [
      {
        src: c20Uno.src,
        height: 200,
        width: 300,
      },
      {
        src: c20Dos.src,
        height: 200,
        width: 300,
      },
      {
        src: c20Tres.src,
        height: 200,
        width: 300,
      },
      {
        src: c20Cuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: c20Cinco.src,
        height: 200,
        width: 300,
      },
      {
        src: c20Seis.src,
        height: 200,
        width: 300,
      },
    ],
    images: [
      {
        src: zingc20.src,
        width: 185,
      },
      {
        src: zingc20two.src,
        width: 220,
      },
    ],
  },
  {
    name: 'Ninebot ekickScooter ZING C8',
    alias: 'zing-c8',
    completeDesciprtion:
      'Kickscooter eléctrico diseñado para la emoción para niños de 6 a 12 años con una altura de (115 cm –145 cm)',
    video: '/videos/C8.mp4',
    picture: c8Product.src,
    features: [
      '16km/h-Autonomia 10km',
      'Nuevo modo de crucero',
      'Marco de doble tubo',
      'Diseño de liberación rápida',
      '3 modos de velocidad',
      'Precio: $325 ',
    ],
    featuresImage: [
      {
        src: brakingC8.src,
        titleFeatures: 'Sistema de frenado mecánico',
        featuresDescription:
          'Utilizando un sistema de frenado mecánico duradero y confiable con sensor incorporado, el scooter puede cortar la energía inmediatamente cuando se detecta la acción de frenado. ',
      },
      {
        src: aspectC8.src,
        titleFeatures: 'Aspecto impresionante y ligero',
        featuresDescription:
          'Carrocería ligera, combinaciones de colores moderna y un diseño dinámico. los niños de 6 a 12 años con una altura de entre 115-145 cm pueden montar la C8, (resistencia al agua).',
      },
      {
        src: structureC8.src,
        titleFeatures: 'Una estructura triangular y estable',
        featuresDescription:
          'Hecho de acero de alta resistencia, el marco es estable y duradero con una carga estática de hasta 661, 4 libras (300 kg). El cuadro ha superado una rigurosa prueba de durabilidad.',
      },
    ],
    logo: '',
    model: logoC8.src,
    price: 325,
    galleryImages: [
      {
        src: c8Uno.src,
        width: 300,
        height: 200,
      },
      {
        src: c8Dos.src,
        width: 300,
        height: 200,
      },
      {
        src: c8Tres.src,
        width: 300,
        height: 200,
      },
      {
        src: c8Cuatro.src,
        width: 300,
        height: 200,
      },
      {
        src: c8Cinco.src,
        width: 300,
        height: 200,
      },
      {
        src: c8Seis.src,
        width: 300,
        height: 200,
      },
    ],
    images: [
      {
        src: zingc8.src,
        width: 215,
      },
      {
        src: zingc8two.src,
        width: 225,
      },
    ],
  },
  {
    name: 'Segway SuperScooter GT1',
    alias: 'superscooter-gt1',
    completeDesciprtion:
      'El scooter eléctrico de largo alcance Segway SuperScooter GT1 Electric Scooter te lleva a donde quieras con estilo y más rápido que nunca.',
    video: '/videos/gt1.mp4',
    features: [
      'Luces direccionales',
      'Neumáticos sellables',
      'Batería alto rendimiento',
      'Suspensión trasera y delantera',
      'Motor de potencia de 3000 W',
      'Segway-Ninebot App',
      'Precio: $3.985',
    ],
    featuresImage: [
      {
        src: securityGt1.src,
        titleFeatures: 'Bateria',
        featuresDescription:
          'Segway diseñó una batería de alto rendimiento de 1008 Wh con un sistema de enfriamiento multicapa Heat Flux para equilibrar el calor.',
      },
      {
        src: bateryGt1.src,
        titleFeatures: 'Seguridad',
        featuresDescription:
          'Equipado con un faro LED de 900 lúmenes, luz diurna LED, luz de giro delantera y trasera y luces ambientales traseras. Los conductores pueden elegir entre 11 modos de iluminación. ',
      },
      {
        src: suspensionGt2.src,
        titleFeatures: 'Comodidda',
        featuresDescription:
          'La Serie GT está equipada con amortiguadores hidráulicos ajustables de amortiguación delantera y trasera de 15 niveles, que se pueden personalizar según el terreno. ',
      },
    ],
    logo: '',
    model: logoGta1.src,
    picture: gt1Product.src,
    price: 3985,
    galleryImages: [
      {
        src: gt1Siete.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Uno.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Dos.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Cuatro.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Cinco.src,
        width: 300,
        height: 200,
      },
      {
        src: gtTres.src,
        width: 300,
        height: 200,
      },
    ],
    images: [
      {
        src: gt2.src,
        width: 300,
      },
      {
        src: gt2two.src,
        width: 220,
      },
    ],
  },
  {
    name: 'Ninebot ekickScooter ZING E8',
    alias: 'zing-e8',
    completeDesciprtion:
      ' Ninebot eKickScooter ZING E8, con tecnología de Segway Colores vibrantes y divertidos en su exterior, seguridad y alta calidad en su interior.',
    video: '/videos/E8.mp4',
    colorsAvailable: [ProductsColors.Pink],
    picture: e8Product.src,
    features: [
      '14km/h-Autonomia 10km',
      'Equipado con un amortiguador delantero',
      'Ligero y plegable',
      'Altura de 10 cm (3,9 pulgadas)',
      '3 modos de velocidad',
      'Precio: $395',
    ],
    featuresImage: [
      {
        src: speedUpE8.src,
        titleFeatures: 'Aceleración sensible (Acelerador de pulgar)',
        featuresDescription:
          'El acelerador de pulgar tiene una resistencia y capacidad de respuesta moderadas, según el modo de conducción. Esto hace que el control de la velocidad de conducción sea cómodo para los usuarios',
      },
      {
        src: modesE8.src,
        titleFeatures: 'Fácil conmutador con un clic',
        featuresDescription:
          'El botón de energía también tiene la función de conmutar entre los tres modos de conducción: turbo, crucero y seguro*. Después de arrancar, el conductor solo tiene que hacer clic en el botón.',
      },
      {
        src: securityE8.src,
        titleFeatures: 'Conducir con seguridad con el Adhesivo',
        featuresDescription:
          'El adhesivo reflectante 3M está instalado sobre el guardabarros. Posee una elevada reflectancia, un amplio ángulo de reflexión y una fuerte adherencia, para proveer seguridad y protección.',
      },
    ],
    logo: '',
    price: 395,
    model: logoE8.src,
    galleryImages: [
      {
        src: e8Uno.src,
        height: 200,
        width: 300,
      },
      {
        src: e8Dos.src,
        height: 200,
        width: 300,
      },
      {
        src: e8Tres.src,
        height: 200,
        width: 300,
      },
      {
        src: e8Seis.src,
        height: 200,
        width: 300,
      },
      {
        src: e8cuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: e8cino.src,
        height: 200,
        width: 300,
      },
    ],
    images: [
      {
        src: zinge8three.src,
        width: 190,
      },
      {
        src: zinge8two.src,
        width: 190,
      },
    ],
  },
  {
    name: 'Ninebot ekickScooter ZING A6',
    alias: 'zing-a6',
    completeDesciprtion:
      'Segway-Ninebot A6. Una estructura ligera de un llamativo color verde, 3 modos de conducción para adaptarse al nivel de cada niño, pero sobre todo, ¡hasta 5 km de autonomía!',
    video: '/videos/A6.mp4',
    picture: a6Product.src,
    features: [
      'Diseñado para niños',
      'Ligero y fácil de montar/desmontar',
      '2 tipos diferentes de neumáticos',
      'Velocidad máxima de hasta 12km/h',
      'Precio: $210',
    ],
    featuresImage: [
      {
        src: bateryA6.src,
        titleFeatures: 'Diseño de batería compacta',
        featuresDescription:
          'Con una sola carga de aproximadamente 3 horas, el ZING A6 puede durar hasta 5 km. El ZING A6 contiene indicadores de batería, permitirán saber cuándo es el momento de recargar',
      },
      {
        src: tiresA6.src,
        titleFeatures: 'Neumáticos resistentes al desgaste',
        featuresDescription:
          'El patinete ZING A6 viene con 2 tipos diferentes de neumáticos: un neumático delantero de poliuretano de 5 pulgadas y un neumático trasero de goma sólida de 4 pulgadas. ',
      },
      {
        src: sensorA6.src,
        titleFeatures: 'Sensor de encendido/apagado',
        featuresDescription:
          'Segway-Ninebot A6 tiene un sensor incorporado en su chasis que tiene como función reconocer cuando un pie está encima del patinete.Cuanto detecta un pie en el patinete, se enciende',
      },
    ],
    logo: '',
    price: 210,
    model: logoA6.src,
    galleryImages: [
      {
        src: a6Uno.src,
        height: 200,
        width: 300,
      },
      {
        src: a6Dos.src,
        height: 200,
        width: 300,
      },
      {
        src: a6Tres.src,
        height: 200,
        width: 300,
      },
      {
        src: a6Cuatro.src,
        height: 200,
        width: 300,
      },
      {
        src: a6Cinco.src,
        height: 200,
        width: 300,
      },
      {
        src: a6Seis.src,
        height: 200,
        width: 300,
      },
    ],
    images: [
      {
        src: zinga6.src,
        width: 200,
      },
      {
        src: zinga6two.src,
        width: 150,
      },
    ],
  },
  {
    name: 'Segway SuperScooter GT2',
    alias: 'superscooter-gt2',
    completeDesciprtion:
      'Segway SuperScooter GT, Patinete eléctrico GT2 6000 W (Ver.GT1 3000W), 55.9 millas de largo alcance y 43.5 MPH, suspensión doble, neumáticos de 11 pulgadas.',
    video: '/videos/gt2.mp4',
    features: [
      '80km-90km Autonomia',
      'Segway-Ninebot App',
      'Neumáticos sellables',
      'Display fulldigital',
      'Modo Buster',
      'Motor de potencia de 6000 W',
      'Precio: $5.595',
    ],
    featuresImage: [
      {
        src: functionGt2.src,
        titleFeatures: 'Funcionalidad extraordinaria',
        featuresDescription:
          'Segway diseñó una batería de alto rendimiento de 1008 Wh con un sistema de enfriamiento multicapa Heat Flux para equilibrar el calor',
      },
      {
        src: engineGt2.src,
        titleFeatures: 'Nuevos GT Super Scooters',
        featuresDescription:
          'Motor de potencia de 3000 y 6000 W puede alcanzar una velocidad máxima de 37.3 mph y acelerar de 0 a 30 mph en 7.5 segundos alcance de hasta 43.5 millas carga máxima de 331 libras.',
      },
      {
        src: suspensionGt2.src,
        titleFeatures: 'Suspensión delantera de doble horquilla',
        featuresDescription:
          'Neumáticos sin cámara antipinchazos de 11 pulgadas proporcionan una capacidad de agarre definitiva en la carretera. El marco de aleación de aluminio ligero y de grado aeronáutico.',
      },
    ],
    logo: '',
    model: logoGta2.src,
    picture: gt2Product.src,
    price: 5595,
    galleryImages: [
      {
        src: gt1Uno.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Ocho.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Seis.src,
        width: 300,
        height: 200,
      },
      {
        src: gt2Siete.src,
        width: 300,
        height: 200,
      },
      {
        src: gt1Dos.src,
        width: 300,
        height: 200,
      },
      {
        src: gtTres.src,
        width: 300,
        height: 200,
      },
    ],
    images: [
      {
        src: gt2three.src,
        width: 200,
      },
      {
        src: gt2.src,
        width: 300,
      },
    ],
  },
]
