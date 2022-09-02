import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Cristian
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition>
    Aguacate
  </Header>
)

export default AnimatedHeader
