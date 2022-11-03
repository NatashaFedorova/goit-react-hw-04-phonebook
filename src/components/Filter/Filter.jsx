import { Description, FilterInput } from './Filter.styled';

const FilterBlock = ({ onChange }) => {
  return (
    <>
      <Description>Find contacts by name</Description>
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        autoComplete="off"
      />
    </>
  );
};
export default FilterBlock;
