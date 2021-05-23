# Business website Real State Agency
[Figma link](https://www.figma.com/file/cY6tKxpA9pFG4RBen42GSK/UI-Dev---test-task-2-(Copy-of-test-project-Fuse8)?node-id=0%3A1)

Published site

Real State Agency its a test project that was written in HTML, CSS and vanilla JS and then built and published with Webpack packaging tool. Moreover, SASS preprocessor was used to automate repetitive tasks and to reduce the number of errors and code bloat. In terms of class naming, there was used the component-driven CSS methodology - BEM methodology. The website is adaptive to multiple fixed layout sizes: mobile, tablet, desktop. To gain this "flexibility" the grid layouts were used.

Some other distinctive features of the project are:

- The Ajax is used to read and get the data from server. If the server is not available, use the file with a mock data: public / js / mocks-property-server.json.
- There is a Filter area at the top of the page.  Entering the text with more than three characters into this field make the cards filter by the title field, so that there will be rendered only those cards whose title contains the text from the filter field entered by the user.
- The functionality of the "See more" button has the following logic: if there is no data, the "See more" button is not displayed. If the data is available and the site is loaded, the first 6 property cards will be displayed by default. Clicking on the "See more" button displays the next 3 cards in the list. When thare are displayed as many cards as possible, the "See more" button will change ts name to "See less". Each click on "See less" hides the last 3 displayed cards until their final number on the page equals the default - 6.
- Good practices in terms of accessibility, SEO, performance. For example, the website can be fully navigated with the 'Tab' button.
- As to the images, there were generated using this [free image placeholder service](https://placeholder.com/)

[Ссылка на макет в Figma]((https://www.figma.com/file/cY6tKxpA9pFG4RBen42GSK/UI-Dev---test-task-2-(Copy-of-test-project-Fuse8)?node-id=0%3A1))

Опубликованный сайт

Бизнес-сайт Real State Agency

Real State Agency - это тетсовый проект, который написан с использованием ванильного HTML, CSS и JS и собран с помощью Webpack. Для автоматизации повторяющихся задач и уменьшения количества ошибок и раздувания кода был использован препроцессор SASS. По части именования классов, использовалась методология БЭМ. Веб-сайт адаптируется к нескольким видам устройства: mobile, tablet, desktop. Чтобы добиться этой адаптивности, были применены grid-сетки.

Некоторые другие отличительные особенности проекта:

- Для работы с данными с сервера был использован Ajax. В случае недоступности сервера - использовать файл с моковыми данными: public/js/mocks-property-server.json.
- В верхней части макета есть текстовое поле Фильтр. При введении текста более трех символов в это поле, карточки должны фильтроваться по полю title, т.е. должны использовать только те карточки, заголовок которых содержит текст из поля filter.
- Функционал кнопки "See more" построен следующим образом: если данных нет, кнопка "See more" не отображается. При наличии данных и при начальной загрузки сайта по умолчанию отображаются 6 первых карточек с недвижимостью. Нажатиие на кнопку "See more" показывает в списке следующие 3 карточки. При отображении максимально возможного числа карточек, кнопка "See more" станвоится "See less". - Каждое еажатие на "See less" ведет к скрытию 3 последних отображенных карточек, пока их конечное число на странице не станет равно дефолтному - 6.  
- Хорошие практики с точки зрения доступности, SEO, производительности. Например, по сайту можно полностью перемещаться с помощью кнопки «Tab».
- Изображения для карточек были сгенерированы с помощью бесплатного сервиса [Placeholder.com](https://placeholder.com/).