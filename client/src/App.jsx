import GameList from "./components/GameList/GameList";
import CreateGame from "./components/CreateGame/CreateGame";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import EditGame from "./components/EditGame/EditGame";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Home />
                <Login />
                <Register />
                <CreateGame />
                <EditGame />
                <DetailsGame />
                <GameList />
            </main>
        </div>
    );
}

export default App;
