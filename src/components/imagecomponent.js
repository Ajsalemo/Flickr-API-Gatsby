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
  border-radius: ${props => props.userprofile ? "50%" : "4%"};
  margin: 1em;
  height: ${props => props.userprofile ? null : "330px"};
  width: ${props => props.userprofile ? null : "330px"};
  margin-bottom: ${props => props.userprofile ? "2em" : null};
`
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export const ImageComponent = ({ src, userprofile, alt }) => (
  <StyledLazyLoadedImage src={src} effect="blur" placeholderSrc={placeholder} userprofile={userprofile} alt={alt} />
)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
