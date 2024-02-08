import { useState } from 'react';
import {
  FormWrapper,
  FormField,
  CloseIcon,
  Loupe,
  Close,
  LoupeIcon,
} from './SearchField.styled';

export const SearchField = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    handleSearch('');
  };

  return (
    <FormWrapper>
      <FormField
        name="search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
      />

      <Loupe type="submit" onClick={handleSearchSubmit}>
        <LoupeIcon />
      </Loupe>

      {searchQuery !== '' && (
        <Close type="submit" onClick={handleClearSearch}>
          <CloseIcon />
        </Close>
      )}
    </FormWrapper>
  );
};
