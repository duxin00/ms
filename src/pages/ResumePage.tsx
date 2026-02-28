import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-page container">
      <h2 className="empty-title">我的简历</h2>
      <p className="empty-desc">简历内容正在开发中，敬请期待...</p>
      <button 
        className="btn btn-primary"
        onClick={() => navigate('/home')}
      >
        返回首页
      </button>
    </div>
  );
};

export default ResumePage;