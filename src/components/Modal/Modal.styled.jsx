import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  width: 450px;
  height: 200px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
`;
