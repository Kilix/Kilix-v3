import { createComponent } from 'react-fela'

import Card from './Card/index'
import Img from './Card/img'
import Text from './Card/text'
import Title from './Card/title'

export default ({ svg, title, text }) => (
  <Card>
    <Img {...{svg}}/>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Card>
)
