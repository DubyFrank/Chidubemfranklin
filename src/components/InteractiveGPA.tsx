import React, { useState } from 'react';
import { Plus, Trash2, Award, RotateCcw, Calculator, CheckCircle2 } from 'lucide-react';

interface CourseEntry {
  id: string;
  code: string;
  title: string;
  units: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
}

const GRADE_POINTS: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

const DEFAULT_COURSES: CourseEntry[] = [
  { id: '1', code: 'POL 201', title: 'Nigerian Government & Politics', units: 3, grade: 'A' },
  { id: '2', code: 'POL 203', title: 'Introduction to Political Theory', units: 3, grade: 'A' },
  { id: '3', code: 'CSC 101', title: 'Introduction to Computer Science', units: 2, grade: 'A' },
  { id: '4', code: 'GSS 211', title: 'Peace & Conflict Resolution', units: 2, grade: 'B' },
  { id: '5', code: 'POL 205', title: 'Comparative Politics', units: 3, grade: 'A' }
];

export const InteractiveGPA: React.FC = () => {
  const [courses, setCourses] = useState<CourseEntry[]>(DEFAULT_COURSES);

  const addCourse = () => {
    const newCourse: CourseEntry = {
      id: Date.now().toString(),
      code: `COURSE ${courses.length + 1}`,
      title: 'Course Module',
      units: 3,
      grade: 'A',
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof CourseEntry, value: any) => {
    setCourses(
      courses.map((c) => {
        if (c.id === id) {
          return { ...c, [field]: value };
        }
        return c;
      })
    );
  };

  const resetCourses = () => {
    setCourses(DEFAULT_COURSES);
  };

  // Calculations
  const totalUnits = courses.reduce((acc, curr) => acc + curr.units, 0);
  const totalPoints = courses.reduce((acc, curr) => acc + curr.units * (GRADE_POINTS[curr.grade] || 0), 0);
  const gpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : '0.00';
  const gpaNum = parseFloat(gpa);

  let honorsClassification = 'First Class Honours';
  let badgeColor = 'text-emerald-400 bg-emerald-950/70 border-emerald-500/50';

  if (gpaNum >= 4.5) {
    honorsClassification = 'First Class Honours (Distinction)';
    badgeColor = 'text-emerald-300 bg-emerald-950/80 border-emerald-500/60';
  } else if (gpaNum >= 3.5) {
    honorsClassification = 'Second Class Honours (Upper Division - 2:1)';
    badgeColor = 'text-cyan-300 bg-cyan-950/80 border-cyan-500/60';
  } else if (gpaNum >= 2.4) {
    honorsClassification = 'Second Class Honours (Lower Division - 2:2)';
    badgeColor = 'text-blue-300 bg-blue-950/80 border-blue-500/60';
  } else if (gpaNum >= 1.5) {
    honorsClassification = 'Third Class Honours';
    badgeColor = 'text-amber-300 bg-amber-950/80 border-amber-500/60';
  } else {
    honorsClassification = 'Academic Probation Warning';
    badgeColor = 'text-rose-300 bg-rose-950/80 border-rose-500/60';
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              COOU 5.0 CGPA Simulator
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-700/50">
                Live Interactive Demo
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Calculate semester Quality Points with genuine Nigerian university weighting (5.0 scale).
            </p>
          </div>
        </div>

        <button
          onClick={resetCourses}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2 rounded hover:bg-slate-800 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Sample</span>
        </button>
      </div>

      {/* GPA Result Card */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
            Calculated Semester GPA
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-300 font-mono">
              {gpa}
            </span>
            <span className="text-xs text-slate-500 font-mono">/ 5.00</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className={`px-3 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 ${badgeColor}`}>
            <Award className="w-3.5 h-3.5" />
            <span>{honorsClassification}</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-3">
            <span>Total Credit Units: <strong className="text-white">{totalUnits}</strong></span>
            <span>·</span>
            <span>Total Quality Points: <strong className="text-white">{totalPoints}</strong></span>
          </div>
        </div>
      </div>

      {/* Course Rows */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-300 flex items-center justify-between px-1">
          <span>Registered Courses &amp; Grades</span>
          <span className="text-[11px] text-slate-400">A=5, B=4, C=3, D=2, E=1, F=0</span>
        </div>

        <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-2 text-xs"
            >
              <input
                type="text"
                value={course.code}
                onChange={(e) => updateCourse(course.id, 'code', e.target.value)}
                className="w-24 bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-white font-mono uppercase text-xs focus:border-cyan-400 focus:outline-none"
                placeholder="Code"
              />

              <input
                type="text"
                value={course.title}
                onChange={(e) => updateCourse(course.id, 'title', e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-slate-300 text-xs focus:border-cyan-400 focus:outline-none hidden sm:block"
                placeholder="Course title"
              />

              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 hidden sm:inline">Units:</span>
                <select
                  value={course.units}
                  onChange={(e) => updateCourse(course.id, 'units', parseInt(e.target.value, 10))}
                  aria-label={`Credit units for ${course.code}`}
                  className="bg-slate-900 border border-slate-700/80 rounded-lg px-2 py-1.5 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                >
                  <option value={1}>1 Unit</option>
                  <option value={2}>2 Units</option>
                  <option value={3}>3 Units</option>
                  <option value={4}>4 Units</option>
                  <option value={6}>6 Units</option>
                </select>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 hidden sm:inline">Grade:</span>
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  aria-label={`Grade for ${course.code}`}
                  className="bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-cyan-300 font-bold text-xs font-mono focus:border-cyan-400 focus:outline-none"
                >
                  <option value="A">A (5 pts)</option>
                  <option value="B">B (4 pts)</option>
                  <option value="C">C (3 pts)</option>
                  <option value="D">D (2 pts)</option>
                  <option value="E">E (1 pt)</option>
                  <option value="F">F (0 pt)</option>
                </select>
              </div>

              <button
                onClick={() => removeCourse(course.id)}
                disabled={courses.length <= 1}
                aria-label={`Remove ${course.code}`}
                className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition disabled:opacity-30 disabled:hover:text-slate-500"
                title="Remove course"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addCourse}
          className="w-full py-2 rounded-xl border border-dashed border-slate-700/90 hover:border-cyan-500/80 text-slate-300 hover:text-cyan-300 text-xs font-medium flex items-center justify-center gap-1.5 transition bg-slate-950/40"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Another Course</span>
        </button>
      </div>

      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Quality Points = Credit Units × Grade Points
        </span>
        <span className="font-mono text-cyan-300">GPA = ΣPoints / ΣUnits</span>
      </div>
    </div>
  );
};
