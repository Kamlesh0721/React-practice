function HOC(WrapperComponent) {
  return () => {
    return <WrapperComponent users={[{ id: 1, ename: "test" }]} />;
  };
}
export default HOC;
