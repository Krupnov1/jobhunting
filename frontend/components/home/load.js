import styles from '../../styles/Vacancy.module.css';
import Content from './content';
import Section from './section';
import Block from './block';

const Load = () => {
    return ( 
        <>
            <Content />
            <Section />
            <p className={`${styles.load_p} ${styles.container}`}>Loading...</p>
            <Block />
        </>
    )
}

export default Load;