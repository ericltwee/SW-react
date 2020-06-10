import React from 'react'
import { Button } from 'react-bootstrap';
import MonsModal from './sketch';

export default function MonsCard({ Image }) {
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
        <img className="monster-btn-img" src={Image[0].url} alt="Avatar" />
      </Button>

      <MonsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}