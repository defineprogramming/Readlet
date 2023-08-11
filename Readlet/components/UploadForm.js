import React, { useState } from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { uploadBook } from '../api/books';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('file', file);
    await uploadBook(formData);
  };

  return (
    <form id="uploadForm" onSubmit={handleUpload}>
      <TextField
        label="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="file"
        accept=".pdf,.epub"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <PrimaryButton type="submit">Upload</PrimaryButton>
    </form>
  );
};

export default UploadForm;