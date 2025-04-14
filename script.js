window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('a[href="#menu-items2"]').addEventListener('click', function (event) {
      event.preventDefault();  // 防止默认跳转行为
      window.scrollTo({
        top: document.getElementById('menu-items2').offsetTop - 200,  // 导航条高度 80px
        behavior: 'smooth'
      });
    });
  });