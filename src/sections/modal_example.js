import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export const ModalExample = () => {
    
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modal body content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repudiandae, eum laborum laboriosam animi dignissimos praesentium autem quisquam nihil expedita amet est odio totam nulla in ipsa iusto quod id.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="gradient-green-cyan" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
  
}

export default ModalExample