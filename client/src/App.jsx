import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreateGame from "./components/CreateGame/CreateGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameList from "./components/GameList/GameList";
import DetailsGame from "./components/DetailsGame/DetailsGame";

function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/games/:gameId" element={<DetailsGame />} />
                    <Route path="/games/create" element={<CreateGame />} />

                </Routes>
            </main>
        </div>
    );
}

export default App;