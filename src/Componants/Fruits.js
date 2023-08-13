import { React, useState } from 'react';

export default function Fruits() {
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  let fruits = [
    { name: 'apple', price: 30 },
    { name: 'mango', price: 34 },
    { name: 'banana', price: 78 }
  ];
  const list = fruits.map((fruit) => (
    <li>
      {fruit.name} {fruit.price}
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
      <button onClick={func}>Click Me</button>
      <button onClick={click}>Button Clicked {count} times</button>
    </>
  );
}

function func() {
  alert('clicked button');
}
