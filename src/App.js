import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <h2>
          {user.name} <br />
          {user.user_name}
        </h2>
        <ul>{list}</ul>
      </header>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function countButtonClick() {
    setCount(count + 1);
  }

  return <button onClick={countButtonClick}>Button Clicked {count}</button>;
}

const user = {
  name: "Majeed",
  user_name: "majeed@gmail.com",
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const list = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

export default App;
