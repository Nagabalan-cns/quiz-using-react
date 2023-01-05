import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={50}
      outerSize={30}
      color='63, 9, 80'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}