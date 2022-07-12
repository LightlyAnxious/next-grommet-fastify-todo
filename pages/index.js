import styled from "styled-components";
import { Box, Card, Grid, Heading } from "grommet";
import Layout from "../components/layout";

import mockTodos from "../mocks";

export default function Dashboard({ children }) {
  return (
    <>
      <Heading
        level={2}
        fill
        margin={{ vertical: "medium" }}
        textAlign="center"
      >
        Dashboard
      </Heading>
      <Grid columns={["flex", "flex"]} gap="small">
        {mockTodos.map((m) => {
          const { id, userId, title, completed } = m;

          return (
            <Card key={id} pad="small">
              {title}
            </Card>
          );
        })}
      </Grid>
    </>
  );
}
