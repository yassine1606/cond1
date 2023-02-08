import './App.css';

function App() {
  let first_name = "yashyyhsine";
  let affichage = first_name == "yassine"?<h1>Bienvenue {first_name}</h1> : <h1>Vous n'etes pas la bonne personne</h1>;


  return (
    <div className="App">
    {affichage}
    </div>
  );
}

export default App;
