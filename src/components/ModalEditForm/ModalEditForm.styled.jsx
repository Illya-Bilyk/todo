import styled from 'styled-components';

export const Title = styled.h4`
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: normal;
  padding: ${p => p.theme.space[3]}px;
  margin: 0 auto;
`;
