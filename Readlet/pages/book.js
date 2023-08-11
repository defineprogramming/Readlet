import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PrimaryButton } from '@fluentui/react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import convertBook from '../utils/convert';

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [format, setFormat] = useState('source');

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    };

    fetchBook();
  }, [id]);

  const handleDownload = async () => {
    if (format === 'source') {
      window.location.href = book.sourceUrl;
    } else {
      const convertedBook = await convertBook(book, format);
      window.location.href = convertedBook.url;
    }
  };

  return (
    <div>
      {book && <BookCard book={book} />}
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="source">Source Format</option>
        <option value="pdf">PDF</option>
        <option value="epub">EPUB</option>
        <option value="mobi">MOBI</option>
      </select>
      <PrimaryButton onClick={handleDownload}>Download</PrimaryButton>
    </div>
  );
};

export default Book;