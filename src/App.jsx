import Ui from "./layouts/UI_Wrapper/UI";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  return (
    <Ui>
        <Header />
        <main>
          <section>
            <SearchBar />
            <ProfileCard />
          </section>
        </main> 
      </Ui>
  );
};

export default App;
