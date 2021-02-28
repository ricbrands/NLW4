import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/ricbrands.png" alt="Ricardo Brandao" />
            <div>
                <strong>Ricardo Brandão</strong>                
                <p><img src="icons/level.svg" alt="Level"/>
                Level {level}
                </p>
            </div>
        </div>
    );
}