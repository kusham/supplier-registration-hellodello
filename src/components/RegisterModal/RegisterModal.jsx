import React from 'react';
import { Modal } from '@mantine/core';
import './RegisterFormStyle.css'
import RegisterForm from '../RegisterForm/RegisterForm';
import ModalTitle from './ModalTitle';

const RegisterModal = ({openRegistration, setOpenRegistration}) => {
    
  return (
    
    <Modal
    opened={openRegistration}
    onClose={() => setOpenRegistration(false)}
    transition="scale"
    transitionDuration={1600}
    transitionTimingFunction="ease"
    fullScreen
    title={<ModalTitle />}
  >
<div className=''>
  <RegisterForm />
</div>
  </Modal>
        
  )
}

export default RegisterModal

