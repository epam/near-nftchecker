import React from 'react';
import PropTypes from 'prop-types';
import ReactTextCollapse from 'react-text-collapse';

const CodePreview = ({ collapseOptions, value }) => {
  return (
    <>
      <ReactTextCollapse options={collapseOptions}>
        <textarea readOnly className='code-preview' value={value} />
      </ReactTextCollapse>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

        .code-preview {
          font-family: 'Source Code Pro', monospace;
          font-size: 12px;
          background: #424957;
          color: white;
          padding: 10px;
          width: 100%;
          height: 99%;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .code-preview::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

CodePreview.propTypes = {
  collapseOptions: PropTypes.object,
  value: PropTypes.string,
};

export default CodePreview;
