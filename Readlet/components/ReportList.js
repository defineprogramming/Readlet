import React from 'react';
import { reports } from '../api/reports';
import { DetailsList } from '@fluentui/react';

const ReportList = () => {
  const [reportList, setReportList] = React.useState([]);

  React.useEffect(() => {
    getReports().then((reports) => {
      setReportList(reports);
    });
  }, []);

  const columns = [
    { key: 'column1', name: 'Report ID', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Reported By', fieldName: 'reportedBy', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'Report Reason', fieldName: 'reason', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column4', name: 'Report Date', fieldName: 'date', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

  return (
    <div id="reportList">
      <DetailsList
        items={reportList}
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

export default ReportList;