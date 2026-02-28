// src/pages/AppNavPage.tsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

// 定义分类数据的TS类型
interface NavCategory {
    id: string;
    title: string;
    links: { name: string; url: string }[];
}

const AppNavPage: React.FC = () => {
    const navigate = useNavigate();

    // 应用导航分类数据（可自行扩展）
    const navCategories: NavCategory[] = [
        {
            id: 'dev-tools',
            title: '开发工具',
            links: [
                { name: 'GitHub', url: 'https://github.com/' },
                { name: 'VS Code', url: 'https://code.visualstudio.com/' },
                { name: 'Stack Overflow', url: 'https://stackoverflow.com/' },
                { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }
            ]
        },
        {
            id: 'learn-resources',
            title: '学习资源',
            links: [
                { name: 'React官方文档', url: 'https://react.dev/' },
                { name: 'TypeScript官方文档', url: 'https://www.typescriptlang.org/' },
                { name: 'Vite官方文档', url: 'https://vitejs.dev/' },
                { name: '前端面试指南', url: 'https://frontendinterviewhandbook.com/' },
                { name: '知乎', url: 'https://www.zhihu.com/' }
            ]
        },
        {
            id: 'design-tools',
            title: '设计工具',
            links: [
                { name: 'Figma', url: 'https://www.figma.com/' },
                { name: 'Canva', url: 'https://www.canva.com/' },
                { name: 'Unsplash', url: 'https://unsplash.com/' },
                { name: 'Iconfont', url: 'https://www.iconfont.cn/' }
            ]
        },
        {
            id: 'productivity',
            title: '效率工具',
            links: [
                { name: 'Notion', url: 'https://www.notion.so/' },
                { name: 'Trello', url: 'https://trello.com/' },
                { name: 'Todoist', url: 'https://todoist.com/' },
                { name: '1Password', url: 'https://1password.com/' },
                { name: 'JSON在线解析', url: 'https://jsontool.cn/' },
            ]
        }
    ];

    // 为每个分类创建ref，用于滚动定位
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

    // 左侧目录点击事件：滚动到对应分类
    const scrollToCategory = (index: number) => {
        categoryRefs.current[index]?.scrollIntoView({
            behavior: 'smooth', // 平滑滚动
            block: 'start' // 滚动到分类顶部
        });
    };

    return (
        <div className="app-nav-page">
            {/* 左侧：目录侧边栏 */}
            <aside className="nav-sidebar">
                <div className="sidebar-header">
                    <h3 className="sidebar-title">应用导航</h3>
                    <button
                        className="btn btn-primary btn-small"
                        onClick={() => navigate('/home')}
                    >
                        返回首页
                    </button>
                </div>
                <ul className="nav-directory">
                    {navCategories.map((category, index) => (
                        <li
                            key={category.id}
                            className="directory-item"
                            onClick={() => scrollToCategory(index)}
                        >
                            {category.title}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* 右侧：分类内容区 */}
            <main className="nav-content">
                {navCategories.map((category, index) => (
                    <div
                        key={category.id}
                        ref={(el) => {
                            categoryRefs.current[index] = el;
                        }}
                        className="nav-category"
                    >
                        <h2 className="category-title">{category.title}</h2>
                        {/* 新增：淡灰白色方框容器 */}
                        <div className="category-box">
                            <div className="links-grid">
                                {category.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-btn"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default AppNavPage;