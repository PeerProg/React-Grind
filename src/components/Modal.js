import { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  const handleClose = e => {
    if (
      modalRef.current &&
      buttonRef.current &&
      !modalRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      setShowModal(false);
    }
  };

  return (
    <PageContainer>
      {showModal && (
        <Overlay>
          <ModalWrapper ref={modalRef}>
            <CloseButton
              onClick={e => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              close
            </CloseButton>
          </ModalWrapper>
        </Overlay>
      )}
      <StyledButton ref={buttonRef} onClick={() => setShowModal(true)}>
        Click me
      </StyledButton>
    </PageContainer>
  );
};

export default Modal;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 250px;
  background-color: white;
  z-index: 1000;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: relative;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 140px;
  background-color: blue;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  border: none;
  cursor: pointer;
  ${({ plain }) =>
    plain &&
    css`
      background-color: red;
      color: black;
    `};
`;

const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
