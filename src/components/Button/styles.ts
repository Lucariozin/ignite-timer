import styled, { css } from 'styled-components'

interface ContainerProps {
  isDisabled?: boolean
  variantColors: {
    main: string
    light: string
  }
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  height: 4rem;
  max-width: 40.5rem;
  width: 100%;

  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3.5rem;
  font-size: 1rem;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ variantColors }) => variantColors.main};
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  transition: filter .2s, background-color .2s;
  user-select: none;

  &:focus-visible {
    outline-offset: 4px;
    outline: 2px solid ${({ theme }) => theme.palette.green[400]};
  }

  ${({ isDisabled, variantColors }) => {
    if (isDisabled) {
      return css`
        filter: brightness(0.7);
        cursor: not-allowed;
      `
    }

    return css`
      &:hover {
        background-color: ${variantColors.light};
      }
    `
  }}
`
