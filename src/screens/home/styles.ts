import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  max-width: 22.5rem;
`;
