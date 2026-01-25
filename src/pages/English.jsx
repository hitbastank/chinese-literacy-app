import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
    gradeDefinitions,
    getWordsByGrade,
    getLessonWords,
    getLessonCount
} from '../data/englishWords';
import { speak, speakEnglish, stopSpeech, preloadVoices } from '../utils/speech';
import { markAsMastered, isMastered } from '../utils/storage';
import './English.css';

/**
 * 英语学习页面 - 年级分级版
 * Based on Scholastic 100 Words Kids Need to Read
 */
const English = () => {
    // State
    const [viewMode, setViewMode] = useState('grades'); // 'grades' | 'learn'
    const [expandedGrade, setExpandedGrade] = useState(1); // Default expand Grade 1
    const [selectedGrade, setSelectedGrade] = useState(1);
    const [selectedLesson, setSelectedLesson] = useState(0);
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLearned, setIsLearned] = useState(false);

    // Get current grade info
    const currentGradeInfo = gradeDefinitions[selectedGrade] || gradeDefinitions[1];

    // Load words when entering learn mode
    useEffect(() => {
        preloadVoices();
        if (viewMode === 'learn') {
            const lessonWords = getLessonWords(selectedGrade, selectedLesson);
            setWords(lessonWords);
            setCurrentIndex(0);
        }
    }, [selectedGrade, selectedLesson, viewMode]);

    const currentWord = words[currentIndex];
    const totalWords = words.length;

    // Check learned status when word changes
    useEffect(() => {
        if (currentWord) {
            setIsLearned(isMastered(currentWord.word));
        }
    }, [currentWord]);

    // Speech functions
    const handleSpeakEnglish = useCallback(async (text) => {
        if (isSpeaking) return;
        try {
            setIsSpeaking(true);
            const cleanText = text.replace(/\*\*/g, '');
            await speakEnglish(cleanText, { rate: 0.85 });
        } catch (error) {
            console.error('English speech error:', error);
        } finally {
            setIsSpeaking(false);
        }
    }, [isSpeaking]);

    const speakChinese = useCallback(async (text) => {
        if (isSpeaking) return;
        try {
            setIsSpeaking(true);
            await speak(text, { rate: 0.9 });
        } catch (error) {
            console.error('Chinese speech error:', error);
        } finally {
            setIsSpeaking(false);
        }
    }, [isSpeaking]);

    // Toggle Learned Status
    const toggleLearned = useCallback(() => {
        if (!currentWord) return;

        // Simple toggle logic: Mark as mastered if not already
        // Note: For now we only support marking AS learned. 
        // If it's already learned, we keep it learned to avoid accidental unmarking.
        // If user explicitly wants to unmark, we might add that later, but consistent with app flow:
        if (!isLearned) {
            markAsMastered(currentWord.word);
            setIsLearned(true);
        }
    }, [currentWord, isLearned]);

    // Navigation
    const goToPrev = useCallback(() => {
        stopSpeech();
        setIsSpeaking(false);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }, [currentIndex]);

    const goToNext = useCallback(() => {
        stopSpeech();
        setIsSpeaking(false);
        if (currentIndex < totalWords - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [currentIndex, totalWords]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (viewMode !== 'learn') return;
            if (e.key === 'ArrowLeft') goToPrev();
            else if (e.key === 'ArrowRight') goToNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToPrev, goToNext, viewMode]);

    // Cleanup
    useEffect(() => {
        return () => {
            stopSpeech();
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    // Render helper
    const renderSentence = (sentence) => {
        const parts = sentence.split(/\*\*(.+?)\*\*/);
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <strong key={index} className="highlight-word">{part}</strong>;
            }
            return part;
        });
    };

    // Toggle grade accordion
    const toggleGrade = (gradeNum) => {
        setExpandedGrade(expandedGrade === gradeNum ? null : gradeNum);
    };

    // Start a lesson
    const startLesson = (gradeNum, lessonIndex) => {
        setSelectedGrade(gradeNum);
        setSelectedLesson(lessonIndex);
        setViewMode('learn');
    };

    // --- RENDER VIEWS ---

    // 1. Grade Selection View (Accordion Style)
    if (viewMode === 'grades') {
        return (
            <div className="english-page">
                <div className="english-header">
                    <Link to="/" className="back-button">← Home</Link>
                    <div className="header-title">📚 100 Words Kids Need to Read</div>
                </div>

                <div className="grades-container">
                    <div className="grades-intro">
                        <h2>Select a Grade</h2>
                        <p>100 core words per grade, 10 words per lesson</p>
                    </div>

                    <div className="grades-list">
                        {Object.entries(gradeDefinitions).map(([gradeNumStr, grade]) => {
                            const gradeNum = parseInt(gradeNumStr);
                            const isExpanded = expandedGrade === gradeNum;
                            const totalLessons = getLessonCount(gradeNum);

                            return (
                                <div
                                    key={gradeNum}
                                    className={`grade-accordion-item ${isExpanded ? 'expanded' : ''} ${grade.comingSoon ? 'coming-soon' : ''}`}
                                >
                                    <div
                                        className="grade-accordion-header"
                                        onClick={() => !grade.comingSoon && toggleGrade(gradeNum)}
                                    >
                                        <div className="grade-header-left">
                                            <span className="grade-emoji">{grade.emoji}</span>
                                            <div className="grade-info-compact">
                                                <h3>{grade.label}</h3>
                                                <span className="grade-desc-compact">{grade.description}</span>
                                            </div>
                                        </div>
                                        <div className="grade-header-right">
                                            {grade.comingSoon ? (
                                                <span className="coming-soon-badge">Coming Soon</span>
                                            ) : (
                                                <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
                                            )}
                                        </div>
                                    </div>

                                    {isExpanded && !grade.comingSoon && (
                                        <div className="grade-lessons-list">
                                            {Array.from({ length: totalLessons }, (_, i) => {
                                                const startWord = i * 10 + 1;
                                                const endWord = Math.min((i + 1) * 10, grade.wordCount);
                                                return (
                                                    <div
                                                        key={i}
                                                        className="lesson-list-item"
                                                        onClick={() => startLesson(gradeNum, i)}
                                                    >
                                                        <span className="lesson-idx">Lesson {i + 1}</span>
                                                        <span className="lesson-range">Words {startWord}-{endWord}</span>
                                                        <span className="lesson-arrow">→</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // 2. Learning View
    if (!currentWord) return <div className="english-page"><div className="loading">Loading...</div></div>;

    return (
        <div className="english-page">
            {/* Header */}
            <div className="english-header">
                <button className="back-button" onClick={() => setViewMode('grades')}>
                    ← Dictionary
                </button>
                <div className="lesson-title">
                    {currentGradeInfo.emoji} {currentGradeInfo.label} • Lesson {selectedLesson + 1}
                </div>
                <div className="progress-info">
                    {currentIndex + 1} / {totalWords}
                </div>
            </div>

            {/* Main Word Card */}
            <div className="word-card-container">
                <div className={`word-card ${isLearned ? 'is-learned-glow' : ''}`}>
                    {/* Header: Grade & Learned Tag */}
                    <div className="card-top-tags">
                        <span className="card-tag grade-tag">{currentGradeInfo.label}</span>
                        <button
                            className={`card-tag learned-tag ${isLearned ? 'active' : ''}`}
                            onClick={toggleLearned}
                            title={isLearned ? "Already Learned" : "Mark as Learned"}
                        >
                            {isLearned ? '✅ Learned' : '○ Mark Learned'}
                        </button>
                    </div>

                    {/* Main Word Content */}
                    <div className="word-main-content">
                        <h1 className="word-display" onClick={() => handleSpeakEnglish(currentWord.word)}>
                            {currentWord.word}
                            <span className="speaker-btn">🔊</span>
                        </h1>
                        <div className="wordSub-info">
                            <span className="phonetic">{currentWord.phonetic}</span>
                            <span className="uppercase-hint">({currentWord.uppercase})</span>
                            <span className="pos-hint">{currentWord.partOfSpeech}</span>
                        </div>
                        <div className="meaning-display" onClick={() => speakChinese(currentWord.meaning)}>
                            {currentWord.meaning}
                        </div>
                    </div>

                    {/* Verb Forms (if applicable) */}
                    {currentWord.verbForms && (
                        <div className="verb-forms-inline">
                            <span>Now: {currentWord.verbForms.present}</span>
                            <span>Past: {currentWord.verbForms.past}</span>
                        </div>
                    )}

                    {/* Navigation Buttons INSIDE Card Footer */}
                    <div className="card-footer-nav">
                        <button
                            className="card-nav-btn prev"
                            onClick={goToPrev}
                            disabled={currentIndex === 0}
                        >
                            ← Prev
                        </button>
                        <button
                            className="card-nav-btn next"
                            onClick={goToNext}
                            disabled={currentIndex === totalWords - 1}
                        >
                            Next →
                        </button>
                    </div>
                </div>

                {/* Visual Hint Bubble (optional, outside card or distinct) */}
                <div className="visual-hint-bubble">
                    💡 {currentWord.visualHint}
                </div>
            </div>

            {/* Context Content (Story, Examples) */}
            <div className="context-content">
                {currentWord.story && (
                    <div className="context-section story-section">
                        <h3>📖 {currentWord.story.title}</h3>
                        <div className="story-scene-text">{currentWord.story.scene}</div>
                        <div
                            className="story-highlight"
                            onClick={() => handleSpeakEnglish(currentWord.story.text)}
                        >
                            {renderSentence(currentWord.story.text)}
                        </div>
                        <div
                            className="story-translation-sub"
                            onClick={() => speakChinese(currentWord.story.translation)}
                        >
                            {currentWord.story.translation}
                        </div>
                        <div className="scene-notes">
                            {currentWord.story.sceneDescription}
                        </div>
                    </div>
                )}

                <div className="context-section examples-section">
                    <h3>📝 Examples</h3>
                    {currentWord.examples.map((ex, i) => (
                        <div key={i} className={`example-row theme-${ex.theme}`}>
                            <div className="ex-en" onClick={() => handleSpeakEnglish(ex.sentence)}>
                                {renderSentence(ex.sentence)}
                            </div>
                            <div className="ex-cn" onClick={() => speakChinese(ex.translation)}>
                                {ex.translation}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Nav Bar at Bottom */}
            <div className="bottom-quick-nav">
                <div className="quick-dots">
                    {words.map((w, i) => (
                        <div
                            key={i}
                            className={`nav-dot ${i === currentIndex ? 'active' : ''} ${isMastered(w.word) ? 'mastered-dot' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>

            <div className="progress-line-bottom" style={{ width: `${((currentIndex + 1) / totalWords) * 100}%` }} />
        </div>
    );
};

export default English;
