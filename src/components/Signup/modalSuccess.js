import "./style.scss";
import { Button, Modal } from 'semantic-ui-react';

const ModalSuccess = ({closeModal, modalSuccess}) => {
  return (
    <div className="">
      <Modal
        centered={false}
        open={modalSuccess}
      >
        <Modal.Header>Merci !</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Ton inscription a bien été confirmé. En cliquant sur le bouton en bas, tu seras redigiré vers la page d'accueil, il te suffira ensuite de te connecter via le bouton "connexion" en haut à droite du site 😉.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ModalSuccess;
