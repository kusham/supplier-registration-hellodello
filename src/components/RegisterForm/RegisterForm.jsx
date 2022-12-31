import React from 'react';
import { Modal } from '@mantine/core';

const RegisterForm = ({openRegistration, setOpenRegistration}) => {
    
  return (
    
    <Modal
    opened={openRegistration}
    onClose={() => setOpenRegistration(false)}
    transition="scale"
    transitionDuration={1600}
    transitionTimingFunction="ease"
    title="Supplier Registration !"
    fullScreen
  >
    {/* Modal content */}
  </Modal>
        
  )
}

export default RegisterForm

