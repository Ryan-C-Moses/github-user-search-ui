import UI from "./layouts/UI_Wrapper/UI";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  return (
    <>
      <UI>
        <Header />
        <main>
          <section>
            <SearchBar />
            <ProfileCard />
          </section>
        </main> 
      </UI>
    </>
  );
};

export default App;
