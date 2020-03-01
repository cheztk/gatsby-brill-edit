import React from 'react'
import styled from 'styled-components'
import RichText from './richText'
import CallToActionsBlocks from './callToActionsBlocks'

const CallToActionGridWrapper = styled.section`
  max-width: 880px;
  margin: 0 auto;
`

const CallToActionsGrid = ({ title, callToActions }) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => {
        return (
          <CallToActionsBlocks
            title={callToAction.call_to_action_title}
            content={callToAction.content}
            buttonLabel={callToAction.button_label}
            buttonDestination={`/${callToAction.button_destination._meta.uid}`}
            featuredImage={callToAction.featured_image.url}
            key={i}
          />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionsGrid
