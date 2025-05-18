---
layout: default
title: Моё резюме
---

# Структура файлов Jekyll для резюме

## _config.yml
```yaml
# Основные настройки сайта
title: Персональное резюме
baseurl: "" # Базовый URL, если сайт размещен в подкаталоге
url: "https://yourwebsite.com" # URL вашего сайта

# Персональная информация
name: Иван Иванов
title: Старший разработчик C#
email: ivan.ivanov@example.com
phone: "+7 900 123-45-67"
location: Москва, Россия
linkedin: https://www.linkedin.com/in/your-profile
github: https://github.com/your-username

# Секция "Обо мне"
about: |
  Опытный разработчик C# с более чем 8-летним стажем в разработке корпоративных приложений.
  Специализируюсь на создании высоконагруженных бэкенд-систем с использованием .NET Core и ASP.NET.
  Обладаю глубокими знаниями LINQ, Lambda-выражений и асинхронного программирования.
  
  Стремлюсь к созданию чистого, поддерживаемого кода и постоянно изучаю новые технологии и методологии
  разработки. Имею опыт работы с микросервисной архитектурой и командной разработкой в Agile-окружении.

# Настройки сборки
markdown: kramdown
sass:
  style: compressed
```

## _data/skills.yml
```yaml
- name: Технические навыки
  items:
    - name: C#
      level: 95
    - name: .NET Core / .NET Framework
      level: 90
    - name: LINQ
      level: 98
    - name: ASP.NET
      level: 85
    - name: Entity Framework
      level: 88
    - name: SQL Server
      level: 80

- name: Фронтенд
  items:
    - name: HTML/CSS
      level: 75
    - name: JavaScript
      level: 70
    - name: Angular
      level: 65
    - name: React
      level: 60

- name: Дополнительно
  items:
    - name: Git
      level: 85
    - name: Azure DevOps
      level: 75
    - name: Docker
      level: 70
    - name: Microservices
      level: 80
```

## _data/experience.yml
```yaml
- title: Старший разработчик C#
  company: ООО "Технологии будущего"
  date: 2020 - настоящее время
  description: |
    - Разработка и сопровождение высоконагруженной микросервисной системы обработки платежей
    - Внедрение и оптимизация LINQ-запросов для работы с большими объемами данных
    - Создание RESTful API для взаимодействия с внешними системами
    - Наставничество для младших разработчиков, проведение код-ревью
    - Внедрение CI/CD-пайплайнов и улучшение процессов разработки

- title: Разработчик .NET
  company: ООО "Цифровые решения"
  date: 2017 - 2020
  description: |
    - Разработка и поддержка корпоративной системы документооборота на базе .NET Framework
    - Оптимизация производительности приложения с использованием LINQ и асинхронного программирования
    - Интеграция с внешними API и сервисами
    - Работа с базами данных SQL Server, проектирование и оптимизация схем

- title: Младший разработчик
  company: ИТ-Консалтинг
  date: 2015 - 2017
  description: |
    - Участие в разработке внутренней CRM-системы компании
    - Реализация модулей бизнес-логики с использованием C# и .NET Framework
    - Работа с Entity Framework и LINQ для доступа к данным
    - Создание тестов для проверки функциональности
```

## _data/certificates.yml
```yaml
- name: Microsoft Certified Azure Developer Associate
  issuer: Microsoft
  date: 2023
  description: Сертификация, подтверждающая навыки разработки и развертывания приложений в Microsoft Azure.

- name: Professional Scrum Developer
  issuer: Scrum.org
  date: 2022
  description: Сертификация, подтверждающая знание принципов Scrum-разработки и умение их применять в реальных проектах.

- name: .NET Core Developer
  issuer: Pluralsight
  date: 2021
  description: Сертификат, подтверждающий навыки разработки приложений на .NET Core, включая веб-приложения и API.

- name: SQL Server Database Administration
  issuer: Microsoft
  date: 2020
  description: Сертификация по администрированию и оптимизации баз данных SQL Server.

- name: C# Programming Advanced
  issuer: Udemy
  date: 2019
  description: Курс по продвинутым техникам программирования на C# с фокусом на LINQ, асинхронное программирование и паттерны проектирования.
```

