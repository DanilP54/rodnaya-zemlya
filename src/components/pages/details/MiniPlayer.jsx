import styled from "styled-components"
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const MiniPlayerStyled = styled.div`
    display: flex;
    padding-left: 10px;
    align-items: center;
    gap: 10px;
    width: 500px;
    margin-top: 10px; // Уменьшено с 100px до 10px
    
    & .play-button {
        border: 1px solid gray;
        
        /* height: ; */
        /* width: 20px; */
        
        & button {
            height: 100%;
            padding: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    & .name {
        display: flex;
        align-items: center;
        gap: 10px;

        & .number {
            color: gray;
        }

        & .title {
            color: #7e7ef7;
            font-size: 14px;
        }

        & .time {
            color: gray;
        }
    }
`

const MiniPlayerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px; // Добавлено небольшое расстояние между элементами
    margin-top: 80px; // Добавлен отступ сверху
`

const tracks = [
    { id: 1, title: "Bohemian Rhapsody", time: "5:55" },
    { id: 2, title: "Stairway to Heaven", time: "8:02" },
    { id: 3, title: "Imagine", time: "3:01" },
    { id: 4, title: "Like a Rolling Stone", time: "6:13" },
    { id: 5, title: "Smells Like Teen Spirit", time: "5:01" },
    { id: 6, title: "Hotel California", time: "6:30" },
    { id: 7, title: "Billie Jean", time: "4:54" },
    { id: 8, title: "Sweet Child o' Mine", time: "5:56" },
    { id: 9, title: "Purple Rain", time: "8:41" }
];

export function MiniPlayer() {
    const [playingId, setPlayingId] = useState(null);

    return (
        <MiniPlayerList>
            {tracks.map((track) => (
                <MiniPlayerStyled key={track.id}>
                    <div className={'play-button'}>
                        <button
                            onClick={() => setPlayingId(playingId === track.id ? null : track.id)}
                        >
                            {playingId === track.id ? <FaPause size={10} /> : <FaPlay size={10} />}
                        </button>
                    </div>
                    <div className="name">
                        <span className="number">{track.id}.</span>
                        <span className="title">{track.title}</span>
                        <span className="time">{track.time}</span>
                    </div>
                </MiniPlayerStyled>
            ))}
        </MiniPlayerList>
    )
}