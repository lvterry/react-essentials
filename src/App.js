import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function LoginLink() {
  return (<a href="#">Login</a>)
}

function WelcomeMessage(props) {
  return (<p>Welcome, {props.username}</p>)
}

function UserInfo(props) {
  return (
    <>
      {props.auth ? <WelcomeMessage username="Terry" /> : <LoginLink />}
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
      <UserInfo auth={false} />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}
