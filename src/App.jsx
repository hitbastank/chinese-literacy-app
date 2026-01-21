import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Games from './pages/Games';
import Progress from './pages/Progress';
import Curriculum from './pages/Curriculum';
import Lesson from './pages/Lesson';
import { initFromCloud } from './utils/storage';

/**
 * 识字冒险 - 中文识字学习应用
 * 为7岁儿童设计，Minecraft像素风格
 */
function App() {
    // 应用启动时从云端加载数据
    useEffect(() => {
        initFromCloud().then(() => {
            console.log('✅ 数据同步完成');
        });
    }, []);
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/games/*" element={<Games />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/lesson/:lessonId" element={<Lesson />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
