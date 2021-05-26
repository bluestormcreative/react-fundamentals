// Styling
// http://localhost:3000/isolated/exercise/05.js

import { italic } from 'chalk';
import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox =
  <div
    className="box box--small"
    style={{
      backgroundColor: 'lightblue',
      fontStyle: 'italic',
      marginTop: 20
    }}
  >
    small lightblue box
  </div>
;

const mediumBox =
  <div
    className="box box--medium"
    style={{
      backgroundColor: 'pink',
      fontStyle: 'italic',
      marginTop: 20
    }}
  >
    medium pink box
  </div>
;

const largeBox =
  <div
    className="box box--large"
    style={{
      backgroundColor: 'orange',
      fontStyle: 'italic',
      marginTop: 20
    }}
  >
    large orange box
  </div>
;

const Box = ({className, style, children}) => {
  const boxClasses = `box ${className}`;
  const boxStyles = {fontStyle: 'italic', ...style};
  return (
    <div
      className={boxClasses}
      style={boxStyles}
    >
      {children}
    </div>
  )
};

const BoxSize = ({size, className, style, children}) => {
  const boxSize = size ? `box--${size}` : '';
  const classProp = className ? className : '';
  const boxClasses = `box ${boxSize} ${classProp}`;
  const boxStyles = {fontStyle: 'italic', ...style};
  return (
    <div
      className={boxClasses}
      style={boxStyles}
    >
      {children}
    </div>
  )
};

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box
        className="box--small"
        style={{backgroundColor: 'lightblue', marginTop: 20}}
      >
        small lightblue box component
      </Box>
      <BoxSize size="large" style={{backgroundColor: 'lightblue', marginTop: 20}}>
        large lightblue box with size prop
      </BoxSize>
      <BoxSize style={{backgroundColor: 'orange', marginTop: 20, marginBottom: 20}}>
        sizeless orange box
      </BoxSize>
    </div>
  )
}

export default App
