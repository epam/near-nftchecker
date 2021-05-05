import React from 'react';
import { Button, FormControl, InputGroup, Row, FormLabel } from 'react-bootstrap';

const Search = () => {
  const handleSearch = async (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('form submitted');
  };

  return (
    <form onSubmit={handleSearch}>
      <Row noGutters>
        <FormLabel>NFT Contract Address *</FormLabel>
        <InputGroup className='search-box'>
          <FormControl
            placeholder='Enter NFT contract address (account ID)'
            aria-label='NFT Contract'
            aria-describedby='nft-contract'
            autoCorrect='off'
            autoCapitalize='none'
            className='search-field'
            required
          />
        </InputGroup>
      </Row>
      <Row noGutters>
        <FormLabel>Token ID</FormLabel>
        <InputGroup className='search-box'>
          <FormControl
            placeholder='Enter Token ID'
            aria-label='NFT Contract'
            aria-describedby='nft-contract'
            autoCorrect='off'
            autoCapitalize='none'
            className='search-field'
          />
        </InputGroup>
      </Row>
      <Row className='search-row'>
        <Button type='submit' variant='info' className='button-search'>
          Check it
        </Button>
      </Row>
      <style jsx global>{`
        .search-box {
          background: white;
          width: 740px;
          max-width: 100%;
          height: 49px;
          margin: auto;
          margin-bottom: 10px;
          border-radius: 8px;
        }

        .search-row {
          width: 740px;
          max-width: 100%;
          height: 49px;
          margin: auto;
          margin-top: 25px;
        }

        .search-box.compact {
          width: 520px;
          height: 40px;
        }

        .search-box.compact .search-box {
          width: inherit;
          height: inherit;
        }

        .search-box.compact .search-field {
          background-color: #fafafa;
          border-left: none;
          border-right: 2px solid #eaebeb;
          border-radius: 0 8px 8px 0;
          padding-left: 0;
        }

        .search-box.compact .input-group-prepend .input-group-text {
          border: 2px solid #eaebeb;
          border-radius: 8px 0 0 8px;
          border-right: none;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .search-box.compact .input-group::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          display: block;
          width: 1rem;
          height: calc(100% - 8px);
          margin: auto 4px auto auto;
          filter: blur(2px);
          background: #fafafa;
          opacity: 0.9;
        }

        .input-group {
          border-radius: 8px;
        }

        .input-group:focus-within {
          box-shadow: 0 0 0 4px #c2e4ff;
          border-radius: 10px;
          background: white;
        }

        .input-group:focus-within .search-field,
        .input-group:focus-within .input-group-prepend .input-group-text {
          border-color: #0072ce !important;
          background-color: white;
        }

        .search-box.compact .input-group:focus-within::after {
          background: white;
        }

        @media (max-width: 1000px) {
          .search-box,
          .search-box.compact {
            width: 100%;
          }
        }

        .input-group:hover {
          background: #f8f9fb;
          border-radius: 8px;
        }

        .input-group:hover .search-field,
        .input-group:hover .input-group-prepend .input-group-text {
          border-color: #cdcfd1;
        }

        .input-group-text {
          background: #fafafa;
          height: 100%;
        }

        .input-group-text::placeholder {
          color: #a1a1a9;
        }

        .search-field {
          background: #ffffff;
          border: 2px solid #eaebeb;
          border-radius: 8px;
          box-shadow: none !important;
          padding-right: 0.313rem;
        }

        .search-field::placeholder {
          color: #8d9396;
        }

        .search-field:disabled,
        .search-field[disabled] {
          background: #eaebeb;
        }

        .form-control:focus-within {
          box-shadow: none;
        }

        .button-search {
          position: relative;
          background: #0072ce;
          border: 2px solid #0072ce;
          border-radius: 8px;
          padding: 10px 30px;
        }

        .button-search:hover {
          background: #2b9af4;
          border-color: #0072ce;
        }

        .btn-info.button-search:not(:disabled):active,
        .btn-info.button-search:not(:disabled):active:focus,
        .btn-info.button-search:not(:disabled):focus {
          background-color: #2b9af4;
          border-color: #0072ce;
          box-shadow: none;
        }

        .form-control {
          height: 100% !important;
        }
      `}</style>
    </form>
  );
};

export default Search;
