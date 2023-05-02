import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; //boostrap oggetti destrutturati
import SingleCard from './SingleCard';
// import data from '../data/fantasy.json'; non più necessario in quanto i dati adesso verrano reperiti dall'endpoint
import MyBadge from "./MyBadge";
import SearchBar from './SearchBar';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeContext } from '../Components/ThemeContext';




const Main = () => {
    const { theme } = useContext(ThemeContext);

    const [loading, setLoading] = useState(false) //gestisce il loading con il loader
    const [error, setError] = useState(null) //gestisce l'eventuale errore

    

    const [books, setBooks] = useState([])
    const [renderBooks, setRenderBooks] = useState([])
    //console.log(books);
    const getBooks = async () => {
        setLoading(true) //inizio caricamento il loader si deve vedere
        try {
            const data = await fetch("https://epibooks.onrender.com/") //endpoint
            const response = await data.json()
            setBooks(response)
            setRenderBooks(response)
            setLoading(false) //fine caricamento il loader non è più necessario
        } catch (error) {
            if (error) {
                setError('Si è verificato un errore nella ricezione dei dati');
            }
        }
    }

    useEffect(() => {
        getBooks();
    }, [])

    // non serve in quanto reperisco info da file json
    // const getProductData = async () => {
    //     try {
    //         const data = await fetch("https://dummyjson.com/products");
    //         return await data.json();
    //     } catch (error) {
    //         if (error) throw new Error("Errore di caricamento");
    //     }
    // }
    // useEffect(() => {
    //     getProductData().then(res => console.log(res));
    // }, []);

    return (
       
            <Container
            
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              padding: '2rem',
              textAlign: 'center',
            }} >
                {error && <h1>{error}</h1>}
                {loading && !error && <ClipLoader/>}
                {!loading && !error && //se loading è false mostra tutto questo
                    <div>
                        <SearchBar
                            books={books}
                            setBooks={setBooks}
                            setRenderBooks={setRenderBooks}
                        />
                        <MyBadge
                            str='NEW'
                            color='danger'
                        />
                        <Container className='my-5'>
                            <Row>
                                <Col sm={12} className='d-flex flex-wrap justify-content-center gap-3'>
                                    {renderBooks && renderBooks.map((item) => {
                                        return (
                                            <SingleCard
                                                key={item.asin} //valore univoco lo assegno alla chiave
                                                title={item.title}
                                                img={item.img} 
                                                asin={item.asin}
                                                price={item.price}
                                                category={item.category}
                                            />
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
       
    )
}

export default Main;

