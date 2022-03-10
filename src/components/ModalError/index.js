// import "./style.scss";

//* import react redux
import { useSelector } from "react-redux";
import { Button, Modal } from 'semantic-ui-react';


const ModalError = ({ closeModal, modalText, modalHeader }) => {
  const modalError = useSelector((state) => state.user.modalError);
  
  return (
    <div className="">
      <Modal
        centered={false}
        open={modalError}
      >
        <Modal.Header>{modalHeader}</Modal.Header>
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

export default ModalError;
