// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

import { Grid } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

const NoImagesGrid = styled(Grid)`
  height: 100%;
  width: 100%;
  background-color: #1e172f;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  padding-top: 4em;
`

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export const NoImages = ({ userImages }) =>
  // If there are no saved images for the user on their account, render this component
  userImages.length === 0 ? (
    <NoImagesGrid item>
      <h1>You currently have no images saved</h1>
      <p>
        Try searching for a photo or go{" "}
        <Link to="/main" style={{ color: "#fff" }}>
          home
        </Link>
        .
      </p>
    </NoImagesGrid>
  ) : null

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
