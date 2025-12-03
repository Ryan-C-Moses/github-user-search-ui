import UI from "./layouts/UI_Wrapper/UI";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <UI>
        <Header />

        <main>
          <section>
            <div className="search-bar-container">
              <img src="" alt="search icon" />
              <input type="text" placeholder="Search GitHub username..."/>
              <button>Search</button>
            </div>

            <div>
              UserCard
            </div>
          </section>
        </main>
      </UI>
    </>
  );
};

export default App;
