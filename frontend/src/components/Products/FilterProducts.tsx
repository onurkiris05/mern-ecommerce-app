import styled from "styled-components";
import Products from "./Products";
import SelectForm from "../Forms/SelectForm";
import * as SelectItems from "../../data/selectItems";

const Container = styled.div`
  padding-block: 2rem;
`;

const Title = styled.h1`
  margin-left: 1rem;
`;

const FilterContainer = styled.div`
  margin-inline: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const FilterTitle = styled.h3``;

function FilterProducts() {
  function handleOnChange(value: string | number) {
    console.log(value);
  }

  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter:</FilterTitle>
          <SelectForm label="Color" menuItems={SelectItems.Color} OnChange={handleOnChange} />
          <SelectForm label="Size" menuItems={SelectItems.Size} OnChange={handleOnChange} />
        </Filter>
        <Filter>
          <FilterTitle>Sort: </FilterTitle>
          <SelectForm label="Sort" menuItems={SelectItems.Sort} OnChange={handleOnChange} />
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
}

export default FilterProducts;
