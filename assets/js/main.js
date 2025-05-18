document.addEventListener('DOMContentLoaded', function() {
  // Анимация для секций при прокрутке
  const sections = document.querySelectorAll('.section');
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    
    // Проверяем видимость секций
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add('visible');
        
        // Если это секция навыков, анимируем прогресс-бары
        if (section.id === 'skills') {
          const progressBars = section.querySelectorAll('.skill-progress');
          progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
              bar.style.width = progress + '%';
            }, 200);
          });
        }
      }
    });
    
    // Проверяем видимость элементов таймлайна
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < windowHeight * 0.8) {
        item.classList.add('visible');
      }
    });
  }
  
  // Проверяем видимость при загрузке страницы
  checkVisibility();
  
  // Проверяем видимость при прокрутке
  window.addEventListener('scroll', checkVisibility);
  
  // Функционал колеса сертификатов
  const certificatesWheel = document.querySelector('.certificates-wheel');
  const prevCertificateBtn = document.querySelector('.prev-certificate');
  const nextCertificateBtn = document.querySelector('.next-certificate');
  let certificatePosition = 0;
  
  function scrollCertificates(direction) {
    const items = certificatesWheel.querySelectorAll('.wheel-item');
    const itemWidth = items[0].offsetWidth + 20; // ширина + отступ
    
    if (direction === 'next' && certificatePosition > -(items.length - 3) * itemWidth) {
      certificatePosition -= itemWidth;
    } else if (direction === 'prev' && certificatePosition < 0) {
      certificatePosition += itemWidth;
    }
    
    certificatesWheel.style.transform = `translateX(${certificatePosition}px)`;
  }
  
  prevCertificateBtn.addEventListener('click', () => scrollCertificates('prev'));
  nextCertificateBtn.addEventListener('click', () => scrollCertificates('next'));
  
  // Функционал колеса проектов
  const projectsWheel = document.querySelector('.projects-wheel');
  const prevProjectBtn = document.querySelector('.prev-project');
  const nextProjectBtn = document.querySelector('.next-project');
  let projectPosition = 0;
  
  function scrollProjects(direction) {
    const items = projectsWheel.querySelectorAll('.wheel-item');
    const itemWidth = items[0].offsetWidth + 20; // ширина + отступ
    
    if (direction === 'next' && projectPosition > -(items.length - 3) * itemWidth) {
      projectPosition -= itemWidth;
    } else if (direction === 'prev' && projectPosition < 0) {
      projectPosition += itemWidth;
    }
    
    projectsWheel.style.transform = `translateX(${projectPosition}px)`;
  }
  
  prevProjectBtn.addEventListener('click', () => scrollProjects('prev'));
  nextProjectBtn.addEventListener('click', () => scrollProjects('next'));
  
  // Адаптивность для колес
  function updateWheelItemsWidth() {
    const wheelItems = document.querySelectorAll('.wheel-item');
    const windowWidth = window.innerWidth;
    
    if (windowWidth < 480) {
      wheelItems.forEach(item => {
        item.style.flex = '0 0 220px';
      });
    } else if (windowWidth < 768) {
      wheelItems.forEach(item => {
        item.style.flex = '0 0 250px';
      });
    } else {
      wheelItems.forEach(item => {
        item.style.flex = '0 0 300px';
      });
    }
  }
  
  updateWheelItemsWidth();
  window.addEventListener('resize', updateWheelItemsWidth);
});