import styled from "styled-components";
import Products from "./Products";
import SelectForm from "../Forms/SelectForm";
import { SelectChangeEvent } from "@mui/material/Select";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ConstantsApi from "../../api/constants";
import { Capitalize } from "../../utils";

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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [constants, setConstants] = useState<ConstantsApi.ConstantsProps>({
    categoryOptions: [],
    genderOptions: [],
    sizeOptions: [],
    sortOptions: [],
  });
  const gender = useLocation().pathname.split("/")[2];

  function handleFilters(e: SelectChangeEvent<string | number>) {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSort(e: SelectChangeEvent<string | number>) {
    setSort(e.target.value as string);
  }

  useEffect(() => {
    const fetchConstants = async () => {
      try {
        const data = await ConstantsApi.getConstants();
        setConstants(data);
      } catch (e) {
        console.error("Error loading constants: ", e);
      }
    };

    fetchConstants();
  }, []);

  return (
    <Container>
      <Title>{Capitalize(gender)}</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter:</FilterTitle>
          <SelectForm
            label="Category"
            name="category"
            menuItems={constants.categoryOptions}
            OnChange={handleFilters}
          />
          <SelectForm
            label="Size"
            name="size"
            menuItems={constants.sizeOptions}
            OnChange={handleFilters}
          />
        </Filter>
        <Filter>
          <FilterTitle>Sort: </FilterTitle>
          <SelectForm
            label="Sort"
            name="sort"
            menuItems={constants.sortOptions}
            OnChange={handleSort}
          />
        </Filter>
      </FilterContainer>
      <Products gender={gender} filters={filters} sort={sort} />
    </Container>
  );
}

export default FilterProducts;
