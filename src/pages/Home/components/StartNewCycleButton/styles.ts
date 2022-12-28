import styled from 'styled-components'

export const DisabledMessage = styled.span`
  display: block;
  position: absolute;
  top: -3.8rem;
  padding: 0.8rem 1rem;

  font-size: 0.875rem;
  font-weight: 700;

  background-color: ${({ theme }) => theme.palette.gray[700]};
  border-radius: 5px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  transition: all .2s;

  &::after {
    content: '';
    display: block;
    height: 1rem;
    width: 1rem;

    position: absolute;
    left: 50%;
    bottom: -0.3rem;
    rotate: 45deg;

    background-color: ${({ theme }) => theme.palette.gray[700]};
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
  }
`
