# Google Analytics Tracking Guide

## 📊 Что отслеживается

### Автоматическое отслеживание

1. **Просмотры страниц** - автоматически при навигации
2. **Глубина прокрутки** - 25%, 50%, 75%, 100%
3. **Время на странице** - автоматически при уходе со страницы

### Отслеживание событий

#### 1. Навигация и ссылки
- ✅ Клики по внутренним ссылкам
- ✅ Клики по внешним ссылкам
- ✅ Клики по навигационному меню
- ✅ Открытие/закрытие мобильного меню

#### 2. Формы и опросы
- ✅ Начало заполнения формы
- ✅ Отправка формы
- ✅ Ошибки валидации
- ✅ Взаимодействие с полями (focus, blur, change, error)
- ✅ Завершение опроса
- ✅ Время заполнения формы
- ✅ Количество заполненных полей

#### 3. Контакты
- ✅ Клики по email
- ✅ Клики по телефону
- ✅ Клики по социальным сетям (LinkedIn, и т.д.)

#### 4. Взаимодействия
- ✅ Переключение темы (светлая/темная)
- ✅ Клики по кнопкам
- ✅ Клики по CTA (Call to Action)
- ✅ Воспроизведение видео
- ✅ Пауза видео
- ✅ Завершение просмотра видео

#### 5. Ошибки
- ✅ Ошибки JavaScript
- ✅ Ошибки валидации форм
- ✅ Ошибки отправки форм

## 🚀 Использование

### Базовое использование через хук

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { trackButton, trackLink, trackEmail } = useAnalytics();

  return (
    <button onClick={() => trackButton('Get Started', 'hero')}>
      Get Started
    </button>
  );
}
```

### Прямое использование функций

```typescript
import { trackEvent, trackButtonClick, trackFormSubmit } from '@/lib/analytics/gtag';

// Отслеживание события
trackEvent('click', 'button', 'Subscribe');

// Отслеживание клика по кнопке
trackButtonClick('Subscribe Button', 'footer');

// Отслеживание отправки формы
trackFormSubmit('Newsletter Form', 'newsletter-form');
```

## 📋 Доступные функции отслеживания

### Навигация
- `trackLink(linkText, linkUrl, isExternal?)` - клики по ссылкам
- `trackMenu(action, itemName?)` - взаимодействие с меню

### Формы
- `trackForm(formName, formId?)` - отправка формы
- `trackField(formName, fieldName, action)` - взаимодействие с полем
- `trackSurvey(surveyName, completionTime?, fieldsCompleted?)` - завершение опроса
- `trackContact(action, formType)` - контактные формы

### Контакты
- `trackEmail(email, location?)` - клики по email
- `trackPhone(phone, location?)` - клики по телефону
- `trackSocial(platform, url)` - клики по соцсетям

### Медиа
- `trackVideo(action, videoName, progress?)` - взаимодействие с видео

### UI
- `trackTheme(theme)` - переключение темы
- `trackButton(buttonName, location?)` - клики по кнопкам
- `trackCTA(ctaText, ctaLocation, destination?)` - клики по CTA

### Ошибки
- `trackError(errorMessage, errorLocation?)` - отслеживание ошибок

## 📈 Примеры использования

### Отслеживание кнопки

```typescript
const { trackButton } = useAnalytics();

<button onClick={() => {
  trackButton('Contact Us', 'hero-section');
  router.push('/contact');
}}>
  Contact Us
</button>
```

### Отслеживание формы

```typescript
const { trackForm, trackField } = useAnalytics();

const handleSubmit = (e) => {
  e.preventDefault();
  trackForm('Contact Form', 'contact-form');
  // ... submit logic
};

<input
  onFocus={() => trackField('Contact Form', 'Email', 'focus')}
  onBlur={() => trackField('Contact Form', 'Email', 'blur')}
/>
```

### Отслеживание видео

```typescript
const { trackVideo } = useAnalytics();

<video
  onPlay={() => trackVideo('play', 'Product Demo')}
  onPause={() => trackVideo('pause', 'Product Demo')}
  onEnded={() => trackVideo('complete', 'Product Demo')}
/>
```

### Отслеживание ошибок

```typescript
const { trackError } = useAnalytics();

try {
  // some code
} catch (error) {
  trackError(error.message, 'component-name');
}
```

## 🎯 Рекомендуемые метрики для отслеживания

### Конверсии
- Завершение опросов/форм
- Клики по CTA
- Отправка контактных форм
- Подписка на рассылку

### Вовлеченность
- Время на странице
- Глубина прокрутки
- Клики по ссылкам
- Воспроизведение видео

### Навигация
- Популярные страницы
- Пути пользователей
- Выходные ссылки
- Внутренние переходы

### Ошибки
- Ошибки валидации
- Ошибки отправки форм
- JavaScript ошибки

## 📊 Просмотр данных в Google Analytics

1. **События** → Все события
2. **Поведение** → События → Обзор
3. **Конверсии** → События → Настройка целей

### Полезные отчеты

- **События по категориям**: Категория → Действие → Метка
- **Воронка конверсий**: Форма → Отправка → Успех
- **Пути пользователей**: Поведение → Поток поведения

## 🔧 Настройка целей в GA4

1. Перейдите в **Администратор** → **Цели**
2. Создайте новую цель
3. Выберите тип: **Событие**
4. Настройте условие:
   - Категория: `form`
   - Действие: `submit`
   - Метка: `Contact Form`

## 📝 Примечания

- Все события автоматически включают информацию о странице
- IP-адреса анонимизированы для соответствия GDPR
- Cookies настроены с флагом `SameSite=None;Secure`
- Отслеживание работает только в production или с установленным GA ID

## 🔒 Конфиденциальность

- IP-адреса анонимизированы
- Данные передаются в Google Analytics
- Соответствие GDPR/CCPA
- Пользователи могут отключить через настройки браузера

