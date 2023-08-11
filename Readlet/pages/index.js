import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookList from '../components/BookList';
import { getBooks } from '../api/books';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response);
    };

    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => {
    router.push(`/book/${bookId}`);
  };

  return (
    <div>
      <Header />
      <main>
        <BookList books={books} onBookClick={handleBookClick} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;