import { useForm } from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";

import { useNavigate } from "react-router-dom";

const initialValues = {
    title: ``,
    category: ``,
    maxLevel: 1,
    imageUrl: ``,
    summary: ``,
};

export default function CreateGame() {
    const navigate = useNavigate();
    const createGame = useCreateGame();

    const createHandler = async (data) => {
        try {
            const { _id: gameId } = await createGame(data);

            navigate(`/games/${gameId}/details`);
        } catch (error) {
            console.log(error);
        }

    };

    const {
        state,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={state.title} onChange={changeHandler} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={state.category} onChange={changeHandler} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={state.maxLevel} onChange={changeHandler} min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={state.imageUrl} onChange={changeHandler} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={state.summary} onChange={changeHandler} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}