## _data/projects.yml
```yaml
- name: Система управления задачами
  technologies: C#, ASP.NET Core, Entity Framework, React
  description: |
    Полнофункциональная система управления задачами с веб-интерфейсом и RESTful API. 
    Особенности включают настраиваемые рабочие процессы, интеграцию с календарем и систему уведомлений.
  link: https://github.com/yourusername/task-management-system

- name: Библиотека для работы с LINQ Extensions
  technologies: C#, .NET Core, LINQ
  description: |
    Открытая библиотека, расширяющая стандартные возможности LINQ дополнительными методами для 
    более элегантной работы с коллекциями и запросами к данным.
  link: https://github.com/yourusername/linq-extensions

- name: Микросервисное приложение для обработки платежей
  technologies: C#, .NET Core, Docker, RabbitMQ, SQL Server
  description: |
    Система из нескольких микросервисов для обработки и анализа платежных транзакций с высокой отказоустойчивостью и масштабируемостью.
  link: https://github.com/yourusername/payment-processing-system

- name: Чат-приложение реального времени
  technologies: C#, ASP.NET Core, SignalR, Angular
  description: |
    Приложение для обмена сообщениями в реальном времени с использованием SignalR для эффективной передачи данных между клиентами.
  link: https://github.com/yourusername/realtime-chat

- name: Парсер и анализатор логов
  technologies: C#, LINQ, Regular Expressions
  description: |
    Инструмент для анализа и визуализации логов серверов с возможностью выявления аномалий и генерации отчетов.
  link: https://github.com/yourusername/log-analyzer
```

## _data/education.yml
```yaml
- degree: Магистр компьютерных наук
  institution: Московский государственный технический университет
  date: 2013 - 2015
  description: |
    Специализация в области разработки программного обеспечения и искусственного интеллекта.
    Дипломная работа посвящена оптимизации алгоритмов машинного обучения.

- degree: Бакалавр информационных технологий
  institution: Московский государственный технический университет
  date: 2009 - 2013
  description: |
    Изучение основ программирования, алгоритмов, баз данных и веб-разработки.
    Участие в студенческих проектах по разработке программного обеспечения.
```

## _layouts/default.html
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }} | {{ page.title }}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/styles.css">
</head>
<body>
  {{ content }}
  
  <script src="{{ site.baseurl }}/assets/js/main.js"></script>
</body>
</html>
```

## index.html
```html
---
layout: default
title: Резюме
---

{% include header.html %}

<main class="container">
  {% include about.html %}
  {% include skills.html %}
  {% include experience.html %}
  {% include certificates.html %}
  {% include projects.html %}
  {% include education.html %}
</main>

{% include footer.html %}
```

## _includes/header.html
```html
<header>
  <div class="header-bg"></div>
  <div class="container">
    <div class="header-content">
      <div class="profile">
        <img src="{{ site.baseurl }}/assets/images/profile.jpg" alt="{{ site.name }}" class="profile-image">
      </div>
      <h1 class="name">{{ site.name }}</h1>
      <p class="title">{{ site.title }}</p>
      
      <div class="contact-links">
        {% if site.email %}
        <a href="mailto:{{ site.email }}" class="contact-link">
          <i class="fas fa-envelope"></i> {{ site.email }}
        </a>
        {% endif %}
        
        {% if site.phone %}
        <a href="tel:{{ site.phone }}" class="contact-link">
          <i class="fas fa-phone"></i> {{ site.phone }}
        </a>
        {% endif %}
        
        {% if site.location %}
        <a href="#" class="contact-link">
          <i class="fas fa-map-marker-alt"></i> {{ site.location }}
        </a>
        {% endif %}
        
        {% if site.linkedin %}
        <a href="{{ site.linkedin }}" target="_blank" class="contact-link">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        {% endif %}
        
        {% if site.github %}
        <a href="{{ site.github }}" target="_blank" class="contact-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        {% endif %}
      </div>
    </div>
  </div>
</header>
```

## _includes/about.html
```html
<section id="about" class="section">
  <h2 class="section-title">Обо мне</h2>
  <div class="about-text">
    {{ site.about | markdownify }}
  </div>
</section>
```

## _includes/skills.html
```html
<section id="skills" class="section">
  <h2 class="section-title">Навыки</h2>
  <div class="skills-container">
    {% for category in site.data.skills %}
    <div class="skill-category">
      <h3>{{ category.name }}</h3>
      {% for skill in category.items %}
      <div class="skill-item">
        <div class="skill-name">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" data-progress="{{ skill.level }}"></div>
        </div>
      </div>
      {% endfor %}
    </div>
    {% endfor %}
  </div>
</section>
```

## _includes/experience.html
```html
<section id="experience" class="section">
  <h2 class="section-title">Опыт работы</h2>
  <div class="timeline">
    {% for job in site.data.experience %}
    <div class="timeline-item">
      <div class="timeline-content">
        <span class="timeline-date">{{ job.date }}</span>
        <h3 class="timeline-title">{{ job.title }}</h3>
        <p class="timeline-company">{{ job.company }}</p>
        <div>
          {{ job.description | markdownify }}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
