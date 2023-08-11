const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const convertBook = async (sourcePath, targetFormat) => {
  const targetPath = path.join(
    path.dirname(sourcePath),
    `${path.basename(sourcePath, path.extname(sourcePath))}.${targetFormat}`
  );

  try {
    await exec(`ebook-convert ${sourcePath} ${targetPath}`);
    return targetPath;
  } catch (error) {
    throw new Error('CONVERSION_FAILURE');
  }
};

const deleteSourceFile = async (sourcePath) => {
  try {
    await fs.promises.unlink(sourcePath);
  } catch (error) {
    console.error(`Failed to delete source file: ${sourcePath}`);
  }
};

module.exports = {
  convertBook,
  deleteSourceFile,
};
