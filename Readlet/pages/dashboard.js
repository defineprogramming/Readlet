import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getBooks } from '../api/books';
import { BookList } from '../components/BookList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PrimaryButton } from '@fluentui/react';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleUpload = () => {
    router.push('/upload');
  };

  return (
    <div>
      <Header />
      <div className="dashboard">
        <h1>Your Dashboard</h1>
        <PrimaryButton text="Upload a Book" onClick={handleUpload} />
        <BookList books={books} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;