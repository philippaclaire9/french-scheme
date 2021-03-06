import React from 'react';

const Boards = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';
    console.log(props);
    e.target.appendChild(card);
    if (card_id === props.id) {
      props.addAnswers();
    }
    console.log(card_id, props.id);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default Boards;
