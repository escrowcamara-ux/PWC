

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { CourseForm } from '../types';

const CoursePlayer: React.FC = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = COURSES.find(c => c.id === courseId);
    
    // State for interactive sidebar
    const [selectedForm, setSelectedForm] = useState<CourseForm | null>(null);
    const [activeVideo, setActiveVideo] = useState<string | undefined>(course?.lessons?.[0]?.videoUrl);
    const [activeLessonTitle, setActiveLessonTitle] = useState<string | undefined>(course?.lessons?.[0]?.title);

    useEffect(() => {
        if (course?.lessons && course.lessons.length > 0) {
            setActiveVideo(course.lessons[0].videoUrl);
            setActiveLessonTitle(course.lessons[0].title);
        }
    }, [course]);

    const handleLessonClick = (videoUrl?: string, title?: string) => {
        if (videoUrl) setActiveVideo(videoUrl);
        if (title) setActiveLessonTitle(title);
    };

    if (!course) {
        return (
            <div className="flex items-center justify-center h-64 text-slate-400">
                Course not found. <button onClick={() => navigate('/curriculum')} className="ml-2 underline text-gold-400">Go back</button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto pb-12 animate-fade-in">
             <button 
                onClick={() => navigate('/curriculum')}
                className="text-slate-400 hover:text-white text-sm mb-6 flex items-center gap-2 transition-colors"
            >
                 ← Back to Curriculum
             </button>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                 
                 {/* --- LEFT COLUMN: CONTENT PLAYER --- */}
                 <div className="lg:col-span-2 space-y-6">
                     {/* Video Player Container */}
                     <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative group">
                         {activeVideo ? (
                             <iframe 
                                 width="100%" 
                                 height="100%" 
                                 src={activeVideo} 
                                 title="Course Video" 
                                 frameBorder="0" 
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                 allowFullScreen
                                 className="w-full h-full"
                             ></iframe>
                         ) : (
                             <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
                                 <div className="w-20 h-20 bg-white/5 backdrop-blur rounded-full flex items-center justify-center border border-white/10 mb-4">
                                    <svg className="w-8 h-8 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                 </div>
                                 <p className="text-slate-500 text-sm">Select a lesson to begin playback</p>
                             </div>
                         )}
                     </div>

                     {/* Lesson Header */}
                     <div className="border-b border-slate-700 pb-6">
                         <div className="flex justify-between items-start mb-2">
                             <div>
                                 <h2 className="text-gold-400 text-sm uppercase tracking-widest font-bold mb-1">{course.title}</h2>
                                 <h1 className="text-3xl font-serif text-white">{activeLessonTitle || course.title}</h1>
                             </div>
                             <button className="text-black bg-gold-500 hover:bg-gold-400 px-6 py-2 rounded text-xs uppercase tracking-wider font-bold transition-colors">
                                 Mark Complete
                             </button>
                         </div>
                         <p className="text-slate-400 leading-relaxed mt-4 max-w-3xl">{course.description}</p>
                     </div>
                     
                     {/* LESSON LIST */}
                     {course.lessons && course.lessons.length > 0 && (
                         <div className="mt-8">
                             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                 <span className="w-1 h-6 bg-gold-500 rounded-full"></span>
                                 Module Breakdown
                             </h3>
                             <div className="space-y-4">
                                 {course.lessons.map((lesson, idx) => (
                                     <div 
                                        key={idx} 
                                        className={`p-6 rounded-lg border transition-all cursor-pointer group ${activeLessonTitle === lesson.title ? 'bg-slate-800 border-gold-500/50 shadow-lg' : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800'}`}
                                        onClick={() => handleLessonClick(lesson.videoUrl, lesson.title)}
                                    >
                                         <div className="flex justify-between items-center mb-2">
                                             <h4 className={`font-bold text-lg ${activeLessonTitle === lesson.title ? 'text-gold-400' : 'text-slate-200'}`}>
                                                 {idx + 1}. {lesson.title}
                                             </h4>
                                             <span className="text-xs text-slate-500 bg-black/30 px-2 py-1 rounded">{lesson.duration || '20:00'}</span>
                                         </div>
                                         <div className="pl-4 border-l border-slate-700 mt-2">
                                             <ul className="space-y-1">
                                                 {lesson.topics.map((topic, tIdx) => (
                                                     <li key={tIdx} className="text-xs text-slate-400 flex items-center gap-2">
                                                         <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                                                         {topic}
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                         {activeLessonTitle === lesson.title && (
                                             <div className="mt-4 text-xs text-gold-500 font-bold uppercase tracking-wider animate-pulse">
                                                 ▶ Now Playing
                                             </div>
                                         )}
                                     </div>
                                 ))}
                             </div>
                         </div>
                     )}
                 </div>

                 {/* --- RIGHT COLUMN: FORMS & RESOURCES --- */}
                 <div className="lg:col-span-1 space-y-6">
                     
                     {/* FORM BRIEFING CARD (Dynamic) */}
                     <div className="glass-panel p-6 rounded-xl border border-gold-500/20 bg-gradient-to-b from-slate-900 to-black min-h-[300px] flex flex-col relative overflow-hidden">
                         {/* Background Effect */}
                         <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl"></div>
                         
                         <h3 className="font-serif font-bold text-white text-xl mb-4 border-b border-slate-800 pb-2">
                             Intel Briefing
                         </h3>

                         {selectedForm ? (
                             <div className="animate-fade-in flex-1 flex flex-col">
                                 <h4 className="text-gold-400 font-bold text-lg mb-2">{selectedForm.title}</h4>
                                 
                                 <div className="mb-4">
                                     <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Definition</span>
                                     <p className="text-slate-300 text-sm italic border-l-2 border-gold-500/50 pl-3 mt-1">"{selectedForm.definition}"</p>
                                 </div>
                                 
                                 <div className="mb-6 flex-1">
                                     <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Purpose</span>
                                     <p className="text-slate-400 text-sm mt-1 leading-relaxed">{selectedForm.purpose}</p>
                                 </div>

                                 <button className="w-full py-3 bg-white text-black hover:bg-gold-400 font-bold uppercase text-xs tracking-widest rounded transition-colors flex items-center justify-center gap-2 mt-auto">
                                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                     Download PDF
                                 </button>
                             </div>
                         ) : (
                             <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                                 <div className="text-4xl mb-2">📂</div>
                                 <p className="text-sm text-slate-400">Select a document from the list below to view its intelligence briefing.</p>
                             </div>
                         )}
                     </div>

                     {/* FORMS LIST */}
                     {course.forms && course.forms.length > 0 && (
                         <div className="glass-panel rounded-xl overflow-hidden flex flex-col border border-slate-700">
                             <div className="p-4 border-b border-slate-700 bg-slate-800/80 backdrop-blur flex justify-between items-center">
                                 <h3 className="font-bold text-white uppercase tracking-wider text-xs">Available Documents</h3>
                                 <span className="bg-slate-900 text-gold-500 text-[10px] font-bold px-2 py-1 rounded-full border border-slate-700">{course.forms.length} Files</span>
                             </div>
                             <div className="flex-1 overflow-y-auto max-h-[400px] p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
                                 {course.forms.map((form, i) => (
                                     <div 
                                        key={i} 
                                        onClick={() => setSelectedForm(form)}
                                        className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all border ${selectedForm === form ? 'bg-gold-900/20 border-gold-500/30' : 'hover:bg-slate-800 border-transparent'}`}
                                     >
                                         <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold border ${selectedForm === form ? 'bg-gold-500 text-black border-gold-500' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                                             DOC
                                         </div>
                                         <div className="flex-1 min-w-0">
                                             <p className={`text-sm font-medium truncate ${selectedForm === form ? 'text-white' : 'text-slate-400'}`}>{form.title}</p>
                                         </div>
                                         {selectedForm === form && <span className="text-gold-500 text-xs">●</span>}
                                     </div>
                                 ))}
                             </div>
                         </div>
                     )}
                 </div>
             </div>
        </div>
    );
};

export default CoursePlayer;