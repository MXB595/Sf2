import React, { useState, useEffect, useCallback } from 'react';
import { 
  Play, Pause, Square, Volume2, Mic, Video, Image, FileText,
  Brain, Zap, Settings, Palette, Upload, Download, Save,
  BarChart3, TrendingUp, Eye, Headphones, Film, Type,
  Monitor, Sun, Moon, Sparkles, Cpu, HardDrive,
  CheckCircle, AlertCircle, Info, Target, Coffee, Rocket,
  Plus, Minus, RotateCcw, X, Clock, Users, BookOpen,
  Scissors, Copy, SkipForward, SkipBack, VolumeX,
  Layers, Camera, Music, MessageSquare, FileVideo, 
  FilePlus, FolderOpen, Maximize2, RotateCw, Crop,
  Move, ZoomIn, ZoomOut, Split, Trash2, Edit3,
  Sliders, Filter, Wand2, Grid, AlignLeft, AlignCenter,
  Waves, Activity, Database, Search, Tag, Star, Archive, 
  ChevronRight, ArrowRight, Lightbulb, PenTool, Clapperboard, 
  Globe, Shield, Server, Wifi, WifiOff, Menu, LogOut, 
  FolderPlus, Home, PlayCircle, PlusCircle, Folder, User,
  ArrowLeft, ChevronDown, ChevronUp, MoreHorizontal,
  Lock, Unlock, EyeOff, Bold, Italic, Underline,
  AlignJustify, Quote, Link, ExternalLink, RefreshCw
} from 'lucide-react';

