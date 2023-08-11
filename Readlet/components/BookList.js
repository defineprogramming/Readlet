import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { getBooks } from '../api/books';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getBooks();
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, []);

  return (
    <div id="bookList" className="book-list">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;