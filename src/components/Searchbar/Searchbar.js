import { Button, Input, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value: query } = event.target.elements.search;

    onSubmit(query);
    event.target.reset();
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input type="text" name="search" autoComplete="off" />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};
