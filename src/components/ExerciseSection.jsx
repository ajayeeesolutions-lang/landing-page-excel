import React, { useState } from 'react';
import { FileSpreadsheet, Download, CheckCircle, XCircle, HelpCircle, Award, RotateCcw, ArrowRight, Sparkles, BookOpen, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { EXERCISE_FILES } from '../data/ebooksData';

export default function ExerciseSection({ onOpenCheckout }) {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' or 'files'
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);

  const handleSelectOption = (questionId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected !== undefined && q.options[selected]?.isCorrect) {
        correctCount += 1;
      }
    });
    return correctCount;
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
    const score = calculateScore();
    if (score >= 3) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // silent fail
      }
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setCurrentQuizIdx(0);
  };

  const currentQ = QUIZ_QUESTIONS[currentQuizIdx];
  const userChoiceIdx = selectedAnswers[currentQ.id];
  const answeredCount = Object.keys(selectedAnswers).length;
  const score = calculateScore();

  return (
    <section id="latihan-soal" className="py-20 bg-slate-900/60 relative border-t border-slate-800">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Praktik Nyata Dunia Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latihan Soal &amp; Kasus Ujian Masuk Kerja
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Jangan hanya menghafal rumus! Uji pemahamanmu dengan kuis interaktif dan download template file Excel latihan 
            yang sering keluar pada tes seleksi kerja &amp; perangkat desa.
          </p>

          {/* Switcher Tab */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>1. Kuis Interaktif Rumus</span>
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'files'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>2. Download File Excel (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            
            {/* Progress & Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
                  Soal {currentQuizIdx + 1} dari {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">Terjawab: {answeredCount}/{QUIZ_QUESTIONS.length}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                {QUIZ_QUESTIONS.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuizIdx(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                      currentQuizIdx === idx
                        ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-400/40'
                        : selectedAnswers[q.id] !== undefined
                        ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>
              {currentQ.hint && !showResults && (
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                  <span className="text-amber-400 font-semibold">💡 Petunjuk:</span> {currentQ.hint}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userChoiceIdx === optIdx;
                let optionStyle = 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-850';

                if (showResults) {
                  if (opt.isCorrect) {
                    optionStyle = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 ring-1 ring-emerald-500';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'bg-rose-950/60 border-rose-500/80 text-rose-200 ring-1 ring-rose-500';
                  } else {
                    optionStyle = 'bg-slate-900/50 border-slate-850 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-emerald-950/40 border-emerald-500 text-white ring-1 ring-emerald-500/50';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    disabled={showResults}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <div>
                        <span>{opt.text}</span>
                        {showResults && (opt.isCorrect || isSelected) && (
                          <p className="text-xs mt-2 pt-2 border-t border-white/10 text-slate-300 font-normal">
                            <strong>Penjelasan:</strong> {opt.explanation}
                          </p>
                        )}
                      </div>
                    </div>

                    {showResults && opt.isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {showResults && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation & Submit */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentQuizIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentQuizIdx === 0}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-40"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => setCurrentQuizIdx(prev => Math.min(QUIZ_QUESTIONS.length - 1, prev + 1))}
                  disabled={currentQuizIdx === QUIZ_QUESTIONS.length - 1}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 hover:bg-slate-800 disabled:opacity-40"
                >
                  Selanjutnya
                </button>
              </div>

              {!showResults ? (
                <button
                  onClick={handleFinishQuiz}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md transition-all"
                >
                  Lihat Hasil Kuis ({answeredCount}/{QUIZ_QUESTIONS.length})
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Ulangi Kuis
                </button>
              )}
            </div>

            {/* RESULTS SCORE CARD */}
            {showResults && (
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/40 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white">
                  Skor Kamu: {score} dari {QUIZ_QUESTIONS.length} ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}%)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  {score === 5 
                    ? '🎉 Sempurna! Pemahaman rumus dasar Excel kamu sudah sangat bagus. Modul 72 Rumus akan melengkapi skill advance-mu!'
                    : score >= 3
                    ? '👍 Bagus! Kamu sudah punya fondasi, namun masih ada beberapa jebakan rumus. E-Book 72 Rumus & Belajar dari Nol akan bikin kamu 100% siap tes kerja!'
                    : '💡 Jangan berkecil hati! Excel itu gampang kalau dipelajari urut dari dasar. E-book ini sengaja dibuat agar kamu bisa menguasainya dari nol.'}
                </p>

                <div className="mt-5">
                  <button
                    onClick={() => onOpenCheckout()}
                    className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/30 transition-all"
                  >
                    Pelajari Semua Pembahasan &amp; Rumus — Rp 30.000
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: EXCEL SPREADSHEET FILES DOWNLOAD */}
        {activeTab === 'files' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXERCISE_FILES.map((file, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {file.topic}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{file.size}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FileSpreadsheet className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                          {file.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {file.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Tingkat: <strong className="text-slate-200">{file.difficulty}</strong>
                    </span>
                    <a
                      href={file.downloadUrl}
                      download={file.filename}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-emerald-600 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .xlsx</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Bonus notice */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h5 className="font-bold text-white text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Kunci Jawaban &amp; File Pembahasan Lengkap</span>
                </h5>
                <p className="text-xs text-slate-400 mt-1">
                  Kunci jawaban rumus otomatis dan 10+ studi kasus tambahan disertakan langsung di dalam E-Book seharga Rp 30.000.
                </p>
              </div>

              <button
                onClick={() => onOpenCheckout()}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex-shrink-0 shadow-md"
              >
                Beli E-Book Rp 30rb
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
