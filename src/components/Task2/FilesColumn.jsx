import React from 'react';
import { FaFile } from 'react-icons/fa';

function FilesColumn({ files }) {
  return (
    <div className="column column-files">
      {files.map((file) => (
        <div className="file" key={file}>
          <div className="arrow-container">
            <FaFile className="file-icon" />
          </div>
          {file}
        </div>
      ))}
    </div>
  );
}

export default FilesColumn;
