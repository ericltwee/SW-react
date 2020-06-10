import React from 'react'
import { Button } from 'react-bootstrap';
import MonsModal from './MonsModal';

export default function MonsCard({ image, ...rest }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: none;
      outline: none;
    }
    `}
      </style>
      <Button
        variant="flat"
        className="monster-btn"
        onClick={() => setModalShow(true)}
      >
        <img className="monster-btn-img" src={image} alt="Avatar" />
      </Button>

      <MonsModal image={image} show={modalShow} onHide={() => setModalShow(false)} {...rest} />
    </>
  );
}