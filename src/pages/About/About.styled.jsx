import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Text = styled.p`
  margin: 0 auto;
  color: ${p => p.theme.colors.black};
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const Icon = styled.span`
  padding-right: ${p => p.theme.space[3]}px;
`;
