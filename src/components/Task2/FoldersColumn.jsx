import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

function FoldersColumn({ folders, selectedFolder, onFolderClick, isOpen }) {
  const [openFolders, setOpenFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderClick = (folder) => {
    if (folder.subfolders.length > 0) {
      if (openFolders.includes(folder)) {
        setOpenFolders(openFolders.filter((f) => f !== folder));
        setCurrentFolder(null);
      } else {
        setOpenFolders([folder]);
        setCurrentFolder(folder);
      }
    } else {
      setCurrentFolder(folder);
    }
    onFolderClick(folder);
  };

  return (
    <div className="column">
      {folders.map((folder) => (
        <div
          className={`folder ${openFolders.includes(folder) ? 'open' : ''}`}
          key={folder.name}
          onClick={() => handleFolderClick(folder)}
        >
          {folder.subfolders.length > 0 ? (
            <div className="arrow-container">
              {openFolders.includes(folder) ? (
                <FaFolderOpen className="folder-icon" />
              ) : (
                <FaFolder className="folder-icon" />
              )}
            </div>
          ) : (
            <div className="arrow-container">
              <FaFolder className="folder-icon" />
            </div>
          )}
          <span>{folder.name}</span>
          {folder.subfolders.length > 0 && (
            <div className={openFolders.includes(folder) ? 'arrow-down' : 'arrow-right'}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FoldersColumn;
