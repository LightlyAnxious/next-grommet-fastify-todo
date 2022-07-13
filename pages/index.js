import styled from "styled-components";
import { Box, Card, Grid, Heading, TextInput } from "grommet";
import Layout from "../components/layout";

import mockTodos from "../mocks";
import { Add } from "grommet-icons";

const Cards = ({ list }) => {
  return (
    <>
      {list.map((m) => {
        const { id, userId, title, completed } = m;

        return (
          <Card key={id} pad="small" height={{ min: "48px" }}>
            {title}
          </Card>
        );
      })}
    </>
  );
};

export default function Dashboard({ children }) {
  return (
    <>
      <Grid
        margin={{ vertical: "medium", horizontal: "auto" }}
        width={{ max: "600px" }}
      >
        <TextInput icon={<Add />} />
        <Cards list={mockTodos} />
      </Grid>
    </>
  );
}
