import React from 'react';
import Card from '../components/card';
import franciaAustria from '../assets/francia.jpg';
import lunin from '../assets/lunin.jpg';
import mbappe from '../assets/mbappe.jpg';

const CardList = () => {
  // Datos simulados
  const cardsData = [
    {
      title: 'Francia resiste ante Austria y termina festejando un triunfo gracias a un autogol de Wöber',
      image: franciaAustria,
      description: 'El equipo francés hizo su estreno en la Eurocopa con una victoria por la mínima ante Austria (1-0). El único gol lo marcó el defensor Maximilian Wöber, en contra.',
      additionalInfo: 'Tras una previa sacudida por el posicionamiento político de Kylian Mbappé, Francia salvó su debut en la Eurocopa con un sufrido triunfo 1-0 ante Austria, este lunes en Düsseldorf, en un partido en el que el capitán de los "Bleus" se retiró tras un fuerte golpe en la nariz.Favorita número 1, Francia evidenció falta de rodaje y salvó la noche gracias a la cabeza del defensa austriaco Maximilian Wober, que desvió a gol en propia puerta el centro de Mbappé (38).'
    },
    {
      title: '“Me disculpé ante mi equipo”, dice Lunin tras sus errores ante Rumania',
      image: lunin,
      description: 'El portero ucraniano no ocultó su decepción por las equivocaciones que cometió en la caída de su equipo ante Rumania, en la primer a jornada de la Eurocopa.',
      additionalInfo: 'Ucrania perdió ante Rumania. “Me disculpé ante mi equipo”, reconoció el portero ucraniano Andriy Lunin, que cometió un error en la salida de balón que provocó la apertura en el marcador de Rumanía (3-0), este lunes en Múnich en partido de la Eurocopa. No fue el día del arquero de 25 años, que a la media hora de juego dio un mal pase a un rival, en una jugada que acabó con un derechazo a la escuadra de Nicilae Stanciu para abrir el marcador.'
    },
    {
      title: 'Mbappé no será operado tras sufrir fractura de nariz, afirma el diario francés L Équipe',
      image: mbappe,
      description: 'Según el diario deportivo más importante de Francia, el delantero no será operado de la nariz y jugará los partidos que restan de la Eurocopa con una máscara.',
      additionalInfo: 'El francés Kylian Mbappé sufre una lesión en la nariz como consecuencia del golpe sufrido en un choque fortuito con Danso en el partido que enfrentó a Austria contra Francia (0-1) en el debut de ambas selecciones en el grupo D de la Eurocopa, pero no será operado de momento, decisión tomada después de haber sido examinado en el Hospital Universitario de Dusseldorf, informa el periódico L’Équipe. Mbappé fue sustituido en el minuto 90 del partido a causa de una brecha y un golpe en la nariz sufrido en un choque fortuito con Danso y tomó camino del vestuario tapándose la hemorragia.'
    }
  ];

  return (
    <div className="d-flex flex-wrap gap-3">
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          image={card.image} 
          description={card.description} 
          additionalInfo={card.additionalInfo}
        />
      ))}
    </div>
  );
};

export default CardList;
