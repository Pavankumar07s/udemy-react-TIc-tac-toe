import { useState } from "react";

export default function Player({ player, symbol }) {
    const [playerName, setPlayerName] = useState(player);
    const [isEditing, setIsEditing] = useState(false);

    const playerNameEdit = () => {
        setIsEditing((editing) => !editing);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    return (
        <>
            <li>
                <span className="player">
                    {isEditing ? (
                        <input
                            type="text"
                            required
                            value={playerName}
                            onChange={handleChange}
                        />
                    ) : (
                        <span className="player-name">{playerName}</span>
                    )}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={playerNameEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </li>
        </>
    );
}
