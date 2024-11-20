import HOC from "./HOC";
function Card(x) {
  console.log(x.users[0].ename);
  return (
    <>
      <h1>I am card Component {x.users[0].ename}</h1>
    </>
  );
}
export default HOC(Card);
