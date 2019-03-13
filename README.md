Занятие 75 - домашнее задание
 

Необходимо создать приложение на основе API, которую вы уже делали в одном из прошлых домашних заданий - шифр Виженера.

 

Доработайте API таким образом, чтобы сервер принимал данные POST-запросом в таком формате:

 

POST /encode HTTP/1.1

Content-Type: application/json

 

{"password": "testpassword", "message": "Test message"}

 

В ответ на такой запрос сервер должен ответить:

 

{"encoded": "mikm mwkooxh"}

 

Для расшифровки похожим способом, указываете пароль и зашифрованное сообщение, отправляете POST-запрос на /decode

 

POST /decode HTTP/1.1

Content-Type: application/json

 

{"password": "testpassword", "message": "mikm mwkooxh"}

 

Ответ:

 

{"decoded": "test message"}