```

## _includes/certificates.html
```html
<section id="certificates" class="section">
  <h2 class="section-title">Сертификаты</h2>
  <div class="wheel-container">
    <h3 class="wheel-title">Мои профессиональные достижения</h3>
    <div class="wheel certificates-wheel">
      {% for certificate in site.data.certificates %}
      <div class="wheel-item">
        <div class="wheel-item-header">
          <div class="wheel-item-icon">
            <i class="fas fa-certificate"></i>
          </div>
          <div>
            <h3 class="wheel-item-title">{{ certificate.name }}</h3>
            <p class="wheel-item-subtitle">{{ certificate.issuer }} | {{ certificate.date }}</p>
          </div>
        </div>
        <div class="wheel-item-content">
          {{ certificate.description | markdownify }}
        </div>
      </div>
      {% endfor %}
    </div>
    <div class="wheel-controls">
      <button class="wheel-control prev-certificate">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="wheel-control next-certificate">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
```

## _includes/projects.html
```html
<section id="projects" class="section">
  <h2 class="section-title">Проекты</h2>
  <div class="wheel-container">
    <h3 class="wheel-title">Мое портфолио</h3>
    <div class="wheel projects-wheel">
      {% for project in site.data.projects %}
      <div class="wheel-item">
        <div class="wheel-item-header">
          <div class="wheel-item-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <div>
            <h3 class="wheel-item-title">{{ project.name }}</h3>
            <p class="wheel-item-subtitle">{{ project.technologies }}</p>
          </div>
        </div>
        <div class="wheel-item-content">
          {{ project.description | markdownify }}
          
          {% if project.link %}
          <a href="{{ project.link }}" target="_blank" style="display: inline-block; margin-top: 10px;">
            <i class="fas fa-external-link-alt"></i> Посмотреть проект
          </a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
    <div class="wheel-controls">
      <button class="wheel-control prev-project">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="wheel-control next-project">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>
```

## _includes/education.html
```html
<section id="education" class="section">
  <h2 class="section-title">Образование</h2>
  <div class="education-grid">
    {% for education in site.data.education %}
    <div class="education-item">
      <p class="education-date">{{ education.date }}</p>
      <h3 class="education-degree">{{ education.degree }}</h3>
      <p class="education-institution">{{ education.institution }}</p>
      <div>
        {{ education.description | markdownify }}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
```

## _includes/footer.html
```html
<footer>
  <div class="container">
    <p>&copy; {{ site.time | date: '%Y' }} {{ site.name }}. Все права защищены.</p>
    <a href="{{ site.baseurl }}/assets/resume.pdf" class="download-button" download>
      <i class="fas fa-download"></i> Скачать резюме (PDF)
    </a>
  </div>
</footer>
```

## assets/css/styles.scss
```scss
---
---

@import "main";
```

## _sass/main.scss
```scss
:root {
  --primary-color: #4a6baf;
  --secondary-color: #303f9f;
  --text-color: #333;
  --light-bg: #f5f5f5;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-bg);
  overflow-x: hidden;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-speed);
}

a:hover {
  color: var(--secondary-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Здесь должны быть все остальные стили, аналогичные тем, что у нас в шаблоне HTML */
/* Стили для header, skills, experience, certificate и project wheels и т.д. */
```

## assets/js/main.js
```javascript
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
```

## README.md
```markdown
# Анимированное Jekyll-резюме

Этот проект представляет собой шаблон персонального резюме, созданный с использованием Jekyll. Шаблон включает анимированные секции, колесо для отображения сертификатов и проектов, а также адаптивный дизайн для различных устройств.

## Особенности

- Современный и элегантный дизайн
- Адаптивная верстка для мобильных устройств и десктопов
- Анимации при прокрутке для улучшения UX
- Интерактивное отображение сертификатов и проектов в формате карусели
- Анимированные прогресс-бары для навыков
- Временная шкала для отображения опыта работы
- Поддержка всех основных браузеров

## Установка и запуск

1. Установите Jekyll, следуя [официальной документации](https://jekyllrb.com/docs/installation/)
2. Клонируйте репозиторий:
   ```
   git clone https://github.com/yourusername/jekyll-resume.git
   cd jekyll-resume
   ```
3. Установите зависимости:
   ```
   bundle install
   ```
4. Запустите локальный сервер:
   ```
   bundle exec jekyll serve
   ```
5. Откройте браузер и перейдите по адресу `http://localhost:4000`

## Настройка

Все персональные данные хранятся в следующих файлах:

- `_config.yml` - основная информация (имя, контакты, описание)
- `_data/skills.yml` - навыки с процентным соотношением
- `_data/experience.yml` - опыт работы
- `_data/certificates.yml` - сертификаты
- `_data/projects.yml` - проекты
- `_data/education.yml` - образование

## Лицензия

MIT
```
