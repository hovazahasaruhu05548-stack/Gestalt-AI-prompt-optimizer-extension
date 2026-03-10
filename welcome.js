// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-btn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault(); // 防止页面跳转
      window.close();     // 执行关闭窗口操作
    });
  }
});