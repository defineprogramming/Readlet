import React, { useEffect, useState } from 'react';
import { getReports, getModerationItems } from '../api';
import ReportList from './ReportList';
import ModerationQueue from './ModerationQueue';
import { Stack, Text } from '@fluentui/react';

const AdminPanel = () => {
  const [reports, setReports] = useState([]);
  const [moderationItems, setModerationItems] = useState([]);

  useEffect(() => {
    fetchReports();
    fetchModerationItems();
  }, []);

  const fetchReports = async () => {
    const data = await getReports();
    setReports(data);
  };

  const fetchModerationItems = async () => {
    const data = await getModerationItems();
    setModerationItems(data);
  };

  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <Text variant="xLarge">Admin Panel</Text>
      <ReportList reports={reports} />
      <ModerationQueue items={moderationItems} />
    </Stack>
  );
};

export default AdminPanel;