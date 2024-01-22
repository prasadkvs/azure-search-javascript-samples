import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import styled from "@emotion/styled";

const fontLarge = 20;
const fontMedium = 14;

const StyledCard = styled(Card)`
  // Uncomment to debug
  // border: 1px solid red;

  // Space between tabs and the main body of the page
  margin: 1em auto;

  // center the container on the tab body
  display: flex; 
  justify-content: center;
`;

const StyledCardContent = styled(CardContent)`
`;

const StyledTypographyTitle = styled(Typography)`
  font-size: ${fontLarge}px;
  font-weight: bold;

  // Text color is black with 60% opacity
  color: #000;
  opacity: 0.6;

  // Space below text
  margin-bottom: 0.35em;
`;

const StyledCardMedia = styled(CardMedia)`
  // Size of the book cover
  height: 180px;
  width: 120px;

  // Space below image
  margin-bottom: 0.6em;
`;

const StyledDescriptiveText = styled(Typography)`
  font-size: ${fontMedium}px;

  // Text color is black with 60% opacity
  color: #000;
  opacity: 0.6;

  // Space below image
  margin-bottom: 0.36em;
`;

export default function BookCardDetail({ document }) {
  return (
    <StyledCard className="bookdetail-parent">
      <StyledCardContent className="bookdetail-child" align="center">
        <StyledTypographyTitle>{document.escbase_title}</StyledTypographyTitle>
        <StyledCardMedia
          image={logo192.png}
          title={document.escbase_title}
          alt={document.escabase_title}
        />
        <StyledDescriptiveText>
          {document.ESC_body}
          {document.ESC_AHTOPICS?.join("; ")} - {document.ESC_AHCONTENTTYPE}
        </StyledDescriptiveText>
        <StyledDescriptiveText>URL {document.escbase_url}</StyledDescriptiveText>
        <Rating
          value={parseInt(document.escbase_size)}
          precision={0.1}
          readOnly
        ></Rating>
        <StyledDescriptiveText>
          {document.escbase_size} Size
        </StyledDescriptiveText>
      </StyledCardContent>
    </StyledCard>
  );
}
