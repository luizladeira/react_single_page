import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpg';

export default function Banners(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá!
                </h1>
                <p className={styles.paragrafo}>
                    Me chamo Luiz Ladeira. 
                    <br/>
                    Sou graduado em Análise e Desenvolvimento de Sistemas, pós graduado em Engenharia de Software com ênfase em desenvolvimento em JAVA, Pós Graduado Docência do Ensino Superior na Anhembi Morumbi.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden="true" />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do desenvolvedor" />
            </div>
        </div>
    );
}