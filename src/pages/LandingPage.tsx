import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const LandingPage: React.FC = () => {
  // 路由导航函数，用于跳转到首页
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="landing-title">Hi, I'm a Developer</h1>
      <p className="landing-subtitle">个人博客 & 简历展示站</p>
      <button 
        className="btn btn-primary"
        onClick={() => navigate('/home')} // 点击跳转到首页
      >
        进入首页
      </button>
    </div>
  );
};

export default LandingPage;