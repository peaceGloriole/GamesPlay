import Catalog from "./components/catalog/Catalog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";
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
                <Create />
                <Edit />
                <Details />
                <Catalog />
            </main>
        </div>
    );
}

export default App;
