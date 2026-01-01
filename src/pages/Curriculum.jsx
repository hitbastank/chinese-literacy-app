import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllLevels, getLessonsByLevel } from '../data/curriculum';
import './Curriculum.css';

/**
 * 课程目录页面
 * 展示10个难度级别和每个级别的课程列表
 */
const Curriculum = () => {
    const [expandedLevel, setExpandedLevel] = useState(1);
    const levels = getAllLevels();

    const toggleLevel = (level) => {
        setExpandedLevel(expandedLevel === level ? null : level);
    };

    // 难度对应的颜色和图标
    const levelStyles = {
        1: { color: '#4CAF50', icon: '🌱', gradient: 'linear-gradient(135deg, #4CAF50, #8BC34A)' },
        2: { color: '#8BC34A', icon: '🌿', gradient: 'linear-gradient(135deg, #8BC34A, #CDDC39)' },
        3: { color: '#CDDC39', icon: '🌻', gradient: 'linear-gradient(135deg, #CDDC39, #FFEB3B)' },
        4: { color: '#FFEB3B', icon: '⭐', gradient: 'linear-gradient(135deg, #FFEB3B, #FFC107)' },
        5: { color: '#FFC107', icon: '🔥', gradient: 'linear-gradient(135deg, #FFC107, #FF9800)' },
        6: { color: '#FF9800', icon: '💎', gradient: 'linear-gradient(135deg, #FF9800, #FF5722)' },
        7: { color: '#FF5722', icon: '⚔️', gradient: 'linear-gradient(135deg, #FF5722, #E91E63)' },
        8: { color: '#E91E63', icon: '🛡️', gradient: 'linear-gradient(135deg, #E91E63, #9C27B0)' },
        9: { color: '#9C27B0', icon: '👑', gradient: 'linear-gradient(135deg, #9C27B0, #673AB7)' },
        10: { color: '#673AB7', icon: '🐉', gradient: 'linear-gradient(135deg, #673AB7, #3F51B5)' }
    };

    return (
        <div className="page-container curriculum-page">
            <div className="page-title">
                <h1 className="pixel-text">📚 课程目录</h1>
                <p className="page-subtitle">选择难度级别，开始你的识字冒险！</p>
            </div>

            <div className="levels-container">
                {levels.map(levelConfig => {
                    const style = levelStyles[levelConfig.level];
                    const lessons = getLessonsByLevel(levelConfig.level);
                    const isExpanded = expandedLevel === levelConfig.level;

                    return (
                        <div
                            key={levelConfig.level}
                            className={`level-card ${isExpanded ? 'expanded' : ''}`}
                        >
                            <div
                                className="level-header"
                                onClick={() => toggleLevel(levelConfig.level)}
                                style={{ background: style.gradient }}
                            >
                                <div className="level-icon">{style.icon}</div>
                                <div className="level-info">
                                    <h2 className="level-title pixel-text">
                                        第{levelConfig.level}级 · {levelConfig.title}
                                    </h2>
                                    <p className="level-description">{levelConfig.description}</p>
                                    <div className="level-meta">
                                        <span className="chars-count">每课 {levelConfig.charsPerLesson} 字</span>
                                        <span className="lessons-count">{lessons.length} 课</span>
                                    </div>
                                </div>
                                <div className="level-expand-icon">
                                    {isExpanded ? '▼' : '▶'}
                                </div>
                            </div>

                            {isExpanded && (
                                <div className="lessons-list">
                                    {lessons.length > 0 ? (
                                        lessons.map(lesson => (
                                            <Link
                                                key={lesson.id}
                                                to={`/lesson/${lesson.id}`}
                                                className="lesson-item"
                                            >
                                                <span className="lesson-id">{lesson.id}</span>
                                                <span className="lesson-title">{lesson.title}</span>
                                                <span className="lesson-chars-count">
                                                    {lesson.characters.length} 字
                                                </span>
                                                <span className="lesson-arrow">→</span>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="no-lessons">
                                            <span className="pixel-text">🚧 课程开发中...</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="curriculum-footer">
                <Link to="/" className="mc-button">
                    ◀ 返回首页
                </Link>
            </div>
        </div>
    );
};

export default Curriculum;
