import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrimaryButton } from '@fluentui/react';
import { uploadBook } from '../api/books';
import UploadForm from '../components/UploadForm';

const UploadPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpload = async (bookData) => {
    setLoading(true);
    try {
      const response = await uploadBook(bookData);
      if (response.status === 200) {
        router.push('/');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload a Book</h1>
      <UploadForm onSubmit={handleUpload} />
      <PrimaryButton
        text="Upload"
        onClick={handleUpload}
        disabled={loading}
      />
    </div>
  );
};

export default UploadPage;