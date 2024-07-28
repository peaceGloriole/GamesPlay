import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreateGame from "./components/CreateGame/CreateGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameList from "./components/GameList/GameList";
import DetailsGame from "./components/DetailsGame/DetailsGame";
import Error from "./components/Error/Error";

import { AuthContext } from "./contexts/AuthContext";

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
        userId: authState._id,
    };
    

    return (
        <AuthContext.Provider value={contextData}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games" element={<GameList />} />
                        <Route path="/games/:gameId/details" element={<DetailsGame />} />
                        <Route path="/games/create" element={<CreateGame />} />
                        <Route path="/error" element={<Error />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;