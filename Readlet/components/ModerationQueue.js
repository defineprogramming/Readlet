import React, { useEffect, useState } from 'react';
import { getModerationItems } from '../api/moderation';
import { DetailsList } from '@fluentui/react';

const ModerationQueue = () => {
  const [moderationItems, setModerationItems] = useState([]);

  useEffect(() => {
    fetchModerationItems();
  }, []);

  const fetchModerationItems = async () => {
    const items = await getModerationItems();
    setModerationItems(items);
  };

  const columns = [
    { key: 'column1', name: 'Book Title', fieldName: 'title', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Author', fieldName: 'author', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'Uploader', fieldName: 'uploader', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column4', name: 'Upload Date', fieldName: 'uploadDate', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

  return (
    <div id="moderationQueue">
      <DetailsList
        items={moderationItems}
        columns={columns}
        setKey="set"
        layoutMode="fixedColumns"
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      />
    </div>
  );
};

export default ModerationQueue;