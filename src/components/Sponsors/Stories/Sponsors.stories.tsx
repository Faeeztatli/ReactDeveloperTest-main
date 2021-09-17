import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import { Sponsors } from '../';
import Container from '@material-ui/core/Container';

import { FeatureCategory } from '../../';
import { ImageData } from '../Sponsors';
import dummydata from "../assets/Json/data.json";


const StorySubject = "Sponsors";
const StoryKind = "Default";

// Knob Variables
const contentGroupId = "Content";

// Sponsors Default
storiesOf(`${FeatureCategory}/${StorySubject}/${StoryKind}`, module)
  .addParameters({
    component: Sponsors,
    subcomponents: {
    },
  })
  .addDecorator(withKnobs({
    escapeHTML: false,
  }))
  .add(
    'Basic',
    () => {
            
      return (
        <Container>
          <Sponsors Imagelistdata={dummydata.ImageList} ComponentStyle ={dummydata.ComponentStyle} />
        </Container>
      );
    }
  )
