// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "styled-components"
import placeholder from "../images/placeholder.jpg"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export const StyledLazyLoadedImage = styled(LazyLoadImage)`
  border: 2px solid #fff;
  border-radius: 4%;
  margin: 0.4em;
  height: 330px;
  width: 330px;
`
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export const ImageComponent = ({ src }) => (
  <StyledLazyLoadedImage src={src} effect="blur" placeholderSrc={placeholder} />
)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
