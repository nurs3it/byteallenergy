# Team Management API Client

Комплексный клиент для работы с ByteAllEnergy Team Management API, поддерживающий как серверные, так и клиентские запросы.

## 🚀 Особенности

- **Универсальность**: Работает как на сервере (Next.js API routes, Server Components), так и на клиенте
- **TypeScript**: Полная типизация на основе OpenAPI схемы
- **React Hooks**: Готовые хуки для удобной работы в React компонентах
- **Обработка ошибок**: Централизованная обработка ошибок с retry механизмом
- **Файловые загрузки**: Поддержка загрузки изображений профилей
- **Пагинация**: Встроенная поддержка пагинации
- **Поиск**: Debounced поиск с фильтрацией
- **Валидация**: Встроенная валидация данных

## 📦 Установка

API клиент уже настроен в проекте. Для использования импортируйте нужные компоненты:

```typescript
import { teamService, useTeamMembers, ApiError } from '@/lib/api';
```

## 🏗️ Архитектура

```
src/lib/api/
├── config.ts          # Конфигурация API
├── client.ts          # Базовый HTTP клиент
├── types.ts           # TypeScript типы
├── utils.ts           # Утилиты и хелперы
├── services/
│   └── team.ts        # Сервисы для работы с командой
├── hooks.ts           # React хуки
├── examples.ts        # Примеры использования
└── index.ts           # Главный экспорт
```

## 🔧 Конфигурация

### Переменные окружения

```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
API_BASE_URL=http://localhost:8000  # Для серверных запросов
```

### Настройка клиента

```typescript
import { API_CONFIG } from '@/lib/api';

// Изменить базовый URL
API_CONFIG.BASE_URL = 'https://api.example.com';

// Включить логирование запросов
API_CONFIG.LOG_REQUESTS = true;
```

## 📚 Использование

### 1. Серверные запросы (API Routes, Server Components)

```typescript
import { serverTeamService } from '@/lib/api';

// В API route
export async function GET() {
  try {
    const members = await serverTeamService.members.getMembers({
      page: 1,
      ordering: 'full_name'
    });
    
    return Response.json(members);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

// В Server Component
export default async function TeamPage() {
  const [members, categories, stats] = await Promise.all([
    serverTeamService.members.getMembers(),
    serverTeamService.categories.getCategories(),
    serverTeamService.metadata.getStatistics()
  ]);

  return (
    <div>
      <h1>Team ({stats.total_members} members)</h1>
      {/* Рендер данных */}
    </div>
  );
}
```

### 2. Клиентские запросы (React Components)

#### Использование хуков

```typescript
'use client';
import { useTeamMembers, useCreateTeamMember } from '@/lib/api';

export function TeamMembersList() {
  const { data: members, loading, error, refetch } = useTeamMembers({
    page: 1,
    ordering: 'full_name'
  });

  const { mutate: createMember } = useCreateTeamMember({
    onSuccess: () => refetch(),
    onError: (error) => console.error('Error:', error.message)
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => createMember({
        full_name: 'John Doe',
        position: 'Developer',
        category: 1
      })}>
        Add Member
      </button>
      
      <ul>
        {members?.results.map(member => (
          <li key={member.id}>
            {member.full_name} - {member.position}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### Прямое использование сервисов

```typescript
import { teamService } from '@/lib/api';

export async function handleCreateMember(memberData: any) {
  try {
    const newMember = await teamService.members.createMember(memberData);
    console.log('Member created:', newMember);
    return newMember;
  } catch (error) {
    console.error('Failed to create member:', error);
    throw error;
  }
}
```

### 3. Работа с файлами

```typescript
import { teamService } from '@/lib/api';

// Загрузка фото профиля
const formData = new FormData();
formData.append('photo', file);
formData.append('full_name', 'John Doe');
formData.append('position', 'Developer');
formData.append('category', '1');

const member = await teamService.members.createMember(formData);
```

### 4. Поиск и фильтрация

```typescript
import { useSearchMembers } from '@/lib/api';

