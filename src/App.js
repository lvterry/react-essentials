import React, { useState } from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function LoginLink({ onClick }) {
  return (<a href="#" onClick={ onClick }>Login</a>)
}

function WelcomeMessage(props) {
  return (<p>Welcome, {props.username}</p>)
}

function UserInfo() {
  const [auth, setAuth] = useState(false);
  return (
    <>
      {auth ? <WelcomeMessage username="Terry" /> : <LoginLink onClick={() => setAuth(true)} />}
    </>
  );
}

function Main(props) {
  return (
    <section>
      <p>We offer the best food.</p>
      <ul>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return <footer>Copyright {props.year}</footer>;
}

const dishes = ["pizza", "pasta", "sandwiches", "burger"];
const dishObjects = dishes.map((dish, i) => ({ id: i, name: dish }));

export default function App() {
  return (
    <>
      <Header name="Terry" />
      <UserInfo />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}
