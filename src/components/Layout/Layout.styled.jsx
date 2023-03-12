import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  gap: ${p => p.theme.space[4]}px;
  max-width: 800px;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
`;
