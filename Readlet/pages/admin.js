import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminPanel from '../components/AdminPanel';
import ReportList from '../components/ReportList';
import ModerationQueue from '../components/ModerationQueue';
import { getReports, getModerationItems } from '../api/reports';
import { user } from '../api/users';

const Admin = () => {
  const router = useRouter();
  const [reports, setReports] = useState([]);
  const [moderationItems, setModerationItems] = useState([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    } else {
      getReports().then(setReports);
      getModerationItems().then(setModerationItems);
    }
  }, [user]);

  return (
    <div id="adminPanel">
      <AdminPanel user={user} />
      <ReportList reports={reports} />
      <ModerationQueue items={moderationItems} />
    </div>
  );
};

export default Admin;