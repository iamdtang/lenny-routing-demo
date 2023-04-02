import { Link, useLoaderData } from "react-router-dom";

export default function Index() {
  const todos = useLoaderData();

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
