import styles from './Comment.module.css';

import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";

export function Comment({ content }){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/25470180?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wesley Sartóri</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:33">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}