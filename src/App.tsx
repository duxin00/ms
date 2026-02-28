import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
// 导入页面组件
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import BlogPage from './pages/BlogPage';
import AppNavPage from './pages/AppNavPage';

function App() {
    return (
      <Router>
        <Routes>
          {/* 默认路由：访问根路径跳转到欢迎页 */}
          <Route path="/" element={<Navigate to="/landing" />} />
          {/* 欢迎页 */}
          <Route path="/landing" element={<LandingPage />} />
          {/* 首页 */}
          <Route path="/home" element={<HomePage />} />
          {/* 简历详情页 */}
          <Route path="/resume" element={<ResumePage />} />
          {/* 博客详情页 */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/app-nav" element={<AppNavPage />} /> {/* 新增：应用导航路由 */}
          {/* 404路由：匹配未定义的路径，跳回欢迎页 */}
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;