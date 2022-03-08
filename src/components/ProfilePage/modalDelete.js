import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

const ModalDelete = ({ handleModalNO, handleModalYES}) => {

  const modalOpen = useSelector((state) => state.user.modalDeleteOpen);

  return (
    <Modal
      basic
      open={modalOpen}
      size='small'
    >
      <Header icon>
        <Icon name='archive' />
        Veux-tu vraiment supprimer ton compte ?
      </Header>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={handleModalNO}>
          <Icon name='remove' /> Non
        </Button>
        <Button color='green' inverted onClick={handleModalYES}>
          <Icon name='checkmark' /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDelete