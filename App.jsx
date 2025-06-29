  const renderWorkspace = () => {
    if (!currentProject) return null;

    return (
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
              onClick={() => setCurrentView('dashboard')}
              style={{
                background: 'transparent',
                border: `1px solid ${colors.surfaceLight}`,
                color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: projectData.idea.trim() && projectData.idea.length > 50 ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Genera Sceneggiatura
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  // Step Sceneggiatura
  const renderScriptStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: '0 0 2rem 0' }}>
        📝 Sceneggiatura Intelligente
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PenTool size={20} color={colors.primary} />
            Scene Generate
          </h3>
          
          {projectData.script.scenes.length === 0 ? (
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Clapperboard size={48} color={colors.textMuted} style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <p style={{ textAlign: 'center', color: colors.textMuted }}>
                Le scene verranno generate automaticamente dalla tua idea
              </p>
              <button
                onClick={generateScriptFromIdea}
                disabled={isAnalyzing}
                style={{
                  background: isAnalyzing ? colors.textMuted : colors.ai,
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}
              >
                {isAnalyzing ? (
                  <>
                    <Activity size={16} style={{ animation: 'spin 1s infinite' }} />
                    Generando...
                  </>
                ) : (
                  <>
                    <Wand2 size={16} />
                    Genera Scene
                  </>
                )}
              </button>
            </div>
          ) : (
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {projectData.script.scenes.map((scene, index) => (
                <div
                  key={scene.id}
                  style={{
                    background: colors.bg,
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: `1px solid ${colors.primary}33`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ margin: 0, color: colors.primary }}>
                      Scena {scene.id}: {scene.title}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                      {scene.duration}s
                    </span>
                  </div>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {scene.description}
                  </p>
                  <div style={{ fontSize: '0.8rem', color: colors.ai, marginBottom: '0.5rem' }}>
                    📍 {scene.location} • 🎭 {scene.mood}
                  </div>
                  <div style={{ 
                    background: colors.surface, 
                    padding: '0.5rem', 
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    "{scene.dialogue}"
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.ai}33`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={20} color={colors.ai} />
            Personaggi
          </h3>
          
          {projectData.script.characters.length === 0 ? (
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center',
              color: colors.textMuted
            }}>
              <p>I personaggi verranno generati con le scene</p>
            </div>
          ) : (
            <div style={{ flex: 1 }}>
              {projectData.script.characters.map((character) => (
                <div
                  key={character.id}
                  style={{
                    background: colors.bg,
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: `1px solid ${colors.ai}33`
                  }}
                >
                  <h4 style={{ margin: '0 0 0.5rem 0', color: colors.ai }}>
                    {character.name}
                  </h4>
                  <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: colors.primary }}>
                    {character.role}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {character.description}
                  </p>
                  <div style={{ 
                    marginTop: '0.5rem',
                    fontSize: '0.8rem',
                    color: colors.textMuted 
                  }}>
                    🎤 {character.voiceType}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={goToPreviousStep}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
          Ideazione
        </button>
        
        <button
          onClick={goToNextStep}
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
          Timeline AI
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  // Step Storyboard (placeholder)
  const renderStoryboardStep = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: colors.primary, marginBottom: '2rem' }}>🎨 Storyboard (Coming Soon)</h2>
      <p style={{ color: colors.textMuted }}>Questa funzionalità sarà disponibile presto</p>
    </div>
  );

  // Step Timeline
  const renderTimelineStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: 0 }}>
          🎬 Timeline AI
        </h2>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={generateTimelineSuggestions}
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
                <Activity size={16} style={{ animation: 'spin 1s infinite' }} />
                Generando...
              </>
            ) : (
              <>
                <Wand2 size={16} />
                Auto-Fill AI
              </>
            )}
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: colors.primary,
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>

      <div style={{
        background: colors.surface,
        borderRadius: '1rem',
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={16} color={colors.textMuted} />
            <span style={{ fontSize: '0.9rem', color: colors.textMuted }}>
              {formatDuration(projectData.timeline.duration)}
            </span>
          </div>
          <div style={{ flex: 1, height: '4px', background: colors.bg, borderRadius: '2px' }}>
            <div
              style={{
                width: `${(currentTime / projectData.timeline.duration) * 100}%`,
                height: '100%',
                background: colors.primary,
                borderRadius: '2px'
              }}
            />
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {projectData.timeline.tracks.map((track, trackIndex) => (
            <div
              key={track.id}
              style={{
                marginBottom: '1rem',
                background: colors.bg,
                borderRadius: '0.5rem',
                padding: '1rem'
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '0.5rem' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {track.type === 'video' && <Video size={16} color={colors.track.video} />}
                  {track.type === 'audio' && <Music size={16} color={colors.track.audio} />}
                  {track.type === 'text' && <Type size={16} color={colors.track.text} />}
                  <span style={{ fontWeight: '500' }}>{track.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: track.visible ? colors.primary : colors.textMuted,
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: track.locked ? colors.warning : colors.textMuted,
                      cursor: 'pointer'
                    }}
                  >
                    <Lock size={14} />
                  </button>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                alignItems: 'center',
                minHeight: '40px',
                background: colors.surface,
                borderRadius: '0.25rem',
                padding: '0.5rem'
              }}>
                {track.clips.length === 0 ? (
                  <div style={{ 
                    color: colors.textMuted, 
                    fontSize: '0.8rem',
                    fontStyle: 'italic' 
                  }}>
                    Trascina qui i media o usa Auto-Fill AI
                  </div>
                ) : (
                  track.clips.map((clip, clipIndex) => (
                    <div
                      key={clip.id}
                      style={{
                        background: colors.track[track.type] || colors.primary,
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.8rem',
                        minWidth: `${(clip.duration / projectData.timeline.duration) * 300}px`,
                        maxWidth: '200px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        if (!selectedClips.includes(clip.id)) {
                          setSelectedClips([...selectedClips, clip.id]);
                        }
                      }}
                    >
                      {clip.name}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={goToPreviousStep}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
          Sceneggiatura
        </button>
        
        <button
          onClick={goToNextStep}
          disabled={!projectData.timeline.tracks.some(t => t.clips.length > 0)}
          style={{
            background: projectData.timeline.tracks.some(t => t.clips.length > 0) ? colors.primary : colors.textMuted,
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: projectData.timeline.tracks.some(t => t.clips.length > 0) ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Esporta Video
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  // Step Export
  const renderExportStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: '0 0 2rem 0' }}>
        📤 Esportazione Video
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>⚙️ Impostazioni Export</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Formato
            </label>
            <select
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="mp4">MP4 (Raccomandato)</option>
              <option value="avi">AVI</option>
              <option value="mov">MOV</option>
              <option value="webm">WebM</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Qualità
            </label>
            <select
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="4k">4K (3840×2160)</option>
              <option value="1080p">Full HD (1920×1080)</option>
              <option value="720p">HD (1280×720)</option>
              <option value="480p">SD (854×480)</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Frame Rate
            </label>
            <select
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="60">60 FPS</option>
              <option value="30">30 FPS</option>
              <option value="24">24 FPS (Cinema)</option>
            </select>
          </div>
        </div>

        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.ai}33`
        }}>
          <h3 style={{ marginBottom: '1rem' }}>📊 Anteprima Export</h3>
          
          <div style={{
            background: colors.bg,
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Durata:</span>
              <span>{formatDuration(projectData.timeline.duration)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Risoluzione:</span>
              <span>1920×1080</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Frame Rate:</span>
              <span>30 FPS</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Dimensione Stimata:</span>
              <span>~150 MB</span>
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            <Download size={20} />
            Inizia Export
          </button>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={goToPreviousStep}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
          Timeline
        </button>
        
        <button
          onClick={() => setCurrentView('dashboard')}
          style={{
            background: colors.success,
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <CheckCircle size={16} />
          Progetto Completato
        </button>
      </div>
    </div>
  );

  // Rendering principale
  if (!isAuthenticated) {
    return renderLogin();
  }

  if (currentView === 'dashboard') {
    return renderDashboard();
  }

  if (currentView === 'workspace') {
    return renderWorkspace();
  }

  return null;
};

export default SoftwareAudioVideoV2; colors.textMuted,
                padding: '0.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
            </button>
            
            <h1 style={{
              fontSize: '1.5rem',
              margin: 0,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {currentProject.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '2rem' }}>
              {workflowSteps.map((step, index) => {
                const status = getStepStatus(step.id);
                const isLocked = !canAccessStep(step.id);
                
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => {
                        if (!isLocked) {
                          setCurrentWorkflowStep(step.id);
                        }
                      }}
                      disabled={isLocked}
                      style={{
                        background: status === 'current' ? colors.primary : 
                                   status === 'completed' ? colors.success : 
                                   status === 'locked' ? colors.textMuted : 'transparent',
                        color: status === 'current' || status === 'completed' ? 'white' : 
                               status === 'locked' ? colors.textMuted : colors.text,
                        border: `1px solid ${
                          status === 'current' ? colors.primary : 
                          status === 'completed' ? colors.success :
                          status === 'locked' ? colors.textMuted : colors.surfaceLight
                        }`,
                        borderRadius: '0.5rem',
                        padding: '0.5rem 1rem',
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s',
                        opacity: isLocked ? 0.5 : 1
                      }}
                    >
                      <span>{step.icon}</span>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          {step.label}
                          {status === 'completed' && <CheckCircle size={12} />}
                          {status === 'locked' && <Lock size={12} />}
                        </div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{step.desc}</div>
                      </div>
                    </button>
                    {index < workflowSteps.length - 1 && (
                      <ChevronRight size={16} color={colors.textMuted} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              background: colors.offline + '22',
              color: colors.offline,
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Shield size={14} />
              Privacy Totale
            </div>
            
            <button
              onClick={() => {
                console.log('Progetto salvato:', currentProject);
              }}
              style={{
                background: colors.success + '22',
                color: colors.success,
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}
            >
              <Save size={16} />
              Salva
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'hidden' }}>
          {currentWorkflowStep === 'idea' && renderIdeationStep()}
          {currentWorkflowStep === 'script' && renderScriptStep()}
          {currentWorkflowStep === 'storyboard' && renderStoryboardStep()}
          {currentWorkflowStep === 'timeline' && renderTimelineStep()}
          {currentWorkflowStep === 'export' && renderExportStep()}
        </div>
      </div>
    );
  };

  // Step Ideazione
  const renderIdeationStep = () => (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.8rem', color: colors.primary, margin: '0 0 2rem 0' }}>
        💡 Ideazione con AI Locale
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flex: 1 }}>
        <div style={{
          background: colors.surface,
          borderRadius: '1rem',
          padding: '1.5rem',
          border: `1px solid ${colors.primary}33`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lightbulb size={20} color={colors.primary} />
            La Tua Idea
          </h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Titolo del Progetto
            </label>
            <input
              type="text"
              value={projectData.title}
              onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Inserisci il titolo del tuo video..."
              style={{
                width: '100%',
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '0.75rem',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
              Idea Dettagliata
            </label>
            <textarea
              value={projectData.idea}
              onChange={(e) => setProjectData(prev => ({ ...prev, idea: e.target.value }))}
              placeholder="Descrivi la tua idea per il video..."
              style={{
                flex: 1,
                background: colors.bg,
                color: colors.text,
                border: `1px solid ${colors.primary}33`,
                borderRadius: '0.5rem',
                padding: '1rem',
                fontSize: '1rem',
                lineHeight: 1.6,
                resize: 'none',
                outline: 'none',
                minHeight: '200px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '1rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: colors.textMuted }}>
              {projectData.idea.length} caratteri
              {projectData.idea.length > 50 && (
                <span style={{ color: colors.success, marginLeft: '1rem' }}>
                  ✓ Sufficiente per analisi AI
                </span>
              )}
            </div>
            <button
              onClick={() => analyzeContentWithLocalAI(projectData.idea, 'idea')}
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
                gap: '0.5rem',
                opacity: isAnalyzing ? 0.6 : 1
              }}
            >
              {isAnalyzing ? (
                <>
                  <Activity size={16} style={{ animation: 'spin 1s infinite' }} />
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
          border: `1px solid ${colors.ai}33`,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Brain size={20} color={colors.ai} />
            Suggerimenti AI Locale
          </h3>
          
          {projectData.aiSuggestions.length === 0 ? (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              opacity: 0.7
            }}>
              <Database size={48} color={colors.ai} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ marginBottom: '0.5rem' }}>Database locale pronto</p>
              <p style={{ fontSize: '0.9rem', color: colors.textMuted }}>
                Scrivi la tua idea e l'AI analizzerà il database
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, overflowY: 'auto' }}>
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{suggestion.icon}</span>
                    <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                      {suggestion.title}
                    </span>
                  </div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.9rem', 
                    lineHeight: 1.5,
                    opacity: 0.9,
                    marginBottom: '0.5rem'
                  }}>
                    {suggestion.content}
                  </p>
                  {suggestion.mediaCount && (
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
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={() => setCurrentView('dashboard')}
          style={{
            background: 'transparent',
            color: colors.textMuted,
            border: `1px solid ${colors.surfaceLight}`,
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
          Torna alla Dashboard
        </button>
        
        <button
          onClick={() => {
            if (projectData.idea.trim() && projectData.idea.length > 50) {
              generateScriptFromIdea();
              goToNextStep();
            }
          }}
          disabled={!projectData.idea.trim() || projectData.idea.length < 50}
          style={{
            background: projectData.idea.trim() && projectData.idea.length > 50 ? colors.primary : colors.textMuted,
            color:import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, Square, Volume2, Video, Image, FileText,
  Brain, Settings, Upload, Download, Save, Eye, Headphones,
  Film, Type, Shield, Database, Search, ArrowRight, Plus,
  User, Lock, LogOut, Folder, Clock, Star, Trash2, Edit3,
  Calendar, BarChart3, Sparkles, Monitor, HardDrive, Cpu,
  ChevronRight, X, FolderOpen, FileVideo, Lightbulb, PenTool,
  Clapperboard, Activity, Target, Coffee, Users, BookOpen,
  Layers, Camera, Music, MessageSquare, Grid, AlignCenter,
  Wand2, Filter, Sliders, Gauge, BarChart, Equalizer, 
  Mic2, Speaker, Tag, Archive, Globe, Server, Wifi, WifiOff,
  CheckCircle, AlertCircle, Info, RotateCcw, Copy, Split,
  Move, ZoomIn, ZoomOut, Crop, Scissors, SkipForward, SkipBack,
  VolumeX, Maximize2, RotateCw, Contrast, Brightness6, Vibrance,
  Waves, Mic, Sun, Moon, Palette, Zap, TrendingUp, Rocket,
  Minus, ChevronDown, ChevronUp, Send, Hash, Bold, Italic,
  Underline, List, AlignLeft, AlignJustify, Quote, Link,
  MoreHorizontal, ExternalLink, RefreshCw, MousePointer
} from 'lucide-react';

const SoftwareAudioVideoV2 = () => {
  // Stati principali
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login'); // login, dashboard, workspace
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState('idea');
  const [currentProject, setCurrentProject] = useState(null);

  // Sistema utenti (simulato)
  const [users] = useState([
    { 
      id: 1, 
      username: 'admin', 
      password: 'admin123', 
      fullName: 'Administrator',
      role: 'admin',
      avatar: null,
      createdAt: '2024-01-01',
      lastLogin: new Date().toISOString()
    },
    { 
      id: 2, 
      username: 'user', 
      password: 'user123', 
      fullName: 'Utente Demo',
      role: 'user',
      avatar: null,
      createdAt: '2024-01-15',
      lastLogin: '2024-06-28T10:30:00Z'
    },
    { 
      id: 3, 
      username: 'demo', 
      password: 'demo', 
      fullName: 'Demo User',
      role: 'user',
      avatar: null,
      createdAt: '2024-06-01',
      lastLogin: '2024-06-29T09:15:00Z'
    }
  ]);

  // Progetti (simulati con salvataggio locale)
  const [projects, setProjects] = useState([
    {
      id: 'proj_1',
      title: 'Video Corporate 2024',
      description: 'Presentazione aziendale per il nuovo anno',
      thumbnail: '/api/placeholder/300/200',
      createdAt: '2024-06-25T14:30:00Z',
      modifiedAt: '2024-06-29T16:45:00Z',
      duration: 120,
      clips: 15,
      status: 'completed',
      tags: ['corporate', 'presentation', '2024'],
      userId: 1,
      workflow: {
        idea: 'Video presentazione per nuovi clienti e investitori',
        script: { scenes: 4, characters: 2, completed: true },
        timeline: { tracks: 5, totalClips: 15, duration: 120 },
        exported: true
      },
      aiSuggestions: 8,
      exportSettings: { format: 'MP4', quality: '4K', fps: 30 }
    },
    {
      id: 'proj_2',
      title: 'Tutorial Prodotto',
      description: 'Guida all\'uso del software per utenti finali',
      thumbnail: '/api/placeholder/300/200',
      createdAt: '2024-06-20T09:15:00Z',
      modifiedAt: '2024-06-28T11:20:00Z',
      duration: 300,
      clips: 25,
      status: 'in_progress',
      tags: ['tutorial', 'software', 'help'],
      userId: 1,
      workflow: {
        idea: 'Tutorial completo per nuovi utenti del software',
        script: { scenes: 8, characters: 1, completed: true },
        timeline: { tracks: 5, totalClips: 25, duration: 300 },
        exported: false
      },
      aiSuggestions: 12,
      exportSettings: { format: 'MP4', quality: '1080p', fps: 30 }
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
        path: '/local/video/corporate_intro.mp4', type: 'video',
        thumbnail: '/api/placeholder/150/100', size: '45MB'
      },
      { 
        id: 'v2', name: 'Nature_Timelapse.mp4', duration: 30,
        tags: ['nature', 'timelapse', 'peaceful'], mood: 'calm',
        quality: 'high', resolution: '4K', style: 'cinematic',
        description: 'Beautiful nature timelapse with mountains',
        path: '/local/video/nature_timelapse.mp4', type: 'video',
        thumbnail: '/api/placeholder/150/100', size: '120MB'
      },
      { 
        id: 'v3', name: 'Tech_Animation.mp4', duration: 20,
        tags: ['technology', 'animation', 'modern'], mood: 'energetic',
        quality: 'high', resolution: '4K', style: 'animated',
        description: 'Sleek technology animation with circuits',
        path: '/local/video/tech_animation.mp4', type: 'video',
        thumbnail: '/api/placeholder/150/100', size: '80MB'
      }
    ],
    audioClips: [
      { 
        id: 'a1', name: 'Corporate_Music.mp3', duration: 120,
        tags: ['corporate', 'upbeat', 'motivational'], mood: 'energetic',
        genre: 'corporate', tempo: 'medium', instrument: 'synth',
        description: 'Motivational corporate background music',
        path: '/local/audio/corporate_music.mp3', type: 'audio', size: '8MB'
      },
      { 
        id: 'a2', name: 'Calm_Ambient.wav', duration: 180,
        tags: ['ambient', 'calm', 'relaxing'], mood: 'peaceful',
        genre: 'ambient', tempo: 'slow', instrument: 'pad',
        description: 'Soothing ambient background for narration',
        path: '/local/audio/calm_ambient.wav', type: 'audio', size: '25MB'
      }
    ],
    images: [
      { 
        id: 'i1', name: 'Corporate_Logo.png',
        tags: ['logo', 'corporate', 'brand'], style: 'modern',
        color: 'blue', type: 'image', resolution: '4K',
        description: 'Clean corporate logo design',
        path: '/local/images/corporate_logo.png', size: '2MB'
      }
    ],
    textTemplates: [
      { 
        id: 't1', name: 'Corporate_Title', 
        content: 'Your Success Story Begins Here',
        style: 'corporate', font: 'modern', animation: 'fade-in',
        duration: 3, description: 'Professional corporate title template', type: 'text'
      }
    ]
  });

  // Form stati
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('modified');
  const [isLoading, setIsLoading] = useState(false);

  // Progetto corrente con workflow completo
  const [projectData, setProjectData] = useState({
    title: 'Nuovo Progetto',
    description: '',
    idea: '',
    script: { 
      scenes: [], 
      characters: [], 
      dialogues: [],
      completed: false
    },
    storyboard: [],
    timeline: {
      tracks: [
        { id: 'video1', type: 'video', name: 'Video Principale', clips: [], visible: true, locked: false, volume: 100 },
        { id: 'video2', type: 'video', name: 'Video Overlay', clips: [], visible: true, locked: false, volume: 100 },
        { id: 'audio1', type: 'audio', name: 'Audio Principale', clips: [], visible: true, locked: false, volume: 80 },
        { id: 'audio2', type: 'audio', name: 'Musica di Sottofondo', clips: [], visible: true, locked: false, volume: 60 },
        { id: 'text1', type: 'text', name: 'Titoli e Testi', clips: [], visible: true, locked: false, volume: 100 }
      ],
      duration: 120,
      currentTime: 0,
      zoom: 1,
      snapToGrid: true
    },
    aiSuggestions: [],
    tags: [],
    metadata: {
      created: new Date().toISOString(),
      modified: new Date().toISOString(),
      aiVersion: '2.0',
      offline: true,
      userId: null,
      workflowProgress: {
        idea: false,
        script: false,
        storyboard: false,
        timeline: false,
        export: false
      }
    }
  });

  // Stati UI specifici per workflow
  const [selectedClips, setSelectedClips] = useState([]);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuggestionsCache, setAiSuggestionsCache] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedMediaTab, setSelectedMediaTab] = useState('video');
  const [storyboardPanels, setStoryboardPanels] = useState([]);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);

  // Theme colors
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
    offline: '#10B981',
    track: {
      video: '#7C3AED',
      audio: '#059669',
      text: '#F59E0B',
      image: '#EC4899'
    }
  };

  // Workflow steps con prerequisiti
  const workflowSteps = [
    { 
      id: 'idea', 
      label: 'Ideazione', 
      icon: '💡', 
      desc: 'Sviluppo concept',
      required: false,
      completed: () => projectData.idea.trim().length > 50
    },
    { 
      id: 'script', 
      label: 'Sceneggiatura', 
      icon: '📝', 
      desc: 'Script e personaggi',
      required: true,
      prerequisite: 'idea',
      completed: () => projectData.script.scenes.length > 0
    },
    { 
      id: 'storyboard', 
      label: 'Storyboard', 
      icon: '🎨', 
      desc: 'Visual planning',
      required: false,
      prerequisite: 'script',
      completed: () => storyboardPanels.length > 0
    },
    { 
      id: 'timeline', 
      label: 'Editing', 
      icon: '🎬', 
      desc: 'Timeline AI',
      required: true,
      prerequisite: 'script',
      completed: () => projectData.timeline.tracks.some(t => t.clips.length > 0)
    },
    { 
      id: 'export', 
      label: 'Export', 
      icon: '📤', 
      desc: 'Finalizzazione',
      required: true,
      prerequisite: 'timeline',
      completed: () => false
    }
  ];

  // Funzioni workflow
  const canAccessStep = (stepId) => {
    const step = workflowSteps.find(s => s.id === stepId);
    if (!step || !step.prerequisite) return true;
    
    const prerequisiteStep = workflowSteps.find(s => s.id === step.prerequisite);
    return prerequisiteStep ? prerequisiteStep.completed() : false;
  };

  const getStepStatus = (stepId) => {
    const step = workflowSteps.find(s => s.id === stepId);
    if (!step) return 'disabled';
    
    if (!canAccessStep(stepId)) return 'locked';
    if (step.completed()) return 'completed';
    if (currentWorkflowStep === stepId) return 'current';
    return 'available';
  };

  const goToNextStep = () => {
    const currentIndex = workflowSteps.findIndex(s => s.id === currentWorkflowStep);
    if (currentIndex < workflowSteps.length - 1) {
      const nextStep = workflowSteps[currentIndex + 1];
      if (canAccessStep(nextStep.id)) {
        setCurrentWorkflowStep(nextStep.id);
      }
    }
  };

  const goToPreviousStep = () => {
    const currentIndex = workflowSteps.findIndex(s => s.id === currentWorkflowStep);
    if (currentIndex > 0) {
      setCurrentWorkflowStep(workflowSteps[currentIndex - 1].id);
    }
  };

  // Funzioni AI locali
  const analyzeContentWithLocalAI = async (content, type) => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const suggestions = [
      {
        icon: '🎬',
        title: 'Struttura Consigliata',
        content: `Il video dovrebbe durare circa 60 secondi con 4 scene principali.`,
        mediaCount: `${localAIDatabase.videoClips.length} video suggeriti`
      },
      {
        icon: '🎯',
        title: 'Target Audience',
        content: `Ottimizzato per: Professionisti`,
        mediaCount: `Mood: professional`
      },
      {
        icon: '🎵',
        title: 'Audio Suggerito',
        content: `${localAIDatabase.audioClips.length} tracce audio compatibili trovate nel database locale.`,
        mediaCount: `${localAIDatabase.audioClips.length} tracce disponibili`
      }
    ];
    
    setProjectData(prev => ({ ...prev, aiSuggestions: suggestions }));
    setIsAnalyzing(false);
  };

  const generateScriptFromIdea = async () => {
    if (!projectData.idea.trim()) return;
    
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const scenes = [
      {
        id: 1,
        title: 'Apertura',
        description: 'Hook iniziale che introduce il tema principale',
        duration: 10,
        location: 'Determinato dal contenuto',
        mood: 'energetic',
        dialogue: 'Benvenuti nel futuro dell\'editing video!',
        visualNotes: 'Apertura dinamica con logo animato'
      },
      {
        id: 2,
        title: 'Sviluppo',
        description: 'Presentazione del contenuto e dei concetti chiave',
        duration: 20,
        location: 'Varie inquadrature',
        mood: 'professional',
        dialogue: 'Il nostro software offre strumenti avanzati per ogni esigenza.',
        visualNotes: 'Showcase delle funzionalità principali'
      },
      {
        id: 3,
        title: 'Climax',
        description: 'Momento culminante con il messaggio principale',
        duration: 10,
        location: 'Focus sul messaggio',
        mood: 'engaging',
        dialogue: 'Tutto questo con la potenza dell\'AI integrata.',
        visualNotes: 'Dimostrazione dell\'AI in azione'
      },
      {
        id: 4,
        title: 'Chiusura',
        description: 'Call to action e conclusioni',
        duration: 5,
        location: 'Chiusura forte',
        mood: 'motivational',
        dialogue: 'Inizia oggi il tuo viaggio nel video editing professionale.',
        visualNotes: 'Call to action con contatti'
      }
    ];

    const characters = [
      {
        id: 1,
        name: 'Narratore Principale',
        role: 'Voce guida',
        description: 'Guida lo spettatore attraverso il contenuto',
        voiceType: 'Professionale, chiaro',
        avatar: null
      }
    ];

    setProjectData(prev => ({
      ...prev,
      script: { 
        scenes, 
        characters, 
        dialogues: scenes.map(s => ({ sceneId: s.id, text: s.dialogue })),
        completed: true
      },
      metadata: {
        ...prev.metadata,
        workflowProgress: {
          ...prev.metadata.workflowProgress,
          script: true
        }
      }
    }));
    
    setIsAnalyzing(false);
  };

  const generateTimelineSuggestions = async () => {
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newTracks = [...projectData.timeline.tracks];
    
    if (newTracks[0].clips.length === 0 && projectData.script.scenes.length > 0) {
      let currentTime = 0;
      
      projectData.script.scenes.forEach((scene, index) => {
        const videoClip = {
          id: `scene_${scene.id}_${Date.now()}`,
          name: `${scene.title}.mp4`,
          type: 'video',
          startTime: currentTime,
          duration: scene.duration,
          sceneId: scene.id,
          source: 'ai_suggestion',
          mood: scene.mood,
          description: scene.description
        };
        newTracks[0].clips.push(videoClip);
        currentTime += scene.duration;
      });
    }
    
    if (newTracks[3].clips.length === 0) {
      const totalDuration = projectData.script.scenes.reduce((sum, scene) => sum + scene.duration, 0);
      const audioClip = {
        id: `bg_audio_${Date.now()}`,
        name: 'Background_Music.mp3',
        type: 'audio',
        startTime: 0,
        duration: totalDuration,
        source: 'ai_suggestion',
        volume: 30
      };
      newTracks[3].clips.push(audioClip);
    }
    
    if (newTracks[4].clips.length === 0 && projectData.script.scenes.length > 0) {
      let currentTime = 0;
      
      projectData.script.scenes.forEach((scene) => {
        const textClip = {
          id: `title_${scene.id}_${Date.now()}`,
          name: scene.title,
          type: 'text',
          startTime: currentTime,
          duration: 3,
          sceneId: scene.id,
          source: 'ai_suggestion',
          content: scene.title,
          style: 'modern'
        };
        newTracks[4].clips.push(textClip);
        currentTime += scene.duration;
      });
    }
    
    setProjectData(prev => ({
      ...prev,
      timeline: {
        ...prev.timeline,
        tracks: newTracks,
        duration: projectData.script.scenes.reduce((sum, scene) => sum + scene.duration, 0)
      },
      metadata: {
        ...prev.metadata,
        workflowProgress: {
          ...prev.metadata.workflowProgress,
          timeline: true
        }
      }
    }));
    
    setIsAnalyzing(false);
  };

  // Funzioni autenticazione
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    setTimeout(() => {
      const user = users.find(u => 
        u.username === loginForm.username && u.password === loginForm.password
      );

      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        setCurrentView('dashboard');
        user.lastLogin = new Date().toISOString();
        if (window.electronAPI) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      } else {
        setLoginError('Username o password non corretti');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setCurrentView('login');
    setCurrentProject(null);
    setLoginForm({ username: '', password: '' });
    if (window.electronAPI) {
      localStorage.removeItem('currentUser');
    }
  };

  // Funzioni progetti
  const createNewProject = () => {
    const newProject = {
      ...projectData,
      id: `proj_${Date.now()}`,
      title: `Progetto ${projects.length + 1}`,
      description: 'Nuovo progetto video AI',
      userId: currentUser.id,
      metadata: {
        ...projectData.metadata,
        userId: currentUser.id
      }
    };
    
    setProjects(prev => [newProject, ...prev]);
    setCurrentProject(newProject);
    setProjectData(newProject);
    setCurrentView('workspace');
    setCurrentWorkflowStep('idea');
  };

  const openProject = (project) => {
    setCurrentProject(project);
    setProjectData(project);
    setCurrentView('workspace');
    
    const progress = project.metadata?.workflowProgress || {};
    if (!progress.idea) {
      setCurrentWorkflowStep('idea');
    } else if (!progress.script) {
      setCurrentWorkflowStep('script');
    } else if (!progress.timeline) {
      setCurrentWorkflowStep('timeline');
    } else {
      setCurrentWorkflowStep('export');
    }
  };

  const deleteProject = (projectId) => {
    if (window.confirm('Sei sicuro di voler eliminare questo progetto?')) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
      if (currentProject?.id === projectId) {
        setCurrentProject(null);
        setCurrentView('dashboard');
      }
    }
  };

  // Filtri e ricerca
  const getFilteredProjects = () => {
    let filtered = projects.filter(p => p.userId === currentUser.id);
    
    if (filterStatus !== 'all') {
      filtered = filtered.filter(p => p.status === filterStatus);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'created':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'modified':
        default:
          return new Date(b.modifiedAt) - new Date(a.modifiedAt);
      }
    });
    
    return filtered;
  };

  // Utilità
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Oggi';
    if (diffDays === 1) return 'Ieri';
    if (diffDays < 7) return `${diffDays} giorni fa`;
    
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return colors.success;
      case 'in_progress': return colors.primary;
      case 'review': return colors.warning;
      case 'draft': return colors.textMuted;
      default: return colors.textMuted;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completato';
      case 'in_progress': return 'In Corso';
      case 'review': return 'In Revisione';
      case 'draft': return 'Bozza';
      default: return 'Sconosciuto';
    }
  };

  // Carica sessione salvata
  useEffect(() => {
    if (window.electronAPI) {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          setCurrentUser(user);
          setIsAuthenticated(true);
          setCurrentView('dashboard');
        } catch (error) {
          console.error('Errore caricamento sessione:', error);
          localStorage.removeItem('currentUser');
        }
      }
    }
  }, []);

  // Rendering componenti
  const renderLogin = () => (
    <div style={{
      height: '100vh',
      background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.surface} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.text
    }}>
      <div style={{
        background: colors.surface,
        borderRadius: '1.5rem',
        padding: '3rem',
        width: '100%',
        maxWidth: '450px',
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
            justifyContent: 'center'
          }}>
            <Video size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            margin: '0 0 0.5rem 0',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Software Audio Video V.2
          </h1>
          <p style={{
            color: colors.textMuted,
            margin: 0,
            fontSize: '1.1rem'
          }}>
            Editing Professionale con AI Integrata
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: colors.text
            }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User size={20} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: colors.textMuted
              }} />
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Inserisci username"
                style={{
                  width: '100%',
                  background: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.surfaceLight}`,
                  borderRadius: '0.75rem',
                  padding: '1rem 1rem 1rem 3rem',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.surfaceLight}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
              color: colors.text
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={20} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: colors.textMuted
              }} />
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Inserisci password"
                style={{
                  width: '100%',
                  background: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.surfaceLight}`,
                  borderRadius: '0.75rem',
                  padding: '1rem 1rem 1rem 3rem',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.surfaceLight}
                required
              />
            </div>
          </div>

          {loginError && (
            <div style={{
              background: colors.error + '22',
              color: colors.error,
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}>
              <AlertCircle size={16} />
              {loginError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              background: isLoading ? colors.textMuted : `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              padding: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {isLoading ? (
              <>
                <Activity size={20} style={{ animation: 'spin 1s linear infinite' }} />
                Accesso in corso...
              </>
            ) : (
              <>
                <ArrowRight size={20} />
                Accedi
              </>
            )}
          </button>
        </form>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: colors.bg,
          borderRadius: '1rem',
          border: `1px solid ${colors.surfaceLight}`
        }}>
          <h4 style={{
            margin: '0 0 1rem 0',
            color: colors.ai,
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            🎯 Credenziali Demo
          </h4>
          <div style={{ fontSize: '0.8rem', lineHeight: 1.5, color: colors.textMuted }}>
            <div><strong>Admin:</strong> admin / admin123</div>
            <div><strong>User:</strong> user / user123</div>
            <div><strong>Demo:</strong> demo / demo</div>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          fontSize: '0.8rem',
          color: colors.textMuted
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Shield size={12} color={colors.offline} />
            100% Offline
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Database size={12} color={colors.ai} />
            AI Locale
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
            justifyContent: 'center'
          }}>
            <Video size={20} color="white" />
          </div>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              margin: 0,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Software Audio Video V.2
            </h1>
            <p style={{ margin: 0, color: colors.textMuted, fontSize: '0.9rem' }}>
              Benvenuto, {currentUser.fullName}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            background: colors.ai + '22',
            color: colors.ai,
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Brain size={14} />
            AI Models: 5/5 Ready
          </div>

          <button
            onClick={handleLogout}
            style={{
              background: colors.error + '22',
              color: colors.error,
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}
          >
            <LogOut size={16} />
            Esci
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                background: colors.primary + '22',
                padding: '0.75rem',
                borderRadius: '0.75rem'
              }}>
                <Folder size={24} color={colors.primary} />
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>
                  {projects.filter(p => p.userId === currentUser.id).length}
                </div>
                <div style={{ color: colors.textMuted, fontSize: '0.9rem' }}>
                  Progetti Totali
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: colors.surface,
            borderRadius: '1rem',
            padding: '1.5rem',
            border: `1px solid ${colors.success}33`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                background: colors.success + '22',
                padding: '0.75rem',
                borderRadius: '0.75rem'
              }}>
                <CheckCircle size={24} color={colors.success} />
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', margin: 0 }}>
                  {projects.filter(p => p.userId === currentUser.id && p.status === 'completed').length}
                </div>
                <div style={{ color: colors.textMuted, fontSize: '0.9rem' }}>
                  Completati
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>I Tuoi Progetti</h2>
            <p style={{ margin: 0, color: colors.textMuted }}>
              Gestisci e organizza i tuoi progetti video
            </p>
          </div>

          <button
            onClick={createNewProject}
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.ai})`,
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            <Plus size={20} />
            Nuovo Progetto
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {getFilteredProjects().slice(0, 6).map(project => (
            <div
              key={project.id}
              style={{
                background: colors.surface,
                borderRadius: '1rem',
                border: `1px solid ${colors.surfaceLight}`,
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onClick={() => openProject(project)}
            >
              <div style={{
                height: '150px',
                background: `linear-gradient(135deg, ${colors.primary}22, ${colors.ai}22)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Video size={32} color={colors.primary} />
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{project.title}</h3>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: colors.textMuted }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: colors.textMuted }}>
                    {formatDate(project.modifiedAt)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                    style={{
                      background: colors.primary,
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    Apri
                  </button>
                </div>
              </div>
            </div>
          ))}

          {getFilteredProjects().length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '4rem 2rem',
              color: colors.textMuted
            }}>
              <FolderOpen size={64} style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h3 style={{ margin: '0 0 1rem 0' }}>
                Nessun progetto ancora
              </h3>
              <p style={{ margin: '0 0 2rem 0' }}>
                Inizia creando il tuo primo progetto video con AI
              </p>
              <button
                onClick={createNewProject}
                style={{
                  background: colors.primary,
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Plus size={20} />
                Crea Primo Progetto
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
                  