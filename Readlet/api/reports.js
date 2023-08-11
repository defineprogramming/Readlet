const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: true,
    unique: true
  },
  reportedBy: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  dateReported: {
    type: Date,
    default: Date.now
  }
});

const Report = mongoose.model('Report', ReportSchema);

async function getReports() {
  try {
    const reports = await Report.find();
    return reports;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  Report,
  getReports
};