import "./App.css";
// import data from db.json

function App() {
 

  return (
    <div className="App" data-testid = 'app'>
      <button  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */}
    </div>
  );
}

export default App;
