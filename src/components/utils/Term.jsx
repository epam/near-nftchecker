import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import IconInfoSvg from 'url:../../static/images/icon-info.svg';

const Term = ({ title, text, href }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const preventClickPropagation = (e) => {
    e.stopPropagation();
  };

  const showModal = (e) => {
    e.preventDefault();
    setIsModalShown(true);
  };

  const hideModal = () => {
    setIsModalShown(false);
  };

  return (
    <>
      {title}
      <div className='term-helper' onClick={preventClickPropagation}>
        <img src={IconInfoSvg} className='info' onClick={showModal} alt='icon info' />
        <Modal centered show={isModalShown} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {text}
            {href && (
              <a href={href} target='_blank' rel='noreferrer'>
                docs
              </a>
            )}
          </Modal.Body>
        </Modal>
        <style jsx global>{`
          .term-helper {
            display: inline-block;
            width: 14px;
            height: 14px;
          }

          .term-helper .info {
            vertical-align: text-bottom;
            margin-left: 5px;
            width: 16px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </>
  );
};

Term.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Term;
