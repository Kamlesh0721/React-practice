import HOC from "./HOC";
function Footer(x) {
  console.log(x.users[0].id);
  return (
    <>
      <h1>id</h1>
      {x.users[0].id}
    </>
  );
}
export default HOC(Footer);
