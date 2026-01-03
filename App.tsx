
import React, { useState, useEffect, useMemo } from 'react';
import { Lesson, Mode, UserProgress } from './types';
import { LESSONS } from './data';
import { TOPICS, MASCOT_DIALOGUES } from './constants';
import KidView from './components/KidView';
import TeacherView from './components/TeacherView';
import Sidebar from './components/Sidebar';
import { BookOpen, User, Settings, GraduationCap, ChevronRight, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('kid');
  const [currentLessonId, setCurrentLessonId] = useState<number>(LESSONS[0].id);
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    activityScores: {}
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = useMemo(() => 
    LESSONS.find(l => l.id === currentLessonId) || LESSONS[0],
    [currentLessonId]
  );

  const handleLessonSelect = (id: number) => {
    setCurrentLessonId(id);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const handleCompleteActivity = (activityId: string, score: number) => {
    setProgress(prev => {
      const newScores = { ...prev.activityScores, [activityId]: score };
      
      // Check if all activities in current lesson are done
      const lessonActivities = currentLesson.activities.map(a => a.id);
      const isLessonDone = lessonActivities.every(id => newScores[id] !== undefined);
      
      const newCompleted = isLessonDone && !prev.completedLessons.includes(currentLessonId)
        ? [...prev.completedLessons, currentLessonId]
        : prev.completedLessons;

      return {
        completedLessons: newCompleted,
        activityScores: newScores
      };
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${mode === 'kid' ? 'bg-indigo-50' : 'bg-slate-50'}`}>
      {/* Top Navigation */}
      <header className={`sticky top-0 z-50 px-4 py-3 flex items-center justify-between shadow-md ${
        mode === 'kid' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800'
      }`}>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg md:hidden"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg shadow-inner">
              <BookOpen className={mode === 'kid' ? 'text-indigo-600' : 'text-slate-600'} size={20} />
            </div>
            <h1 className="font-bold text-lg md:text-xl hidden sm:block">Toán 3 - Kết nối tri thức</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-black/10 p-1 rounded-full items-center">
            <button 
              onClick={() => setMode('kid')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                mode === 'kid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-white/80'
              }`}
            >
              <User size={16} /> Con học
            </button>
            <button 
              onClick={() => setMode('teacher')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                mode === 'teacher' ? 'bg-white text-slate-800 shadow-sm' : mode === 'kid' ? 'text-white/80' : 'text-slate-500'
              }`}
            >
              <GraduationCap size={16} /> Giáo viên
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className={`
          fixed md:static inset-y-0 left-0 z-40 w-72 transition-transform duration-300 transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 bg-white border-r border-slate-200 overflow-y-auto
        `}>
          <Sidebar 
            currentLessonId={currentLessonId}
            onSelectLesson={handleLessonSelect}
            completedLessons={progress.completedLessons}
            topics={TOPICS}
            lessons={LESSONS}
          />
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col">
          <div className="max-w-4xl mx-auto flex-1 w-full">
            {mode === 'kid' ? (
              <KidView 
                lesson={currentLesson} 
                onCompleteActivity={handleCompleteActivity}
                activityScores={progress.activityScores}
              />
            ) : (
              <TeacherView 
                lesson={currentLesson}
                progress={progress}
              />
            )}
          </div>
          
          {/* Bottom Identity Branding */}
          <footer className="mt-12 pb-4 text-center">
            <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-medium opacity-80">
              © 2025 - CODE BY NGUYEN HAI DUONG_0966635663 - TOÁN 3 KẾT NỐI TRI THỨC
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
