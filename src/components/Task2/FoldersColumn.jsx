import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import './Task2.css';

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
    onFolderClick(folder); // call onFolderClick with clicked folder
  };

  return (
    <div className="column">
      {folders.map((folder) => (
        <div
          className={`folder ${openFolders.includes(folder) ? 'open' : ''} ${folder === selectedFolder ? 'selected' : ''}`}
          key={folder.name}
          onClick={() => handleFolderClick(folder)}
        >
          <div className="arrow-container">
            {folder.subfolders.length > 0 ? (
              openFolders.includes(folder) ? <FaFolderOpen className="folder-icon" /> : <FaFolder className="folder-icon" />
            ) : (
              <FaFolder className="folder-icon" />
            )}
          </div>
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