const SoftwareAudioVideoV2 = () => {
  // Stati principali dell'applicazione
  const [currentPage, setCurrentPage] = useState('auth');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState('idea');
  
  // Stati per la configurazione dell'app
  const [appConfig, setAppConfig] = useState({
    appName: 'Software Audio Video V.2',
    appIcon: '🎬',
    theme: 'dark',
    language: 'it',
    projectsFolder: 'C:\\SoftwareAV\\Projects',
    databaseFolder: 'C:\\SoftwareAV\\Database',
    exportFolder: 'C:\\SoftwareAV\\Exports',
    workflowLabels: {
      idea: 'Ideazione',
      script: 'Sceneggiatura',
      storyboard: 'Storyboard',
      timeline: 'Editing',
      export: 'Export'
    },
    workflowIcons: {
      idea: '💡',
      script: '📝',
      storyboard: '🎨',
      timeline: '🎬',
      export: '📤'
    }
  });

  // Sistema utenti
  const [users] = useState([
    { 
      id: 1, 
      username: 'admin', 
      password: 'admin123', 
      fullName: 'Administrator',
      role: 'admin',
      lastLogin: new Date().toISOString()
    },
    { 
      id: 2, 
      username: 'user', 
      password: 'user123', 
      fullName: 'Utente Demo',
      role: 'user',
      lastLogin: '2024-01-15T10:30:00Z'
    },
    { 
      id: 3, 
      username: 'demo', 
      password: 'demo', 
      fullName: 'Demo User',
      role: 'user',
      lastLogin: '2024-01-20T09:15:00Z'
    }
  ]);

  // Database AI locale
  const [localAIDatabase] = useState({
    videoClips: [
      { 
        id: 'v1', name: 'Corporate_Intro.mp4', duration: 15, 
        tags: ['business', 'corporate', 'intro'], mood: 'professional',
        quality: 'high', resolution: '4K', style: 'modern',
        description: 'Clean corporate introduction with city skyline',
        path: '/local/video/corporate_intro.mp4', type: 'video'
      },
      { 
        id: 'v2', name: 'Nature_Timelapse.mp4', duration: 30,
        tags: ['nature', 'timelapse', 'peaceful'], mood: 'calm',
        quality: 'high', resolution: '4K', style: 'cinematic',
        description: 'Beautiful nature timelapse with mountains',
        path: '/local/video/nature_timelapse.mp4', type: 'video'
      },
      { 
        id: 'v3', name: 'Tech_Animation.mp4', duration: 20,
        tags: ['technology', 'animation', 'modern'], mood: 'energetic',
        quality: 'high', resolution: '4K', style: 'animated',
        description: 'Sleek technology animation with circuits',
        path: '/local/video/tech_animation.mp4', type: 'video'
      },
      { 
        id: 'v4', name: 'Team_Meeting.mp4', duration: 25,
        tags: ['team', 'meeting', 'collaboration'], mood: 'positive',
        quality: 'high', resolution: '1080p', style: 'documentary',
        description: 'Dynamic team collaboration in modern office',
        path: '/local/video/team_meeting.mp4', type: 'video'
      },
      { 
        id: 'v5', name: 'Product_Demo.mp4', duration: 40,
        tags: ['product', 'demo', 'showcase'], mood: 'engaging',
        quality: 'high', resolution: '4K', style: 'modern',
        description: 'Professional product demonstration',
        path: '/local/video/product_demo.mp4', type: 'video'
      }
    ],
    audioClips: [
      { 
        id: 'a1', name: 'Corporate_Music.mp3', duration: 120,
        tags: ['corporate', 'upbeat', 'motivational'], mood: 'energetic',
        genre: 'corporate', tempo: 'medium', instrument: 'synth',
        description: 'Motivational corporate background music',
        path: '/local/audio/corporate_music.mp3', type: 'audio'
      },
      { 
        id: 'a2', name: 'Calm_Ambient.wav', duration: 180,
        tags: ['ambient', 'calm', 'relaxing'], mood: 'peaceful',
        genre: 'ambient', tempo: 'slow', instrument: 'pad',
        description: 'Soothing ambient background for narration',
        path: '/local/audio/calm_ambient.wav', type: 'audio'
      },
      { 
        id: 'a3', name: 'Upbeat_Electronic.mp3', duration: 90,
        tags: ['electronic', 'energetic', 'modern'], mood: 'dynamic',
        genre: 'electronic', tempo: 'fast', instrument: 'synthesizer',
        description: 'Modern electronic beat for tech content',
        path: '/local/audio/upbeat_electronic.mp3', type: 'audio'
      }
    ],
    images: [
      { 
        id: 'i1', name: 'Corporate_Logo.png',
        tags: ['logo', 'corporate', 'brand'], style: 'modern',
        color: 'blue', type: 'image', resolution: '4K',
        description: 'Clean corporate logo design',
        path: '/local/images/corporate_logo.png'
      },
      { 
        id: 'i2', name: 'Background_Abstract.jpg',
        tags: ['background', 'abstract', 'modern'], style: 'abstract',
        color: 'gradient', type: 'image', resolution: '4K',
        description: 'Modern abstract background',
        path: '/local/images/background_abstract.jpg'
      }
    ],
    textTemplates: [
      { 
        id: 't1', name: 'Corporate_Title', 
        content: 'Your Success Story Begins Here',
        style: 'corporate', font: 'Roboto', animation: 'fade-in',
        duration: 3, description: 'Professional corporate title template', 
        type: 'text'
      },
      { 
        id: 't2', name: 'Modern_Subtitle', 
        content: 'Innovation Through Technology',
        style: 'modern', font: 'Inter', animation: 'slide-up',
        duration: 2, description: 'Modern subtitle template', 
        type: 'text'
      }
    ]
  });

  // Progetti
  const [projects, setProjects] = useState([
    {
      id: 'proj_1',
      title: 'Video Corporate 2024',
      description: 'Presentazione aziendale per il nuovo anno',
      createdAt: '2024-06-25T14:30:00Z',
      modifiedAt: '2024-06-29T16:45:00Z',
      duration: 120,
      clips: 15,
      status: 'completed',
      userId: 1,
      progress: 100
    },
    {
      id: 'proj_2',
      title: 'Tutorial Prodotto',
      description: 'Guida all\'uso del software',
      createdAt: '2024-06-20T09:15:00Z',
      modifiedAt: '2024-06-28T11:20:00Z',
      duration: 300,
      clips: 25,
      status: 'in_progress',
      userId: 1,
      progress: 65
    }
  ]);

  // Stati del progetto corrente
  const [projectData, setProjectData] = useState({
    title: 'Nuovo Progetto',
    description: '',
    idea: '',
    script: {
      scenes: [],
      characters: [],
      dialogues: []
    },
    timeline: {
      tracks: [
        { id: 'video1', type: 'video', name: 'Video Principale', clips: [], visible: true, locked: false, volume: 100, color: '#7C3AED' },
        { id: 'video2', type: 'video', name: 'Video Overlay', clips: [], visible: true, locked: false, volume: 100, color: '#8B5CF6' },
        { id: 'audio1', type: 'audio', name: 'Audio Principale', clips: [], visible: true, locked: false, volume: 80, color: '#059669' },
        { id: 'audio2', type: 'audio', name: 'Musica di Sottofondo', clips: [], visible: true, locked: false, volume: 60, color: '#10B981' },
        { id: 'text1', type: 'text', name: 'Titoli e Testi', clips: [], visible: true, locked: false, volume: 100, color: '#F59E0B' },
        { id: 'effects1', type: 'effects', name: 'Effetti e Transizioni', clips: [], visible: true, locked: false, volume: 100, color: '#EC4899' }
      ],
      duration: 120,
      currentTime: 0,
      zoom: 1
    },
    aiSuggestions: [],
    exportSettings: {
      format: 'MP4',
      quality: '1080p',
      fps: 30,
      codec: 'H.264'
    }
  });

  // Stati UI
  const [selectedClips, setSelectedClips] = useState([]);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [textEditorContent, setTextEditorContent] = useState({
    text: '',
    style: {
      font: 'Inter',
      size: 32,
      color: '#FFFFFF',
      weight: 'normal',
      align: 'center',
      animation: 'fade-in',
      duration: 3
    }
  });

  // Colori tema
  const colors = {
    bg: '#0F172A',
    surface: '#1E293B',
    surfaceLight: '#334155',
    text: '#F1F5F9',
    textMuted: '#94A3B8',
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
    success: '#22C55E',
    warning: '#EAB308',
    error: '#EF4444',
    ai: '#A855F7',
    offline: '#10B981'
  };

  // Workflow steps
  const workflowSteps = [
    { id: 'idea', label: appConfig.workflowLabels.idea, icon: appConfig.workflowIcons.idea, desc: 'Sviluppo concept' },
    { id: 'script', label: appConfig.workflowLabels.script, icon: appConfig.workflowIcons.script, desc: 'Script e personaggi' },
    { id: 'storyboard', label: appConfig.workflowLabels.storyboard, icon: appConfig.workflowIcons.storyboard, desc: 'Visual planning' },
    { id: 'timeline', label: appConfig.workflowLabels.timeline, icon: appConfig.workflowIcons.timeline, desc: 'Timeline AI' },
    { id: 'export', label: appConfig.workflowLabels.export, icon: appConfig.workflowIcons.export, desc: 'Finalizzazione' }
  ];

  // Funzioni
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === loginForm.username && u.password === loginForm.password);
    
    if (user) {
      setCurrentUser(user);
      setCurrentPage('dashboard');
      setLoginError('');
    } else {
      setLoginError('Username o password non corretti');
    }
  };

  const analyzeContentWithAI = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const keywords = projectData.idea.toLowerCase().split(' ').filter(w => w.length > 3);
    const mood = keywords.includes('corporate') ? 'professional' : 'creative';
    
    const videoSuggestions = localAIDatabase.videoClips
      .filter(v => v.mood === mood || v.tags.some(tag => keywords.includes(tag)))
      .slice(0, 3);
    
    const audioSuggestions = localAIDatabase.audioClips
      .filter(a => a.mood === mood)
      .slice(0, 2);

    setProjectData(prev => ({
      ...prev,
      aiSuggestions: [
        {
          icon: '🎬',
          title: 'Struttura Consigliata',
          content: `Video di ${mood === 'professional' ? '60-90' : '120-180'} secondi con ${videoSuggestions.length} scene principali`,
          mediaCount: `${videoSuggestions.length} video trovati`
        },
        {
          icon: '🎵',
          title: 'Audio Suggerito',
          content: `${audioSuggestions.length} tracce audio ${mood} trovate nel database`,
          mediaCount: `${audioSuggestions.length} tracce disponibili`
        },
        {
          icon: '🎯',
          title: 'Target Audience',
          content: mood === 'professional' ? 'Business professionals, 25-45 anni' : 'Pubblico generale, 18-35 anni',
          mediaCount: 'Analisi completata'
        }
      ]
    }));

    setIsAnalyzing(false);
  };

  const generateScript = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const scenes = [
      {
        id: 1,
        title: 'Apertura',
        description: 'Hook iniziale che cattura l\'attenzione',
        duration: 10,
        location: 'Studio',
        mood: 'energetic'
      },
      {
        id: 2,
        title: 'Sviluppo',
        description: 'Presentazione del contenuto principale',
        duration: 20,
        location: 'Varie location',
        mood: 'professional'
      },
      {
        id: 3,
        title: 'Chiusura',
        description: 'Call to action e conclusioni',
        duration: 5,
        location: 'Studio',
        mood: 'motivational'
      }
    ];

    const characters = [
      {
        id: 1,
        name: 'Narratore',
        role: 'Voce principale',
        description: 'Guida professionale attraverso il contenuto'
      }
    ];

    setProjectData(prev => ({
      ...prev,
      script: { scenes, characters, dialogues: [] }
    }));

    setIsAnalyzing(false);
  };

  const autoFillTimeline = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newTracks = [...projectData.timeline.tracks];
    
    // Add video clips
    if (localAIDatabase.videoClips.length > 0) {
      newTracks[0].clips.push({
        id: Date.now(),
        name: localAIDatabase.videoClips[0].name,
        startTime: 0,
        duration: localAIDatabase.videoClips[0].duration,
        type: 'video',
        source: 'ai_suggestion'
      });
    }

    // Add audio
    if (localAIDatabase.audioClips.length > 0) {
      newTracks[2].clips.push({
        id: Date.now() + 1,
        name: localAIDatabase.audioClips[0].name,
        startTime: 0,
        duration: 60,
        type: 'audio',
        source: 'ai_suggestion'
      });
    }

    // Add text
    newTracks[4].clips.push({
      id: Date.now() + 2,
      name: 'Titolo Principale',
      content: projectData.title,
      startTime: 0,
      duration: 3,
      type: 'text',
      source: 'ai_suggestion'
    });

    setProjectData(prev => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        tracks: newTracks
      }
    }));

    setIsAnalyzing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Oggi';
    if (diffDays === 1) return 'Ieri';
    if (diffDays < 7) return `${diffDays} giorni fa`;
    
    return date.toLocaleDateString('it-IT');
  };

  const getFilteredProjects = () => {
    let filtered = projects.filter(p => p.userId === currentUser?.id);
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(p => p.status === filterStatus);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  // Render Pages
  const renderAuthPage = () => (
    <div style={{
      height: '100vh',
      background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.surface} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: colors.surface,
        borderRadius: '1.5rem',
        padding: '3rem',
        width: '450px',
        border: `1px solid ${colors.surfaceLight}`,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
            borderRadius: '1.5rem',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem'
          }}>
            {appConfig.appIcon}
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            margin: '0 0 0.5rem 0',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {appConfig.appName}
          </h1>
          <p style={{ color: colors.textMuted, margin: 0 }}>
            Editing Professionale con AI Integrata
          </p>
        </div>

        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Username
            </label>
            <input
              type="text"
              value={loginForm.username}
              onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              placeholder="Inserisci username"
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.surfaceLight}`,
                borderRadius: '0.75rem',
                padding: '1rem',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              placeholder="Inserisci password"
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.surfaceLight}`,
                borderRadius: '0.75rem',
                padding: '1rem',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {loginError && (
            <div style={{
              background: colors.error + '22',
              color: colors.error,
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              fontSize: '0.9rem'
            }}>
              {loginError}
            </div>
          )}

          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              padding: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Accedi
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: colors.bg,
          borderRadius: '1rem',
          border: `1px solid ${colors.surfaceLight}`
        }}>
          <h4 style={{ margin: '0 0 1rem 0', color: colors.ai }}>
            🎯 Credenziali Demo
          </h4>
          <div style={{ fontSize: '0.8rem', lineHeight: 1.5, color: colors.textMuted }}>
            <div><strong>Admin:</strong> admin / admin123</div>
            <div><strong>User:</strong> user / user123</div>
            <div><strong>Demo:</strong> demo / demo</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div style={{
      height: '100vh',
      background: colors.bg,
      color: colors.text,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        background: colors.surface,
        borderBottom: `1px solid ${colors.surfaceLight}`,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            {appConfig.appIcon}
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            margin: 0,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {appConfig.appName}
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setCurrentPage('settings')}
            style={{
              background: colors.surfaceLight,
              color: colors.text,
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Settings size={16} />
          </button>
          <button
            onClick={() => {
              setCurrentUser(null);
              setCurrentPage('auth');
              setLoginForm({ username: '', password: '' });
            }}
            style={{
              background: colors.error + '22',
              color: colors.error,
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {/* Statistiche */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.primary}33`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Folder size={24} color={colors.primary} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700' }}>
                  {projects.filter(p => p.userId === currentUser?.id && p.status === 'completed').length}
                </div>
                <div style={{ color: colors.textMuted }}>Completati</div>
              </div>
            </div>
          </div>

          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.ai}33`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Brain size={24} color={colors.ai} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700' }}>15</div>
                <div style={{ color: colors.textMuted }}>Suggerimenti AI</div>
              </div>
            </div>
          </div>

          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.accent}33`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Clock size={24} color={colors.accent} />
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700' }}>7h</div>
                <div style={{ color: colors.textMuted }}>Tempo Totale</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controlli */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca progetti..."
              style={{
                background: colors.surface,
                color: colors.text,
                border: `1px solid ${colors.surfaceLight}`,
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                outline: 'none',
                width: '300px'
              }}
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                background: colors.surface,
                color: colors.text,
                border: `1px solid ${colors.surfaceLight}`,
                borderRadius: '0.5rem',
                padding: '0.5rem',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              <option value="all">Tutti</option>
              <option value="in_progress">In corso</option>
              <option value="completed">Completati</option>
            </select>
          </div>

          <button
            onClick={() => {
              setCurrentProject({ 
                id: Date.now(), 
                title: 'Nuovo Progetto',
                userId: currentUser.id 
              });
              setCurrentPage('workspace');
              setCurrentWorkflowStep('idea');
            }}
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Plus size={20} />
            Nuovo Progetto
          </button>
        </div>

        {/* Grid Progetti */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {getFilteredProjects().map(project => (
            <div
              key={project.id}
              style={{
                background: colors.surface,
                borderRadius: '1rem',
                border: `1px solid ${colors.surfaceLight}`,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onClick={() => {
                setCurrentProject(project);
                setCurrentPage('workspace');
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '150px',
                background: `linear-gradient(135deg, ${colors.primary}22, ${colors.ai}22)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Video size={32} color={colors.primary} />
                
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: colors.surfaceLight
                }}>
                  <div style={{
                    height: '100%',
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.ai})`,
                    width: `${project.progress || 0}%`
                  }} />
                </div>
              </div>

              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{project.title}</h3>
                <p style={{ margin: '0 0 1rem 0', color: colors.textMuted, fontSize: '0.9rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                    {formatDate(project.modifiedAt)}
                  </div>
                  <div style={{
                    background: project.status === 'completed' ? colors.success + '22' : colors.primary + '22',
                    color: project.status === 'completed' ? colors.success : colors.primary,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.7rem'
                  }}>
                    {project.status === 'completed' ? 'Completato' : 'In corso'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWorkspace = () => (
    <div style={{
      height: '100vh',
      background: colors.bg,
      color: colors.text,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        background: colors.surface,
        borderBottom: `1px solid ${colors.surfaceLight}`,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setCurrentPage('dashboard')}
            style={{
              background: 'transparent',
              border: `1px solid ${colors.surfaceLight}`,
              color: colors.textMuted,
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
          </button>
          
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>
            {projectData.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setCurrentWorkflowStep(step.id)}
                  style={{
                    background: currentWorkflowStep === step.id ? colors.primary : 'transparent',
                    color: currentWorkflowStep === step.id ? 'white' : colors.text,
                    border: `1px solid ${currentWorkflowStep === step.id ? colors.primary : colors.surfaceLight}`,
                    borderRadius: '0.5rem',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>{step.icon}</span>
                  {step.label}
                </button>
                {index < workflowSteps.length - 1 && (
                  <ChevronRight size={16} color={colors.textMuted} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            style={{
              background: colors.success + '22',
              color: colors.success,
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Save size={16} /> Salva
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {currentWorkflowStep === 'idea' && renderIdeaStep()}
        {currentWorkflowStep === 'script' && renderScriptStep()}
        {currentWorkflowStep === 'storyboard' && renderStoryboardStep()}
        {currentWorkflowStep === 'timeline' && renderTimelineStep()}
        {currentWorkflowStep === 'export' && renderExportStep()}
      </div>
    </div>
  );

  const renderIdeaStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: '0 0 2rem 0' }}>
        💡 Ideazione con AI Locale
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>La Tua Idea</h3>
          
          <textarea
            value={projectData.idea}
            onChange={(e) => setProjectData(prev => ({ ...prev, idea: e.target.value }))}
            placeholder="Descrivi la tua idea per il video..."
            style={{
              width: '100%',
              height: '200px',
              background: colors.bg,
              color: colors.text,
              border: `1px solid ${colors.primary}33`,
              borderRadius: '0.5rem',
              padding: '1rem',
              fontSize: '1rem',
              resize: 'none',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
              {projectData.idea.length} caratteri
            </div>
            <button
              onClick={analyzeContentWithAI}
              disabled={!projectData.idea.trim() || isAnalyzing}
              style={{
                background: isAnalyzing ? colors.textMuted : colors.ai,
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {isAnalyzing ? (
                <>
                  <Activity size={16} />
                  Analizzando...
                </>
              ) : (
                <>
                  <Brain size={16} />
                  Analizza con AI
                </>
              )}
            </button>
          </div>
        </div>

        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.ai}33`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Suggerimenti AI</h3>
          
          {projectData.aiSuggestions.length === 0 ? (
            <div style={{
              textAlign: 'center',
              color: colors.textMuted,
              padding: '2rem'
            }}>
              <Database size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <p>Database locale pronto con 1000+ risorse</p>
              <p style={{ fontSize: '0.9rem' }}>
                Scrivi la tua idea e analizzala per ricevere suggerimenti
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projectData.aiSuggestions.map((suggestion, i) => (
                <div
                  key={i}
                  style={{
                    background: colors.bg,
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    border: `1px solid ${colors.ai}33`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{suggestion.icon}</span>
                    <span style={{ fontWeight: '600' }}>{suggestion.title}</span>
                  </div>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                    {suggestion.content}
                  </p>
                  <div style={{
                    fontSize: '0.8rem',
                    color: colors.ai,
                    background: colors.ai + '22',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    display: 'inline-block'
                  }}>
                    {suggestion.mediaCount}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => setCurrentWorkflowStep('script')}
          disabled={!projectData.idea.trim()}
          style={{
            background: projectData.idea.trim() ? colors.primary : colors.textMuted,
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: projectData.idea.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Vai alla Sceneggiatura
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const renderScriptStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: 0 }}>
          📝 Sceneggiatura
        </h2>
        <button
          onClick={generateScript}
          disabled={isAnalyzing}
          style={{
            background: isAnalyzing ? colors.textMuted : colors.ai,
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            cursor: isAnalyzing ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {isAnalyzing ? (
            <>
              <Activity size={16} />
              Generando...
            </>
          ) : (
            <>
              <Wand2 size={16} />
              Genera Script AI
            </>
          )}
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`,
          overflowY: 'auto'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Scene</h3>
          
          {projectData.script.scenes.length === 0 ? (
            <div style={{
              textAlign: 'center',
              color: colors.textMuted,
              padding: '2rem'
            }}>
              <PenTool size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <p>Nessuna scena ancora</p>
              <p style={{ fontSize: '0.9rem' }}>
                Clicca "Genera Script AI" per creare automaticamente le scene
              </p>
            </div>
          ) : (
            projectData.script.scenes.map(scene => (
              <div
                key={scene.id}
                style={{
                  background: colors.bg,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.primary}33`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{scene.title}</strong>
                  <span style={{ fontSize: '0.8rem', color: colors.textMuted }}>{scene.duration}s</span>
                </div>
                <p style={{ margin: '0 0 0.5rem 0' }}>{scene.description}</p>
                <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                  📍 {scene.location} • 🎭 {scene.mood}
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.secondary}33`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Personaggi</h3>
          
          {projectData.script.characters.length === 0 ? (
            <div style={{
              textAlign: 'center',
              color: colors.textMuted,
              padding: '2rem'
            }}>
              <Users size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.9rem' }}>
                I personaggi verranno generati con lo script
              </p>
            </div>
          ) : (
            projectData.script.characters.map(character => (
              <div
                key={character.id}
                style={{
                  background: colors.bg,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.secondary}33`
                }}
              >
                <strong>{character.name}</strong>
                <div style={{ fontSize: '0.9rem', color: colors.textMuted }}>
                  {character.role}
                </div>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
                  {character.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={() => setCurrentWorkflowStep('idea')}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} /> Torna all'Idea
        </button>
        
        <button
          onClick={() => setCurrentWorkflowStep('timeline')}
          disabled={projectData.script.scenes.length === 0}
          style={{
            background: projectData.script.scenes.length > 0 ? colors.primary : colors.textMuted,
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: projectData.script.scenes.length > 0 ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Vai alla Timeline
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  const renderStoryboardStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        textAlign: 'center',
        padding: '3rem',
        background: colors.surface,
        borderRadius: '1rem',
        border: `1px solid ${colors.primary}33`
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧</div>
        <h2 style={{ color: colors.primary, marginBottom: '1rem' }}>Storyboard in Sviluppo</h2>
        <p style={{ color: colors.textMuted, marginBottom: '2rem' }}>
          Questa funzionalità sarà disponibile nella prossima versione
        </p>
        <button
          onClick={() => setCurrentWorkflowStep('timeline')}
          style={{
            background: colors.primary,
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Vai alla Timeline
        </button>
      </div>
    </div>
  );

  const renderTimelineStep = () => (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Timeline Header */}
      <div style={{
        background: colors.surface,
        padding: '1rem',
        borderBottom: `1px solid ${colors.surfaceLight}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2 style={{ margin: 0 }}>Timeline AI Editor</h2>
          <div style={{
            background: colors.ai + '22',
            color: colors.ai,
            padding: '0.25rem 0.75rem',
            borderRadius: '0.25rem',
            fontSize: '0.8rem'
          }}>
            <Brain size={12} /> AI Attivo
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setShowAISuggestions(!showAISuggestions)}
            style={{
              background: showAISuggestions ? colors.ai : 'transparent',
              color: showAISuggestions ? 'white' : colors.text,
              border: `1px solid ${colors.ai}`,
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            <Search size={14} /> Smart Media
          </button>
          
          <button
            onClick={autoFillTimeline}
            disabled={isAnalyzing}
            style={{
              background: isAnalyzing ? colors.textMuted : colors.secondary,
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: isAnalyzing ? 'not-allowed' : 'pointer'
            }}
          >
            <Zap size={14} /> Auto-Fill AI
          </button>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex' }}>
        {/* AI Suggestions Panel */}
        {showAISuggestions && (
          <div style={{
            width: '300px',
            background: colors.surface,
            borderRight: `1px solid ${colors.surfaceLight}`,
            padding: '1rem',
            overflowY: 'auto'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Media Suggeriti</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: colors.primary, marginBottom: '0.5rem' }}>🎬 Video</h4>
              {localAIDatabase.videoClips.slice(0, 3).map(video => (
                <div
                  key={video.id}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('application/json', JSON.stringify(video));
                  }}
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.primary}33`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    cursor: 'grab'
                  }}
                >
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{video.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                    {video.duration}s • {video.mood}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: colors.secondary, marginBottom: '0.5rem' }}>🎵 Audio</h4>
              {localAIDatabase.audioClips.slice(0, 2).map(audio => (
                <div
                  key={audio.id}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('application/json', JSON.stringify(audio));
                  }}
                  style={{
                    background: colors.bg,
                    border: `1px solid ${colors.secondary}33`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    cursor: 'grab'
                  }}
                >
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{audio.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                    {audio.duration}s • {audio.mood}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Controls */}
          <div style={{
            background: colors.surface,
            padding: '1rem',
            borderBottom: `1px solid ${colors.surfaceLight}`,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              style={{
                background: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                padding: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Play size={20} />
            </button>
            
            <div style={{
              background: colors.bg,
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              fontFamily: 'monospace'
            }}>
              00:00:00
            </div>
          </div>

          {/* Tracks */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            {projectData.timeline.tracks.map(track => (
              <div
                key={track.id}
                style={{
                  borderBottom: `1px solid ${colors.surfaceLight}`,
                  display: 'flex'
                }}
              >
                <div style={{
                  width: '200px',
                  padding: '1rem',
                  background: colors.surfaceLight,
                  borderRight: `1px solid ${colors.surface}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '500' }}>{track.name}</span>
                    {track.visible ? <Eye size={12} /> : <EyeOff size={12} />}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                    {track.type}
                  </div>
                </div>
                
                <div
                  style={{
                    flex: 1,
                    padding: '1rem',
                    position: 'relative',
                    minHeight: '60px',
                    background: colors.bg
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    const mediaData = JSON.parse(e.dataTransfer.getData('application/json'));
                    
                    if ((track.type === 'video' && mediaData.type === 'video') ||
                        (track.type === 'audio' && mediaData.type === 'audio')) {
                      const newClip = {
                        id: Date.now(),
                        name: mediaData.name,
                        startTime: 0,
                        duration: mediaData.duration,
                        type: mediaData.type,
                        source: 'manual'
                      };
                      
                      setProjectData(prev => ({
                        ...prev,
                        timeline: {
                          ...prev.timeline,
                          tracks: prev.timeline.tracks.map(t => 
                            t.id === track.id 
                              ? { ...t, clips: [...t.clips, newClip] }
                              : t
                          )
                        }
                      }));
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {track.clips.map(clip => (
                    <div
                      key={clip.id}
                      style={{
                        position: 'absolute',
                        left: `${clip.startTime * 5}px`,
                        width: `${clip.duration * 5}px`,
                        height: '40px',
                        background: clip.source === 'ai_suggestion' 
                          ? `linear-gradient(45deg, ${track.color}, ${colors.ai})`
                          : track.color,
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        color: 'white',
                        fontSize: '0.8rem',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        border: selectedClips.includes(clip.id) ? `2px solid ${colors.accent}` : 'none'
                      }}
                      onClick={() => {
                        if (selectedClips.includes(clip.id)) {
                          setSelectedClips(prev => prev.filter(id => id !== clip.id));
                        } else {
                          setSelectedClips(prev => [...prev, clip.id]);
                        }
                      }}
                    >
                      {clip.name}
                      {clip.source === 'ai_suggestion' && (
                        <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}>🧠</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem', background: colors.surface, display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={() => setCurrentWorkflowStep('script')}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} /> Script
        </button>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {selectedClips.length > 0 && (
            <>
              <button
                onClick={() => {
                  // Delete selected clips
                  setProjectData(prev => ({
                    ...prev,
                    timeline: {
                      ...prev.timeline,
                      tracks: prev.timeline.tracks.map(track => ({
                        ...track,
                        clips: track.clips.filter(clip => !selectedClips.includes(clip.id))
                      }))
                    }
                  }));
                  setSelectedClips([]);
                }}
                style={{
                  background: colors.error,
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                <Trash2 size={14} /> Elimina
              </button>
            </>
          )}
          
          <button
            onClick={() => setShowTextEditor(true)}
            style={{
              background: colors.accent,
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <Type size={14} /> Aggiungi Testo
          </button>
        </div>
        
        <button
          onClick={() => setCurrentWorkflowStep('export')}
          style={{
            background: colors.primary,
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Export <ArrowRight size={16} />
        </button>
      </div>

      {/* Text Editor Modal */}
      {showTextEditor && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '2rem',
            width: '600px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h3>Editor Testo</h3>
              <button
                onClick={() => setShowTextEditor(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: colors.textMuted,
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <textarea
              value={textEditorContent.text}
              onChange={(e) => setTextEditorContent(prev => ({ ...prev, text: e.target.value }))}
              placeholder="Inserisci il tuo testo..."
              style={{
                width: '100%',
                height: '150px',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '1rem',
                fontSize: '1rem',
                resize: 'none',
                outline: 'none',
                marginBottom: '1rem',
                boxSizing: 'border-box'
              }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Font</label>
                <select
                  value={textEditorContent.style.font}
                  onChange={(e) => setTextEditorContent(prev => ({
                    ...prev,
                    style: { ...prev.style, font: e.target.value }
                  }))}
                  style={{
                    width: '100%',
                    background: colors.bg,
                    color: colors.text,
                    border: `1px solid ${colors.surfaceLight}`,
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    outline: 'none'
                  }}
                >
                  <option value="Inter">Inter</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Arial">Arial</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Dimensione</label>
                <input
                  type="range"
                  min="16"
                  max="72"
                  value={textEditorContent.style.size}
                  onChange={(e) => setTextEditorContent(prev => ({
                    ...prev,
                    style: { ...prev.style, size: parseInt(e.target.value) }
                  }))}
                  style={{ width: '100%' }}
                />
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: colors.textMuted }}>
                  {textEditorContent.style.size}px
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Colore</label>
                <input
                  type="color"
                  value={textEditorContent.style.color}
                  onChange={(e) => setTextEditorContent(prev => ({
                    ...prev,
                    style: { ...prev.style, color: e.target.value }
                  }))}
                  style={{ width: '100%', height: '40px', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Animazione</label>
                <select
                  value={textEditorContent.style.animation}
                  onChange={(e) => setTextEditorContent(prev => ({
                    ...prev,
                    style: { ...prev.style, animation: e.target.value }
                  }))}
                  style={{
                    width: '100%',
                    background: colors.bg,
                    color: colors.text,
                    border: `1px solid ${colors.surfaceLight}`,
                    borderRadius: '0.5rem',
                    padding: '0.5rem',
                    outline: 'none'
                  }}
                >
                  <option value="fade-in">Fade In</option>
                  <option value="slide-up">Slide Up</option>
                  <option value="zoom-in">Zoom In</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowTextEditor(false)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  color: colors.textMuted,
                  border: `1px solid ${colors.surfaceLight}`,
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  // Add text to timeline
                  const newClip = {
                    id: Date.now(),
                    name: textEditorContent.text.slice(0, 20) + '...',
                    content: textEditorContent.text,
                    startTime: 0,
                    duration: textEditorContent.style.duration,
                    type: 'text',
                    style: textEditorContent.style,
                    source: 'manual'
                  };
                  
                  setProjectData(prev => ({
                    ...prev,
                    timeline: {
                      ...prev.timeline,
                      tracks: prev.timeline.tracks.map(track => 
                        track.type === 'text'
                          ? { ...track, clips: [...track.clips, newClip] }
                          : track
                      )
                    }
                  }));
                  
                  setShowTextEditor(false);
                  setTextEditorContent({
                    text: '',
                    style: {
                      font: 'Inter',
                      size: 32,
                      color: '#FFFFFF',
                      weight: 'normal',
                      align: 'center',
                      animation: 'fade-in',
                      duration: 3
                    }
                  });
                }}
                style={{
                  flex: 1,
                  background: colors.primary,
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                Aggiungi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderExportStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: '0 0 2rem 0' }}>
        📤 Esportazione
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Impostazioni Export</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Formato</label>
            <select
              value={projectData.exportSettings.format}
              onChange={(e) => setProjectData(prev => ({
                ...prev,
                exportSettings: { ...prev.exportSettings, format: e.target.value }
              }))}
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                outline: 'none'
              }}
            >
              <option value="MP4">MP4</option>
              <option value="AVI">AVI</option>
              <option value="MOV">MOV</option>
              <option value="WebM">WebM</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Qualità</label>
            <select
              value={projectData.exportSettings.quality}
              onChange={(e) => setProjectData(prev => ({
                ...prev,
                exportSettings: { ...prev.exportSettings, quality: e.target.value }
              }))}
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                outline: 'none'
              }}
            >
              <option value="4K">4K</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Frame Rate</label>
            <select
              value={projectData.exportSettings.fps}
              onChange={(e) => setProjectData(prev => ({
                ...prev,
                exportSettings: { ...prev.exportSettings, fps: parseInt(e.target.value) }
              }))}
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                outline: 'none'
              }}
            >
              <option value={24}>24 FPS</option>
              <option value={30}>30 FPS</option>
              <option value={60}>60 FPS</option>
            </select>
          </div>
        </div>

        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.ai}33`
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Anteprima Export</h3>
          
          <div style={{
            background: colors.bg,
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Titolo:</strong> {projectData.title}
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Durata:</strong> {projectData.timeline.duration}s
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Risoluzione:</strong> {projectData.exportSettings.quality}
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Formato:</strong> {projectData.exportSettings.format}
            </div>
          </div>

          <button
            style={{
              width: '100%',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            <Download size={20} /> Inizia Export
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div style={{
      height: '100vh',
      background: colors.bg,
      color: colors.text,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        background: colors.surface,
        borderBottom: `1px solid ${colors.surfaceLight}`,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setCurrentPage('dashboard')}
            style={{
              background: 'transparent',
              border: `1px solid ${colors.surfaceLight}`,
              color: colors.textMuted,
              padding: '0.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
          </button>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Impostazioni</h1>
        </div>
      </div>

      <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1200px' }}>
          {/* Personalizzazione App */}
          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.primary}33`
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: colors.primary }}>
              🎨 Personalizzazione
            </h3>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nome App</label>
              <input
                type="text"
                value={appConfig.appName}
                onChange={(e) => setAppConfig(prev => ({ ...prev, appName: e.target.value }))}
                style={{
                  width: '100%',
                  background: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.primary}33`,
                  borderRadius: '0.5rem',
                  padding: '0.75rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Icona</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['🎬', '🎥', '📹', '🎞️', '🎪'].map(icon => (
                  <button
                    key={icon}
                    onClick={() => setAppConfig(prev => ({ ...prev, appIcon: icon }))}
                    style={{
                      background: appConfig.appIcon === icon ? colors.primary : colors.surfaceLight,
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '1rem',
                      cursor: 'pointer',
                      fontSize: '1.5rem'
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info Sistema */}
          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.ai}33`
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: colors.ai }}>
              ℹ️ Informazioni Sistema
            </h3>

            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Versione:</strong> 2.0.0
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Database:</strong> {Object.values(localAIDatabase).flat().length} assets
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>AI Engine:</strong> v2.0 Locale
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Privacy:</strong> 100% Offline
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main render
  if (currentPage === 'auth') return renderAuthPage();
  if (currentPage === 'dashboard') return renderDashboard();
  if (currentPage === 'workspace') return renderWorkspace();
  if (currentPage === 'settings') return renderSettings();
  
  return null;
};

export default SoftwareAudioVideoV2;id).length};