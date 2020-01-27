// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

import React from "react"
import { MainNavbar } from "../components/mainnavbar"
import { MainPageImages } from "../components/mainpageimages"
import { StyledMainContainer } from "../helpers/styledcomponents"
import { TotalResultsHeader } from "../components/totalresultsheader"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const ImageResults = state => {
  console.log(state);
  return (
    <StyledMainContainer container>
    <MainNavbar />
    <TotalResultsHeader
      keyword={state.location.state[1].search}
      totalResults={state.location.state[0].data.searchImagesByKeyword.total}
    />
    <MainPageImages
      images={state.location.state[0].data.searchImagesByKeyword.results}
    />
  </StyledMainContainer>
  )
  }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export default ImageResults

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //