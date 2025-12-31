import ProgressTracker from '../components/ProgressTracker';
import './Progress.css';

/**
 * 进度页面
 */
const Progress = () => {
    const handleCharacterClick = (char) => {
        console.log('Character clicked:', char);
        // 可以在这里添加点击汉字后的操作，比如跳转到学习页面
    };

    return (
        <div className="page-container progress-page">
            <div className="page-title">
                <h1 className="pixel-text">🏆 学习进度</h1>
                <p className="page-subtitle">查看你的学习成果和成就</p>
            </div>

            <ProgressTracker onCharacterClick={handleCharacterClick} />
        </div>
    );
};

export default Progress;
