// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { FlexCenterGrid } from "../helpers/styledcomponents"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

export const PublicProfileStats = ({ userInfoStats }) => (
  <Grid item>
    <Typography
      style={{ color: "#fff" }}
      variant="subtitle2"
    >
      @{userInfoStats.username}
    </Typography>
    {userInfoStats.location !== null ? (
      <Typography style={{ color: "#fff" }} variant="subtitle2">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          style={{ marginRight: "0.7em" }}
        />
        {userInfoStats.location}
      </Typography>
    ) : null}
    {userInfoStats.instagram_username !== null ? (
      <Typography style={{ color: "#fff" }} variant="subtitle2">
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ marginRight: "0.7em", color: "#fccc63" }}
        />
        <a
          href={`https://www.instagram.com/${userInfoStats.instagram_username}`}
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          {userInfoStats.instagram_username}
        </a>
      </Typography>
    ) : null}
    {userInfoStats.twitter_username !== null ? (
      <Typography style={{ color: "#fff" }} variant="subtitle2">
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ marginRight: "0.7em", color: "#1DA1F2" }}
        />
        <a
          href={`https://www.twitter.com/${userInfoStats.instagram_username}`}
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          {userInfoStats.twitter_username}
        </a>
      </Typography>
    ) : null}
    <Typography style={{ color: "#fff" }} variant="subtitle2">
      <FontAwesomeIcon
        icon={faHeart}
        style={{ marginRight: "0.7em", color: "red" }}
      />
      {userInfoStats.total_likes}
    </Typography>
    <FlexCenterGrid item style={{ paddingTop: "2em", margin: "0 auto" }} variant="subtitle2" xs={4} sm={6} md={8} lg={10}>
      <Typography style={{ color: "#fff" }}>{userInfoStats.bio}</Typography>
    </FlexCenterGrid>
  </Grid>
)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
