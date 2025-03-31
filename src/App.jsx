import { useState } from "react";
import PostForm from "./components/PostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostForm />
    </>
  );
}

export default App;
