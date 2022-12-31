import styled, { css } from 'styled-components'

import { Status } from '.'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 1.2rem 0;
`

interface StatusBallProps {
  status: Status
}

type statusColors = {
  [K in Status]: string
}

export const StatusBall = styled.div<StatusBallProps>`
  ${({ theme, status }) => {
    const statusColors: statusColors = {
      'in-progress': theme.palette.orange[200],
      'interrupted': theme.palette.red[500],
      'finished': theme.palette.green[200],
    }

    const currentStatusColor = statusColors[status]

    return css`
      background-color: ${currentStatusColor};
    `
  }}

  width: 8px;
  height: 8px;
  margin-right: 8px;
  margin-bottom: 2px;
  border-radius: 50%;
`
