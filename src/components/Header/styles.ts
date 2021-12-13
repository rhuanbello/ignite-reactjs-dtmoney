import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);

`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem; // 2rem top, 1rem left-right, 12rem bottom
  
  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    display: inline-block;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);

    }

  }

`