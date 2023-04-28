import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Content from '../components/home/content';
import Section from '../components/home/section';
import Block from '../components/home/block';
import {useState, useEffect} from 'react';
import Load from '../components/home/load';

export default function Home({ categories: serverCategories }) {

  const [categories, setCategories] = useState(serverCategories);
    
  useEffect(() => {
      async function load() {
          const response = await fetch(`http://localhost:8000/api/vacancy/category`);
          const data = await response.json();
          setCategories(data);   
      }

      if (!serverCategories) {
          load();
      }
  }, [])

  if (!categories) {
    return <><Load /></>
  }

  let countElementsArr = categories.length;

  return (
    <>
      <Head>
        <title>Your Job || Home</title>
      </Head>
      <Content />
      <Section />
      <section>
        <div className={styles.job_category}>
          <div className={styles.section_title}>
            <span className={styles.section_span}>Job Category</span>
            <h2 className={styles.h2}>Choose Your Desire Category</h2>
            <p className={styles.category_p}>
              There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <p>Total categories: { countElementsArr }</p>
          </div>
          <div className={styles.category_head}>
            <div className={styles.category_wrapper}>  
              {categories.map((category) => (
                <div key={category.id} className={styles.category_div}>
                  <Link href={`/vacancy/category/${category.id}`} key={category.id} className={`${styles.single_cat} ${styles.a_cat}`}>
                    <div>
                        <h3>{ category.categories_profession }</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Block />
    </>  
  );
}

/*Home.getInitialProps = async({ query, req }) => {

  if (!req) {
      return {categories: null}
  }

  const response = await fetch(`http://localhost:8000/api/vacancy/category`);
  const categories = await response.json();

  return {
    categories
  }
}*/