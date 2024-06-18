import React from 'react';

const programas = () => {
  const datos_programa = [
    { time: '09:30 AM', program: 'La Batidora' },
    { time: '10:30 AM', program: 'Los Simpsons' },
    { time: '12:30', program: 'El noticiero central' },
    { time: '02:00 PM', program: 'AL fondo hay sitio' },
    { time: '04:00 PM', program: 'Serie de drama' },
    { time: '06:00 PM', program: 'El noticiero noche' },
  ];

  return (
    <div className="container mt-4">
      <h1>Programacion del dia martes</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Programa</th>
          </tr>
        </thead>
        <tbody>
          {datos_programa.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default programas;
