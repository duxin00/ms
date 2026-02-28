import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-page container">
      <h2 className="empty-title">技术博客</h2>
      <p className="empty-desc">博客内容正在开发中，敬请期待...</p>
      <button 
        className="btn btn-primary"
        onClick={() => navigate('/home')}
      >
        返回首页
      </button>
    </div>
  );
};

export default BlogPage;