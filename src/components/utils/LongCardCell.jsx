import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import RightArrowSvg from 'url:../../static/images/right-arrow.svg';

const LongCardCell = ({ title, text, href, className }) => {
  const plainCell = (
    <Row noGutters>
      <Col xs='12' className='long-card-cell-title align-self-center'>
        {title}
      </Col>
      <Col xs='12' md='12' className='ml-auto card-cell-text align-self-center'>
        {text}
      </Col>
    </Row>
  );

  return (
    <>
      {href ? (
        <a href={href}>
          <Row className={`long-card-cell href-cell ${className || ''}`} noGutters>
            <Col>{plainCell}</Col>
            <Col xs='auto' className='right-arrow'>
              <img src={RightArrowSvg} alt='right arrow' />
            </Col>
          </Row>
        </a>
      ) : (
        <Row className={`long-card-cell ${className || ''}`} noGutters>
          <Col>{plainCell}</Col>
        </Row>
      )}
      <style jsx global>{`
        .long-card-cell {
          padding: 8px;
          margin: 9px 0;
        }

        .href-cell:hover {
          background: #f9f9f9;
          border-radius: 8px;
        }

        .long-card-cell-title {
          color: #9b9b9b;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 5px;
        }

        .card-cell-text {
          font-weight: 900;
          font-size: 20px;
          color: #25272a;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-all;
        }

        .href-cell:hover .card-cell-text {
          color: #0072ce;
        }

        .href-cell:hover .right-arrow svg path {
          stroke: #0072ce;
        }

        .right-arrow {
          margin: auto 0;
        }

        .right-arrow svg path {
          stroke: #9da2a5;
        }

        @media (max-width: 744px) {
          .long-card-cell {
            width: 100%;
          }
        }

        @media (max-width: 415px) {
          .long-card-cell {
            width: 100%;
          }

          .card-cell-text {
            font-size: 25px;
          }
        }
      `}</style>
    </>
  );
};

LongCardCell.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  href: PropTypes.string,
  className: PropTypes.string,
};

export default LongCardCell;
