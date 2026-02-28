import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    // 功能卡片数据
    const features = [
        {
            icon: '📄',
            title: '我的简历',
            desc: '查看我的专业技能、工作经历和项目经验',
            path: '/resume'
        },
        {
            icon: '✍️',
            title: '技术博客',
            desc: '记录我的学习心得、技术总结和踩坑经验',
            path: '/blog'
        },
        {
            icon: '🧭',
            title: '应用导航',
            desc: '常用开发工具、学习资源和网站的快速导航',
            path: '/app-nav'
        },
        {
            icon: '🔧',
            title: '项目作品集',
            desc: '展示我开发的各类项目，包含源码和演示',
            path: '/projects' // 可扩展：后续添加项目详情页
        },
        {
            icon: '📞',
            title: '联系我',
            desc: '我的联系方式、社交账号和反馈渠道',
            path: '/contact' // 可扩展：后续添加联系页
        }
    ];

    return (
        <div className="home-page container">
            <div className="home-header">
                <h2 className="home-title">我的个人站点</h2>
                <p className="home-subtitle">记录成长，分享知识</p>
            </div>

            <div className="cards-grid">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        onClick={() => navigate(item.path)} // 点击卡片跳转对应页面
                    >
                        <div className="card-icon">{item.icon}</div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;