export function SearchMembers() {
  const { data: members, loading } = useSearchMembers({
    q: 'developer',
    category: 1,
    is_leader: false
  });

  return (
    <div>
      {members?.map(member => (
        <div key={member.id}>{member.full_name}</div>
      ))}
    </div>
  );
}
```

## 🎯 API Endpoints

### Team Members
- `GET /api/v1/team/members/` - Список участников команды
- `GET /api/v1/team/members/{id}/` - Детали участника
- `POST /api/v1/team/members/` - Создание участника
- `PUT /api/v1/team/members/{id}/` - Обновление участника
- `PATCH /api/v1/team/members/{id}/` - Частичное обновление
- `DELETE /api/v1/team/members/{id}/` - Удаление участника
- `GET /api/v1/team/members/leaders/` - Лидеры команды
- `GET /api/v1/team/members/by_category/` - Участники по категориям
- `GET /api/v1/team/members/search/` - Поиск участников

### Team Categories
- `GET /api/v1/team/categories/` - Список категорий
- `GET /api/v1/team/categories/{id}/` - Детали категории
- `POST /api/v1/team/categories/` - Создание категории
- `PUT /api/v1/team/categories/{id}/` - Обновление категории
- `PATCH /api/v1/team/categories/{id}/` - Частичное обновление
- `DELETE /api/v1/team/categories/{id}/` - Удаление категории
- `GET /api/v1/team/categories/{id}/members/` - Участники категории

### Team Metadata
- `GET /api/v1/team/metadata/` - Список метаданных
- `GET /api/v1/team/metadata/{id}/` - Детали метаданных
- `POST /api/v1/team/metadata/` - Создание метаданных
- `PUT /api/v1/team/metadata/{id}/` - Обновление метаданных
- `PATCH /api/v1/team/metadata/{id}/` - Частичное обновление
- `DELETE /api/v1/team/metadata/{id}/` - Удаление метаданных
- `GET /api/v1/team/metadata/statistics/` - Статистика команды

## 🔍 Доступные хуки

### Чтение данных
- `useTeamMembers(params?)` - Список участников
- `useTeamMember(id)` - Детали участника
- `useTeamLeaders()` - Лидеры команды
- `useMembersByCategory()` - Участники по категориям
- `useSearchMembers(params)` - Поиск участников
- `useCategoryMembers(categoryId, params?)` - Участники категории
- `useTeamCategories(params?)` - Список категорий
- `useTeamCategory(id)` - Детали категории
- `useTeamMetadata(params?)` - Список метаданных
- `useTeamMetadataItem(id)` - Детали метаданных
- `useTeamStatistics()` - Статистика команды

### Мутации
- `useCreateTeamMember()` - Создание участника
- `useUpdateTeamMember()` - Обновление участника
- `useDeleteTeamMember()` - Удаление участника
- `useCreateTeamCategory()` - Создание категории
- `useUpdateTeamCategory()` - Обновление категории
- `useDeleteTeamCategory()` - Удаление категории
- `useCreateTeamMetadata()` - Создание метаданных
- `useUpdateTeamMetadata()` - Обновление метаданных
- `useDeleteTeamMetadata()` - Удаление метаданных

### Утилиты
- `usePagination(fetchFn, options)` - Пагинация
- `useSearch(searchFn, options)` - Поиск с debounce
- `useMutation(mutationFn, options)` - Универсальная мутация

## 🛠️ Утилиты

```typescript
import { 
  buildQueryString, 
  isValidEmail, 
  isValidUrl, 
  formatFileSize,
  debounce,
  retry 
} from '@/lib/api';

// Построение query string
const query = buildQueryString({ page: 1, search: 'john' });

// Валидация
const isValid = isValidEmail('user@example.com');

// Форматирование размера файла
const size = formatFileSize(1024); // "1 KB"

// Debounce функция
const debouncedSearch = debounce(searchFunction, 300);

// Retry с экспоненциальной задержкой
const result = await retry(async () => {
  return await apiCall();
}, 3, 1000);
```

## 🚨 Обработка ошибок

```typescript
import { ApiError } from '@/lib/api';

try {
  const member = await teamService.members.getMember(1);
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.message);
    console.error('Response data:', error.data);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## 🔄 Retry механизм

```typescript
import { retry } from '@/lib/api';

const data = await retry(async () => {
  return await teamService.members.getMembers();
}, 3, 1000); // 3 попытки с базовой задержкой 1с
```

## 📝 Логирование

В development режиме все запросы логируются в консоль:

```
[API] GET http://localhost:8000/api/v1/team/members/?page=1
[API] Response 200 OK
```

## 🎨 Примеры компонентов

См. файл `examples.ts` для полных примеров использования API в различных сценариях.

## 🔐 Аутентификация

API использует cookie-based аутентификацию. Убедитесь, что cookies передаются с запросами:

```typescript
// Для серверных запросов
const response = await fetch(url, {
  credentials: 'include',
  headers: {
    'Cookie': request.headers.get('cookie') || ''
  }
});
```

## 🚀 Лучшие практики

1. **Используйте серверные клиенты** для Server Components и API routes
2. **Обрабатывайте ошибки** с помощью try-catch и ApiError
3. **Используйте хуки** для клиентских компонентов
4. **Валидируйте данные** перед отправкой
5. **Используйте retry** для критичных запросов
6. **Оптимизируйте запросы** с помощью пагинации и фильтрации
