import { useRouter } from "next/router";
import React from "react";
import CardCmp from "../../components/card";

import fetchTodos from "../api/fetch-todos";

const Todo = ({ title }) => {
  return <CardCmp>{title}</CardCmp>;
};

export default Todo;

export async function getStaticPaths() {
  const todos = await fetchTodos();

  const paths = todos.map((t) => ({
    params: { id: t.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  )?.json();

  return {
    props: {
      ...data,
    },
  };
}
