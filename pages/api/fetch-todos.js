export default async () =>
  await (await fetch("https://jsonplaceholder.typicode.com/todos"))?.json();
