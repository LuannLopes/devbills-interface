import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'default' | 'outline';
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$variant === 'default' ? theme.colors.primary : 'transparent'};
  color: ${(props) =>
    props.$variant === 'default' ? theme.colors.dark : theme.colors.primary};
  padding: 0 0.75rem;
  border: ${(props) =>
    props.$variant === 'default'
      ? 'none'
      : `1px solid ${theme.colors.primary}`};
  transition: all 100ms;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
