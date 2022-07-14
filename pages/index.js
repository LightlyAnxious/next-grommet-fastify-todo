import styled from "styled-components";
import { Box, Button, Card, Grid, Heading, TextInput } from "grommet";
import Layout from "../components/layout";

import mockTodos from "../mocks";
import { Add } from "grommet-icons";
import { useState } from "react";

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
          <Card key={id} pad="small" height={{ min: "48px" }}>
            {title}
          </Card>
        );
      })}
    </Box>
  );
};

export default function Dashboard({ todos, children }) {
  const [count, setCount] = useState(1);

  const todoChunk = [...(todos ?? [])].slice(0, count * LIMIT);

  const isShowMoreButton = count * LIMIT < todos.length;
  return (
    <>
      <Grid
        alignSelf="center"
        margin={{ vertical: "medium" }}
        width={{ max: "600px" }}
      >
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
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const todos = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  )?.json();

  return {
    props: {
      todos,
    },
  };
}
