import React, { useState } from "react";

const PostForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("body", body);
    formData.append("public", isPublic);

    fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent and received:", data);
      })
      .catch((error) => {
        console.error("Error while requesting:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Insert title"
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Insert author"
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Insert body"
        />
      </div>
      <div>
        <label>Public:</label>
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </div>
      <button type="submit">Create post</button>
    </form>
  );
};

export default PostForm;
