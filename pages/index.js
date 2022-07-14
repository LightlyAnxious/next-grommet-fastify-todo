import { useState } from "react";
import styled from "styled-components";

import fetchTodos from "./api/fetch-todos";

import { Box, Button, Grid, Heading, TextInput } from "grommet";
import Layout from "../components/layout";
import CardCmp from "../components/card";
import { Add } from "grommet-icons";

const LIMIT = 6;

const InputField = styled(Box)`
  position: relative;
`;

const AddButton = styled(Button).attrs({ icon: <Add /> })`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  transition: all 0.25s ease-in-out;

  svg,
  path {
    fill: currentColor;
    stroke: currentColor;
  }

  :hover,
  :focus {
    color: #7d4cdb;
  }
`;

const Cards = ({ list }) => {
  return (
    <Box margin={{ bottom: "large" }}>
      {list.map((m) => {
        const { id, userId, title, completed } = m;

        return (
          <CardCmp key={id} id={id}>
            {title}
          </CardCmp>
        );
      })}
    </Box>
  );
};

export default function Main({ todos, children }) {
  const [count, setCount] = useState(1);

  const todoChunk = [...(todos ?? [])].slice(0, count * LIMIT);

  const isShowMoreButton = count * LIMIT < todos.length;
  return (
    <>
      <InputField>
        <TextInput pad={{ left: "48px" }} />
        <AddButton secondary />
      </InputField>
      <Cards list={todoChunk} />
      {isShowMoreButton && (
        <Button
          primary
          label="Show more"
          onClick={() => {
            setCount((prev) => ++prev);
          }}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const todos = await fetchTodos();

  return {
    props: {
      todos,
    },
  };
}
