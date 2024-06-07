import styles from './PersonagensCards.module.css'
import joel from './joel.jpg'
import elie from './elie.jpg'
import tommy from './tommy.jpg'

function PersonagensCards() {
    const characters = [
      { src: joel, alt: 'Joel', text: 'Joel Miller' },
      { src: elie, alt: 'Ellie', text: 'Ellie Williams' },
      { src: tommy, alt: 'Tommy', text: 'Tommy Miller' },
      // Adicione outros personagens conforme necessário
    ];
  
    return (
      <>
        <h2 className={styles.texto}>Personagens</h2>
        <div className={styles.container}>
          {characters.map((character, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={character.src} className={styles.imgjoel} alt={character.alt} />
              <p className={styles.imageText}>{character.text}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default PersonagensCards;