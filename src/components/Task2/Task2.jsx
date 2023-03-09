import React, { useState } from 'react';
import './Task2.css';
import FoldersColumn from './FoldersColumn';
import FilesColumn from './FilesColumn';

function App() {
  const [parentFolder, setParentFolder] = useState(null);
  const [childFolder, setChildFolder] = useState(null);
  const [grandchildFolder, setGrandchildFolder] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleParentClick = (folder) => {
    if (selectedFolder === folder) {
      setSelectedFolder(null);
      setParentFolder(null);
      setChildFolder(null);
      setGrandchildFolder(null);
    } else {
      setSelectedFolder(folder);
      setParentFolder(folder);
      setChildFolder(null);
      setGrandchildFolder(null);
    }
  };

  const handleChildClick = (folder) => {
    if (selectedFolder === folder) {
      setSelectedFolder(parentFolder);
      setChildFolder(null);
      setGrandchildFolder(null);
    } else {
      setSelectedFolder(folder);
      setChildFolder(folder);
      setGrandchildFolder(null);
    }
  };

  const handleGrandchildClick = (folder) => {
    if (selectedFolder === folder) {
      setSelectedFolder(childFolder);
      setGrandchildFolder(null);
    } else {
      setSelectedFolder(folder);
      setGrandchildFolder(folder);
    }
    // setSelectedFolder(folder);
    // setGrandchildFolder(folder);
  };

  const resetFolders = () => {
    setSelectedFolder(null);
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
          selectedFolder={selectedFolder}
        />
        {parentFolder && (
          <FoldersColumn
            folders={parentFolder.subfolders}
            onFolderClick={handleChildClick}
            selectedFolder={selectedFolder}
          />
        )}
        {childFolder && (
          <FoldersColumn
            folders={childFolder.subfolders}
            onFolderClick={handleGrandchildClick}
            selectedFolder={selectedFolder}
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
  {
    name: 'Folder 3',
    subfolders: [
      {
        name: 'Folder 3.1',
        subfolders: [
          {
            name: 'Folder 3.1.1',
            subfolders: [
              {
                name: 'Folder 3.1.1',
                subfolders: [],
                files: ['File 3.1.1.1']
              }
            ],
            files: ['File 3.1.1.1']
          },
          {
            name: 'Folder 3.1.2',
            subfolders: [
              {
                name: 'Folder 3.1.1',
                subfolders: [],
                files: ['File 3.1.2.1']
              }
            ],
            files: ['File 3.1.2.1']
          }
        ],
        files: []
      },
      {
        name: 'Folder 3.2',
        subfolders: [
          {
            name: 'Folder 3.2.1',
            subfolders: [
              {
                name: 'Folder 3.2.1',
                subfolders: [
              {
                name: 'Folder 3.2.1.1',
                subfolders: [],
                files: ['File 3.2.1.1']
              }
            ],
            files: ['File 3.2.1.1']
              }
            ],
            files: []
          }
        ],
        files: ['File 3.2.1']
      }
    ],
    files: ['File 3.1', 'File 3.2']
  },
];

export default App;