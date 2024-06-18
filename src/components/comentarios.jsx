import React, { useState } from 'react';

const Comentarios = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Comment:', comment);

    alert('Mensaje enviado');

    const newComment = {
      name: name,
      comment: comment
    };

    setCommentsList([...commentsList, newComment]);

    setName('');
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Comentario</label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>

      <div className="mt-4">
        <h2>Comentarios:</h2>
        <ul className="list-group">
          {commentsList.length === 0 ? (
            <li className="list-group-item">Acá se verán tus comentarios</li>
          ) : (
            commentsList.map((item, index) => (
              <li key={index} className="list-group-item">
                <strong>{item.name}:</strong> {item.comment}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Comentarios;
