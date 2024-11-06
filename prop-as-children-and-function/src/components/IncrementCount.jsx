function IncrementCount(props) {
  return (
    <>
      {props.children}
      <button onClick={props.buttonFunction}>{props.text}</button>
    </>
  );
}
export default IncrementCount;
