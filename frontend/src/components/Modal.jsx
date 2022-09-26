import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RunningForm from './RunningForm';
import BikingForm from './BikingForm';
import WeightsForm from './WeightsForm';
import { resetModal } from '../features/ui/modalSlice';

function Modal() {
  const { displayModal, modalContent } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  let extraClass = '';
  let modalType = null;

  switch (modalContent) {
    case 'run':
      modalType = <RunningForm />;
      break;
    case 'ride':
      modalType = <BikingForm />;
      break;
    case 'weight':
      modalType = <WeightsForm />;
      break;
    default:
      modalType = null;
  }

  if (displayModal) {
    extraClass = 'modal-open';
  } else {
    extraClass = '';
  }

  return (
    <>
      <div className={`modal modal-bottom sm:modal-middle ${extraClass}`}>
        <div className="modal-box">{modalType}</div>
      </div>
    </>
  );
}

export default Modal;
