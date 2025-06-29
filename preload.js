const { contextBridge, ipcRenderer } = require('electron');

// Espone API sicure al renderer
contextBridge.exposeInMainWorld('electronAPI', {
  // Informazioni sistema
  platform: process.platform,
  versions: process.versions,
  
  // IPC Handlers - App Info
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  getUserDataPath: () => ipcRenderer.invoke('get-user-data-path'),
  getProjectsPath: () => ipcRenderer.invoke('get-projects-path'),
  
  // IPC Handlers - Dialogs
  showMessageBox: (options) => ipcRenderer.invoke('show-message-box', options),
  showOpenDialog: (options) => ipcRenderer.invoke('show-open-dialog', options),
  showSaveDialog: (options) => ipcRenderer.invoke('show-save-dialog', options),
  
  // IPC Handlers - File System
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, data) => ipcRenderer.invoke('write-file', filePath, data),
  fileExists: (filePath) => ipcRenderer.invoke('file-exists', filePath),
  createDirectory: (dirPath) => ipcRenderer.invoke('create-directory', dirPath),
  
  // IPC Handlers - Progetti
  saveProject: (projectData) => ipcRenderer.invoke('save-project', projectData),
  loadProject: (projectId) => ipcRenderer.invoke('load-project', projectId),
  listProjects: (userId) => ipcRenderer.invoke('list-projects', userId),
  deleteProject: (projectId) => ipcRenderer.invoke('delete-project', projectId),
  
  // IPC Handlers - AI Services
  aiAnalyzeText: (text) => ipcRenderer.invoke('ai-analyze-text', text),
  aiAnalyzeImage: (imagePath) => ipcRenderer.invoke('ai-analyze-image', imagePath),
  aiAnalyzeAudio: (audioPath) => ipcRenderer.invoke('ai-analyze-audio', audioPath),
  aiAnalyzeVideo: (videoPath) => ipcRenderer.invoke('ai-analyze-video', videoPath),
  
  // IPC Handlers - Database AI
  getAIDatabase: () => ipcRenderer.invoke('get-ai-database'),
  searchAIMedia: (query, type, filters) => ipcRenderer.invoke('search-ai-media', query, type, filters),
  
  // IPC Listeners - Menu Actions
  onMenuAction: (callback) => {
    ipcRenderer.on('menu-action', (event, action, data) => {
      callback(action, data);
    });
  },
  
  onShowWelcome: (callback) => {
    ipcRenderer.on('show-welcome', callback);
  },
  
  // Rimozione listeners (per cleanup)
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});

console.log('Preload script loaded successfully!');