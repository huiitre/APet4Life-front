// import "./style.scss";

//* import react redux
import { useSelector } from "react-redux";
import { Button, Modal } from 'semantic-ui-react';


const ModalSuccess = ({ closeModal, modalText }) => {
  const modalSuccess = useSelector((state) => state.user.modalSuccess);
  
  return (
    <div className="">
      <Modal
        centered={false}
        open={modalSuccess}
      >
        <Modal.Header>Merci !</Modal.Header>
        <Modal.Content>
          <Modal.Description>{modalText}</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ModalSuccess;
