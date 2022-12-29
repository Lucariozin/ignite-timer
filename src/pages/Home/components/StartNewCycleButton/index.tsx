import { useState } from 'react'
import { Play } from 'phosphor-react'

import { Button } from '@components/Button'

import { DisabledMessage } from './styles'

interface StartNewCycleButton {
  isDisabled: boolean
}

export const StartNewCycleButton = ({ isDisabled = false }) => {
  const [disabledMessageIsVisible, setDisabledMessageIsVisible] = useState(false)

  const handleShowDisabledMessage = () => {
    if (!isDisabled) return

    setDisabledMessageIsVisible(true)
  }

  const handleHiddenDisabledMessage = () => {
    if (!isDisabled) return

    setDisabledMessageIsVisible(false)
  }

  return (
    <Button
      variant="green"
      type="submit"
      title="Começar um novo ciclo"
      isDisabled={isDisabled}
      onMouseEnter={handleShowDisabledMessage}
      onMouseLeave={handleHiddenDisabledMessage}
    >
      <Play size={28} /> Começar

      <DisabledMessage style={{ visibility: disabledMessageIsVisible ? 'visible' : 'hidden', opacity: disabledMessageIsVisible ? 1 : 0 }}>
        Preencha o nome e a duração antes de começar.
      </DisabledMessage>
    </Button>
  )
}
