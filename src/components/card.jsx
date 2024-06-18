import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

const Card = ({ title, image, description, additionalInfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapseExample"
          aria-expanded={open}
          variant="outline-primary"
        >
          {open ? 'Cerrar' : 'Leer más'}
        </Button>
        <Collapse in={open}>
          <div className="mt-3">
            <p>{additionalInfo}</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Card;
