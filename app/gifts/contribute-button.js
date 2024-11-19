'use client'

import { Button } from '../../components/button'

export const ContributeButton = ({}) => {
  return (
    <Button
      text="I'd like to contribute"
      onClick={() => window.open('https://app.collectionpot.com/pot/robyn-and-alex', '_blank')}
    />
  )
}
