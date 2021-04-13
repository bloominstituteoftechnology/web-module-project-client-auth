import { fetching } from "../api/fetching";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>Friends</h1>
        <p>This API holds a list of friends and lets you add, edit or remove friends from that list.</p>
        <p>All of the APIs endpoints with the exception of <code>/login</code> are considered protected and you must have an authentication token in the header or the API will send back a <code>401 error</code>.</p>
      </div>

      <div className="comment">
        <p>I don't undestand HTTP completely just yet, I know some theory but I haven't had a chance to practive it on my own so I'm going to take the time to write out an Axios wrapper that will pass a URL as an argument to process several interactions... GET, POST, PUT etc.</p>

        <h2> GET from pokeAPI</h2>
        <h3>response</h3>
        {fetching("https://pokeapi.co/api/v2")}
      </div>



    </div>
  );
}

export default App;
