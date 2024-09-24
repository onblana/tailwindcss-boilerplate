export default function App() {
  const printHello = () => console.log("hello");
  return (
    <>
      <div>App</div>
      <button onClick={printHello}>클릭</button>
    </>
  );
}
