import "./style.scss";
import { Button, Modal } from 'semantic-ui-react';

const ModalSuccess = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className="">
      <Modal
        centered={false}
        open={open}
        onClose={() => console.log('test1')}
        onOpen={() => console.log('test2')}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Merci !</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Ton inscription a bien été confirmé. En cliquant sur le bouton en bas, tu seras redigiré vers la page d'accueil, il te suffira ensuite de te connecter via le bouton "connexion" en haut à droite du site 😉.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleClick}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ModalSuccess;
