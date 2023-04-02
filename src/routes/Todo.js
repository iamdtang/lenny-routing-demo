import { useLoaderData } from "react-router-dom";

export default function Todo() {
  const todo = useLoaderData();

  return (
    <div>
      <h1>Todo details page</h1>
      <div>Title: {todo.title}</div>
      <div>Completed? {todo.completed}</div>
    </div>
  );
}
