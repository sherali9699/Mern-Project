import React, { useState } from 'react';

function Tab({ title, content, isVisible, toggleContent }) {
    return (
      <div className="academic-common">
        <div className="tab-header">
          <h3>{title}</h3>
          <span onClick={toggleContent} id="spec">
            {isVisible ? '-' : '+'}
          </span>
        </div>
        <p id="tab" className={isVisible ? 'show' : 'hide'}>
          {content}
        </p>
      </div>
    );
  }

export default Tab;