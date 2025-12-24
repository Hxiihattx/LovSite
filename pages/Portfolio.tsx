
import React, { useState, useEffect, useRef } from 'react';
import { SectionBadge, Button } from '../components/UI';

interface Project {
  id: number;
  title: string;
  projectName: string;
  category: string;
  img: string;
  link: string;
  hidden?: boolean;
}

// Cleared initial projects as requested
const INITIAL_PROJECTS: Project[] = [];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  // Initialize from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('lovable_portfolio_v1');
    if (saved && JSON.parse(saved).length > 0) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(INITIAL_PROJECTS);
    }
  }, []);

  const saveToLocal = (data: Project[]) => {
    localStorage.setItem('lovable_portfolio_v1', JSON.stringify(data));
  };

  const handleUpdateProject = (id: number, field: keyof Project, value: any) => {
    setProjects(prev => {
      const next = prev.map(p => p.id === id ? { ...p, [field]: value } : p);
      saveToLocal(next);
      return next;
    });
  };

  const handleToggleHide = (id: number) => {
    setProjects(prev => {
      const next = prev.map(p => p.id === id ? { ...p, hidden: !p.hidden } : p);
      saveToLocal(next);
      return next;
    });
  };

  const handleImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        handleUpdateProject(id, 'img', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProject = (id: number) => {
    const projectToDelete = projects.find(p => p.id === id);
    if (!projectToDelete) return;

    if (window.confirm(`Are you sure you want to delete "${projectToDelete.title}"?`)) {
      setProjects(prev => {
        const next = prev.filter(p => p.id !== id);
        saveToLocal(next);
        return next;
      });
    }
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: 'New Brand',
      projectName: 'Short Description',
      category: 'Website Design',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=webp&q=70&w=1200',
      link: 'https://',
      hidden: false
    };
    setProjects(prev => {
      const next = [newProject, ...prev]; // Always add to top
      saveToLocal(next);
      return next;
    });
  };

  // Drag and Drop Logic
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) {
      setDraggedIndex(null);
      return;
    }
    
    setProjects(prev => {
      const next = [...prev];
      const [draggedItem] = next.splice(draggedIndex, 1);
      next.splice(index, 0, draggedItem);
      saveToLocal(next);
      return next;
    });
    setDraggedIndex(null);
  };

  const categories = ['All', 'Website Design', 'Content Design'];
  
  // Public view: only show non-hidden projects
  const visibleProjects = projects.filter(p => !p.hidden);
  const filteredProjects = filter === 'All' ? visibleProjects : visibleProjects.filter(p => p.category === filter);

  return (
    <div className="pt-32 md:pt-48 pb-24 relative min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <SectionBadge>Our Work</SectionBadge>
          <h1 className="tracking-tightest mb-6 home-hero-h1">A curated digital portfolio.</h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            High-performance digital products built with Viennese precision and strategic impact.
          </p>
        </div>

        {isEditing ? (
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-gray-100 gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-black">Manage Portfolio</h2>
              <div className="flex gap-4 w-full md:w-auto">
                <Button onClick={handleAddProject} variant="ghost" className="text-xs flex-grow md:flex-grow-0 border-gray-300 transition-all hover:bg-gray-50 hover:border-black">+ Add Project</Button>
                <Button onClick={() => setIsEditing(false)} variant="primary" className="text-xs flex-grow md:flex-grow-0 shadow-xl">Done Editing</Button>
              </div>
            </div>

            {projects.length === 0 ? (
              <div className="text-center py-32 bg-gray-50 rounded-[32px] border border-dashed border-gray-200">
                <p className="text-gray-400 mb-6 font-medium">Your portfolio is empty. Start by adding a project.</p>
                <Button onClick={handleAddProject} variant="ghost" className="text-xs">+ Add Your First Project</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    className={`bg-[#F9FAFB] rounded-[24px] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-8 items-start shadow-sm relative group transition-all duration-200 ${draggedIndex === index ? 'opacity-40 scale-[0.98]' : 'opacity-100'} ${project.hidden ? 'border-dashed border-gray-300 bg-gray-50' : ''}`}
                  >
                    {/* Drag Handle */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 cursor-grab active:cursor-grabbing p-2 transition-opacity hidden md:block">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                    </div>

                    {/* Left Side: Image */}
                    <div className={`relative w-full md:w-64 aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200 shrink-0 shadow-inner group/img ${project.hidden ? 'opacity-50' : ''}`}>
                      <img src={project.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                      <button 
                        type="button"
                        draggable={false}
                        onClick={() => fileInputRefs.current[project.id]?.click()}
                        className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center flex-col gap-2 backdrop-blur-[2px]"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Upload Image</span>
                      </button>
                      <input 
                        type="file" 
                        accept="image/*"
                        ref={el => fileInputRefs.current[project.id] = el}
                        onChange={(e) => handleImageUpload(project.id, e)}
                        className="hidden" 
                      />
                      {project.hidden && (
                        <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest z-10">
                          Hidden from public
                        </div>
                      )}
                    </div>
                    
                    {/* Right Side: Inputs */}
                    <div className={`flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full ${project.hidden ? 'opacity-60' : ''}`}>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Brand Title</label>
                        <input 
                          value={project.title} 
                          onChange={(e) => handleUpdateProject(project.id, 'title', e.target.value)}
                          className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-medium text-black focus:border-black focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Project Description</label>
                        <input 
                          value={project.projectName} 
                          onChange={(e) => handleUpdateProject(project.id, 'projectName', e.target.value)}
                          className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-medium text-black focus:border-black focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Project Link (Live Website URL)</label>
                        <input 
                          placeholder="https://example.at"
                          value={project.link || ''} 
                          onChange={(e) => handleUpdateProject(project.id, 'link', e.target.value)}
                          className="w-full bg-transparent border-b border-gray-300 py-2 text-base text-black focus:border-black focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Category</label>
                        <select 
                          value={project.category}
                          onChange={(e) => handleUpdateProject(project.id, 'category', e.target.value)}
                          className="w-full bg-transparent border-b border-gray-300 py-2 text-lg font-medium text-black focus:border-black focus:outline-none appearance-none cursor-pointer"
                        >
                          <option>Website Design</option>
                          <option>Content Design</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Image Link (Unsplash URL)</label>
                        <input 
                          value={project.img.startsWith('data:') ? 'Custom Image Uploaded' : project.img} 
                          onChange={(e) => handleUpdateProject(project.id, 'img', e.target.value)}
                          disabled={project.img.startsWith('data:')}
                          className={`w-full bg-transparent border-b border-gray-300 py-2 text-sm text-gray-600 focus:border-black focus:outline-none transition-colors ${project.img.startsWith('data:') ? 'italic text-gray-400' : ''}`}
                        />
                      </div>
                    </div>

                    {/* Actions Area */}
                    <div className="absolute top-4 right-4 z-[30] flex gap-3">
                      <button 
                        type="button"
                        draggable={false}
                        onMouseDown={(e) => e.stopPropagation()} 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleToggleHide(project.id);
                        }}
                        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all shadow-md active:scale-90 border-2 ${project.hidden ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black'}`}
                        title={project.hidden ? "Show on frontend" : "Hide from frontend"}
                      >
                        {project.hidden ? (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        ) : (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        )}
                      </button>

                      <button 
                        type="button"
                        draggable={false}
                        onMouseDown={(e) => e.stopPropagation()} 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDeleteProject(project.id);
                        }}
                        className="w-12 h-12 flex items-center justify-center text-red-500 bg-white border-2 border-red-500 rounded-full hover:bg-red-50 transition-all shadow-md active:scale-90 group/del"
                        title="Delete Project"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/del:scale-110 transition-transform">
                          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-16 pb-4 md:justify-center -mx-6 px-6 md:mx-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2.5 text-xs font-medium transition-all duration-300 border whitespace-nowrap shrink-0 ${
                    filter === cat ? 'bg-black text-white border-black shadow-lg' : 'bg-transparent text-gray-600 border-gray-300 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 transition-all duration-500">
              {filteredProjects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block cursor-pointer no-underline text-inherit"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 relative shadow-sm bg-gray-100">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-baseline px-1">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight">{project.title}</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{project.projectName}</p>
                    </div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">{project.category}</span>
                  </div>
                </a>
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium">No projects available at the moment.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Admin Pencil Toggle */}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[70] group"
      >
        <span className="absolute right-full mr-4 bg-black text-white px-4 py-1.5 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase tracking-widest font-bold whitespace-nowrap shadow-xl">
          {isEditing ? 'View Mode' : 'Manage Portfolio'}
        </span>
        {isEditing ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        )}
      </button>
    </div>
  );
};

export default Portfolio;
