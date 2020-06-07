# Проект транспортного агенства
Данное приложение было реализовано с помощью ASP.NET Core 3 Web API, Angular 8, Entity Framework Core, база данных MSSQL.
Присутствует аутентификация и авторизация на основе JSON Web Token и ASP.NET Identity.
### Функции
1. Поиск и просмотр нужного рейса по выбранным параметрам (где некоторые являются опциональными).
2. Покупка билета на выбранный рейс (возможнен только для залогиненных пользователей).
3. Возможность CRUD сущностей для администраторов в специальном разделе, недоступного обычным пользователям.