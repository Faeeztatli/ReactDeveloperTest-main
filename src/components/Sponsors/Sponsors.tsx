import React, { FunctionComponent } from 'react';
import { H, HeadingColourVariants, HeadingAligmentVariants } from 'components/Heading';
import { Text, Image, RichText } from 'components/SitecoreReact';
import useSponsorsStyles, { SponsorsClasses } from "./SponsorsStyles";
import { Img } from 'components/Image';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap';

export interface ImageData
{
  src: string,
  title: string,
  height: string,
  width: string,
}

interface SponsorsStyles
{
  containermaxwidth: string,
  containerborder : boolean,
}

export interface SponsorsProps {
  Imagelistdata : ImageData[],
  ComponentStyle? : SponsorsStyles
}

export const Sponsors: FunctionComponent<SponsorsProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({ 
  Imagelistdata, ComponentStyle
}) => {
  const useStyles: SponsorsClasses = useSponsorsStyles({ComponentStyle});


  const renderImageList = () =>
  {

      return Imagelistdata.map((imgdata,index) => {
        return(
          <Col md={4} key={index}>
      <Img
            src={imgdata.src}
            height={imgdata.height}
            width={imgdata.width}
            title={imgdata.title}
            loader={<div>Loading...</div>}
            unloader={<div>Image failed to load</div>}
            className="img-thumbnail border-0"
          /> 
      </Col>
      )})
  } 

  return (   
    <Container  className={useStyles.sponsors + ' ' + ComponentStyle.containerborder ? 'border' : 'border-0'} >         
       <Row>
          {renderImageList()}
        </Row>
    </Container>
  
  )
}