import React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@fluentui/react';

const cardTokens: ICardTokens = { childrenMargin: 12 };
const footerCardSectionStyles: ICardSectionStyles = { root: { borderTop: '1px solid #F3F2F1' } };
const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };

const BookCard = ({ book }) => {
  return (
    <Card tokens={cardTokens} style={{ width: '300px', margin: '10px' }}>
      <Card.Item>
        <img src={book.coverImage} alt={book.title} style={{ width: '100%' }} />
      </Card.Item>
      <Card.Section>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </Card.Section>
      <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
        <a href={book.downloadLink} download>Download</a>
        <a href={book.sourceLink} download>Source</a>
      </Card.Section>
    </Card>
  );
};

export default BookCard;