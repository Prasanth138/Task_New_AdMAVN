import React, { useState } from 'react';
import './Task2.css';
import FoldersColumn from './FoldersColumn';
import FilesColumn from './FilesColumn';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

function App() {
  const [parentFolder, setParentFolder] = useState(null);
  const [childFolder, setChildFolder] = useState(null);
  const [grandchildFolder, setGrandchildFolder] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleParentClick = (folder) => {
    setParentFolder(folder);
    setChildFolder(null);
    setIsOpen(!isOpen);
    console.log(isOpen)
    setGrandchildFolder(null);
  };

  const handleChildClick = (folder) => {
    setChildFolder(folder);
    setGrandchildFolder(null);
  };

  const handleGrandchildClick = (folder) => {
    setGrandchildFolder(folder);
  };

  const resetFolders = () => {
    setParentFolder(null);
    setChildFolder(null);
    setGrandchildFolder(null);
  };

  return (
    <div className="App-2" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px' }} >
      <h1 className='h1'>Problem 2 - Nested List component</h1>
      <div className="folder-structure">
      <div style={{ display: 'flex', height: '400px' }}>
        <FoldersColumn
          folders={folders}
          onFolderClick={handleParentClick}
          isOpen={isOpen}
          arrowIcon={<FaArrowRight />}
          activeArrowIcon={<FaArrowDown />}
        />
        {parentFolder && (
          <FoldersColumn
            folders={parentFolder.subfolders}
            onFolderClick={handleChildClick}
            arrowIcon={<FaArrowRight />}
            activeArrowIcon={<FaArrowDown />}
          />
        )}
        {childFolder && (
          <FoldersColumn
            folders={childFolder.subfolders}
            onFolderClick={handleGrandchildClick}
            arrowIcon={<FaArrowRight />}
            activeArrowIcon={<FaArrowDown />}
          />
        )}
        {grandchildFolder && <FilesColumn files={grandchildFolder.files} />}
      </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {grandchildFolder && (
          <button onClick={resetFolders}>Back to Top Level</button>
        )}
      </div>
    </div>
  );
}

const folders = [
  {
    name: 'Folder 1',
    subfolders: [
      {
        name: 'Folder 1.1',
        subfolders: [
          { name: 'Folder 1.1.1', 
            subfolders: [
            { name: 'Folder 1.1.1', subfolders: [], files: ['File 1.1.1.1'] }
            ], 
            files: ['File 1.1.1.1'] 
          },
          { name: 'Folder 1.1.2', 
          subfolders: [
            { name: 'Folder 1.1.1', subfolders: [], files: ['File 1.1.2.1'] }
          ], files: ['File 1.1.2.1'] },
        ],
        files: [],
      },
      {
        name: 'Folder 1.2',
        subfolders: [{ name: 'Folder 1.2.1', 
                       subfolders: [
                            { name: 'Folder 1.2.1', 
                            subfolders: [
                            { name: 'Folder 1.2.1.1', subfolders: [], files: [] }
                            ], 
                            files: [] 
                            },
                                   ], 
                       files: ['File 1.2.1.1'] }],
        files: ['File 1.2.1'],
      },
    ],
    files: ['File 1.1', 'File 1.2'],
  },
  {
    name: 'Folder 2',
    subfolders: [{ name: 'Folder 2.1', 
                   subfolders: [{ name: 'Folder 2.1.1', 
                                  subfolders: [{ name: 'Folder 2.1.1.1', subfolders: [], files: [] }], 
                                  files: ["File 2.1.1.1"] }], 
                   files: [] }],
    files: ['File 2.1.1'],
  },
];

export default App;








