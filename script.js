// 模拟工具列表
const tools = [
    { id: 1, name: 'AI 图像生成', category: '图像' },
    { id: 2, name: 'AI 文本生成', category: '文本' },
    { id: 3, name: 'AI 数据分析', category: '数据' },
    { id: 4, name: 'AI 编程助手', category: '编程' }
];

// 显示工具列表
function displayTools() {
    const toolContainer = document.getElementById('tool-list');
    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.classList.add('tool-item');
        toolElement.innerHTML = `
            <h4>${tool.name}</h4>
            <button onclick="addToHistory(${tool.id})">推荐</button>
        `;
        toolContainer.appendChild(toolElement);
    });
}

// 保存用户点击过的工具到浏览器的 localStorage
function addToHistory(toolId) {
    let history = JSON.parse(localStorage.getItem('toolHistory')) || [];
    if (!history.includes(toolId)) {
        history.push(toolId);
        localStorage.setItem('toolHistory', JSON.stringify(history));
    }
    displayRecommendations();
}

// 根据浏览历史推荐工具
function displayRecommendations() {
    const history = JSON.parse(localStorage.getItem('toolHistory')) || [];
    const recommendationContainer = document.getElementById('recommendations');
    recommendationContainer.innerHTML = '<h3>基于您的浏览记录，推荐这些工具：</h3>';
    
    history.forEach(id => {
        const tool = tools.find(tool => tool.id === id);
        const toolElement = document.createElement('div');
        toolElement.textContent = tool.name;
        recommendationContainer.appendChild(toolElement);
    });
}

// 页面加载时显示工具列表和推荐
window.onload = () => {
    displayTools();
    displayRecommendations();
};
