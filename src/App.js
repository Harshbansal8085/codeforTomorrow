import React,{useState} from "react";
import img from "./image.png";
import "./App.css";
const intialposts= [
  {
    id:1,
    title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    image:img,
  },
  
  {
    id:2,
    title:"qui est esse",
    body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    image:img,
  },
  {
    id:3,
    title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    image:img,
  }
];
function App() {
  const [posts, setPosts] = useState(intialposts);

  const handleDelete=(id)=>{
    setPosts((prev) => prev.filter((posts) => posts.id !== id));  
  };
  return (
    <div className="App">
    <h1>Posts</h1>
    <div className="Posts-grid">
      {posts.map((posts) => (
        <div key={posts.id} className="post-card">
        <button 
        className="close-button"
        onClick={() => handleDelete(posts.id)}>Delete</button>
       <img src={posts.image} alt={posts.title} className="post-image"/>
        <h2 className="posts-title">{posts.title}</h2>
        <p className="posts-body">{posts.body}</p>
        </div>
      ))}
    </div>
    </div>
  );
  }
  
  export default App;
