const data = [
  {
    question: "Предметом курса религиоведения является …",
    answer: "религия как сложное социальное и духовное явление",
  },
  {
    question: "Что означает слово «религия»?",
    answer: "вера, верить",
  },
  {
    question:
      "В каком городе находится главная святыня всех мусульман - храм Кааба?",
    answer: "в Мекке",
  },
  {
    question: "Что такое свобода совести",
    answer: "право граждан исповедовать или не исповедовать какую либо религию",
  },
  {
    question: "Эти религии относятся к мировым",
    answer: "Буддизм, Христианство, Ислам",
  },
  {
    question:
      "Ранняя форма религии, основанная на представлении в кровном братстве с животными и растениями:",
    answer: "тотемизм",
  },
  {
    question: "Фетишизм – это?",
    answer: "вера в сверхъестественные силы неодушевленных предметов",
  },
  {
    question:
      "Форма древних верований, основанная на вере в существование душ и духов,называется?",
    answer: "анимизм",
  },
  {
    question: "Монотеизм-это?",
    answer: "религия единобожия",
  },
  {
    question: "Политеизм-это? ",
    answer: "религия многобожия",
  },
  {
    question:
      "Понятие, охватывающее все элементы социального и культурного, передающееся от поколения в поколение, сохраняющееся долгое время:",
    answer: "традиция",
  },
  {
    question: "Жертвоприношение – это?",
    answer: "приношение даров богам и духам как обязательная часть культа",
  },
  {
    question: "Кто разработал анимистическую теорию происхождения религии?",
    answer: "Э. Тайлор",
  },
  {
    question:
      "Важнейший элемент религиозной деятельности, в переводе с латинского означает – уход, почитание:",
    answer: "культ",
  },
  {
    question: "Религия Древнего Ирана?",
    answer: "Зороастризм",
  },
  {
    question: "Птица счастья и богатства в Зороастризме?",
    answer: "Хумо",
  },
  {
    question: "Священный текст Зороастризма,называется?",
    answer: "Авеста",
  },
  {
    question: "Слова «Будда» в переводе с санскрита означает?",
    answer: "просветленный",
  },
  {
    question: "Палийский канон, где изложено учение Буддизма?",
    answer: "Трипитака",
  },
  {
    question: "Нирвана это?",
    answer: "освобождение души от законов кармы",
  },
  {
    question: "Христианство возникло",
    answer: "В 1 в н.э. в Палестине",
  },
  {
    question: "Место, где родился Иисус Христос?",
    answer: "Назарет",
  },
  {
    question: "Самая древняя  мировая религия?",
    answer: "Буддизм",
  },
  {
    question: "Пророк – это:",
    answer: "человек, возвещающий высшую истину через откровение",
  },
  {
    question: "Культ неба у древних тюрков?",
    answer: "Тенгри",
  },
  {
    question: "Ислам возник?",
    answer: "В VIIв н.э. в Аравии;",
  },
  {
    question: "Тотемное животное тенгрианцев?",
    answer: "волк",
  },
  {
    question: "Шариат в переводе с арабского языка означает?",
    answer: "правильный путь",
  },
  {
    question: "Сколько сур в священной книге мусульман Коране?",
    answer: "114",
  },
  {
    question: "Как звали первую жену пророка Мухаммада?",
    answer: "Хадиджа",
  },
  {
    question: "На какой территории зародился Ислам?",
    answer: "на Аравийском полуострове, в районе Хиджаза",
  },
  {
    question: "Как называется первая сура Корана?",
    answer: "открывающая",
  },
  {
    question: "Что такое «хадж» в исламе?",
    answer: "паломничество в Мекку",
  },
  {
    question: "Как переводится слово « аят»?",
    answer: "стих",
  },
  {
    question: "В каком городе родился пророк Мухаммад?",
    answer: "Мекка",
  },
  {
    question: "Что такое табу?",
    answer: "система запретов",
  },
  {
    question: "Какой год считается началом мусульманского летоисчисления?",
    answer: "622",
  },
  {
    question: "От какого слова  произошло название суфизм?",
    answer: "грубая шерстяная ткань «суф»",
  },
  {
    question:
      "Когда был принят Закон «О свободе совести и вероисповедания» в Узбекистане(новая редакция)?",
    answer: "1998",
  },
  {
    question: "Концепция «четырех благородных истин» принадлежит?",
    answer: "буддизму",
  },
  {
    question: "Состояние просветления в буддизме:",
    answer: "нирвана",
  },
  {
    question: "Название папского государства:",
    answer: "Ватикан",
  },
  {
    question: "Кто такие апостолы?",
    answer: "последователи Христа, его ученики",
  },
  {
    question: "Основной принцип учения суфиев",
    answer: "любовь к Богу",
  },
  {
    question: "Сколько лет было Христу в момент распятия?",
    answer: "33",
  },
  {
    question: "Поклонение множеству богов характерно для …?",
    answer: "политеизма",
  },
  {
    question:
      "Датой разделения христианской церкви на православную и католическую считается … год.",
    answer: "1054г.",
  },
  {
    question: "Христианская часть Библии именуется … Завет?",
    answer: "новый",
  },
  {
    question: "Самая большая по численности мировая религия?",
    answer: "Христианство",
  },
  {
    question: "Основные направления Буддизма?",
    answer: "Махаяна, Хинаяна, Ваджраяна",
  },
  {
    question: "Сколько апостолов было у Иисуса Христа?",
    answer: "12",
  },
  {
    question:
      "Укажите количество таинств в православной и католической церкви?",
    answer: "7",
  },
  {
    question: "Священное Писание и Предание мусульман:",
    answer: "Коран и Сунна",
  },
  {
    question: "Два основных направления в исламе?",
    answer: "суннизм, шиизм",
  },
  {
    question: "Кто является последним из пророков, печатью пророков?",
    answer: "Пророк Мухаммад",
  },
  {
    question: "Самый страшный грех в исламе – ширк:",
    answer: "многобожие",
  },
  {
    question: "Укажите, сколько столпов веры в исламе:",
    answer: "5",
  },
  {
    question:
      "Укажите, кем в истории ислама являлись Абу Бакр, Умар, Усман, Али?",
    answer: "праведные халифы",
  },
  {
    question: "Выберите определение закята?",
    answer: "обязательная милостыня",
  },
  {
    question: "Мистическое течение  в исламе называется?",
    answer: "суфизм",
  },
  {
    question: "Укажите определение слова тафсир:",
    answer: "комментарии к Корану",
  },
  {
    question: "Какай период считается «золотым веком» в хадисоведении?",
    answer: "9 век",
  },
  {
    question: "Кто является автором произведения Ал Джами- ас Саких?",
    answer: "Имам Ал -Бухари",
  },
  {
    question: "Совокупность религиозных обрядов называется?",
    answer: "религиозный культ",
  },
  {
    question:
      "Вера в амулеты и талисманы, проявление ранней формы религиозных верований  называется",
    answer: "фетишизм",
  },
  {
    question: "Сказания о жизни пророка Мухаммада-это ?",
    answer: "хадис",
  },
  {
    question: "Дочь пророка Мухаммада, жена Али:",
    answer: "Фатима",
  },
  {
    question: "Первый текст священной Авесты был написан на……?",
    answer: "на 12 тыс. шкурах крупного рогатого скота",
  },
  {
    question:
      "Самая распространенная религия в Центральной Азии до прихода  ислама?",
    answer: "Зороастризм",
  },
  {
    question: "Конфессия - это?",
    answer: "вероиспове́дание",
  },
  {
    question: "Когда был приятЗакон «О борьбе с терроризмом» в Узбекистане",
    answer: "15 декабря 2000",
  },
  {
    question:
      "На какие социальные слои населения направлена  пропаганда террористических  и религиозно - фундаменталистских организаций",
    answer: "на молодежь и подростков",
  },
  {
    question: "Как переводится слово хадис:",
    answer: "новый, рассказ",
  },
  {
    question: "Сколько заповедей было отправлено Моисею от Бога Яхве?",
    answer: "10",
  },
  {
    question: "В какой стране появился Иудаизм?",
    answer: "в Палестине",
  },
  {
    question: "Православие сложилось как самостоятельная церковь?",
    answer: "в 1054 году",
  },
  {
    question: "Как подразделяются суры в Коране:",
    answer: "Суры написанные в  Мекке и Медине",
  },
  {
    question: "Как называют в Исламе духовного человека проводящих обряды?",
    answer: "имам",
  },
  {
    question: "Основная идея Зороастризма?",
    answer: "борьба между добром и злом",
  },
  {
    question: "Как переводится  священная  книга Буддизма «Трипитака»",
    answer: "три корзины",
  },
  {
    question: "Что означает слово  террор?",
    answer: "страх, ужас",
  },
  {
    question: "Какая часть  Библии не принимается в Иудаизме?",
    answer: "новый",
  },
  {
    question:
      "В скольких странах мира ислам является государственной религией?",
    answer: "28",
  },
  {
    question: "Кто является высшим разумом в православии:",
    answer: "Бог",
  },
  {
    question: "Сущность понятия экстремизм?",
    answer: "приверженность к крайним мерам",
  },
  {
    question: "Сущность понятия фундаментализм?",
    answer:
      "основание – крайне консервативные, религиозные, философские, социальные течения",
  },
  {
    question:
      "В какой статье Конституции Республики Узбекистан говорится о свободе совести?",
    answer: "статья 31",
  },
  {
    question: "Где впервые был ниспослан Коран?",
    answer: "в пещере Хира (Мекка)",
  },
  {
    question:
      "Сколько религиозных конфессий ведут свою деятельность в Узбекистане?",
    answer: "16",
  },
  {
    question: "Кому был ниспослан Коран?",
    answer: "Пророку  Мухаммаду",
  },
  {
    question: "По чьему приказу Коран был составлен в письменной форме?",
    answer: "Абу Бакр",
  },
  {
    question: "Сущность слова толерантность",
    answer: "терпимость",
  },
  {
    question: "Прозелити́зм- это",
    answer:
      "стремление обратить других в свою веру, а также деятельность, направленная на достижение этой цели.",
  },
  {
    question:
      "Когда в первые в Узбекистане был принят   Закон  «О свободе совести и религиозных организациях»?",
    answer: "1991 г. 14 июня",
  },
  {
    question:
      "В какой статье закона «О свободе совести и религиозных организациях» (1998г.) говорится о равноправии граждан независимо от их отношения к религии?",
    answer: "статья.3",
  },
  {
    question: "Что означает слово хариджиты?",
    answer: "отколовшиеся",
  },
  {
    question: "В какой период возникли ранние формы религий?",
    answer: "40 тыс. лет – 12 тыс. лет",
  },
  {
    question: "Всемирная мусульманская община называется?",
    answer: "Умма",
  },
  {
    question: "В шариате запретные действия?",
    answer: "харам",
  },
  {
    question: "Фарз – это?",
    answer: "действие, которое считается обязательным",
  },
  {
    question: "Всё то, что разрешено и допустимо в исламе – это?",
    answer: "халал",
  },
  {
    question:
      "Последователи какого направления считали, что власть имеет божественную природу и должна переходить по наследству потомкам халифа Али:",
    answer: "шииты",
  },
  {
    question: "В какую ночь было ниспослано первое откровение Корана?",
    answer: "В Лайлятуль-Кадр (Ночь Предопределения в месяц Рамадан)",
  },
  {
    question: "Имя Пророка  Иудаизма?",
    answer: "Пророк  Моисей",
  },
  {
    question: "Калам - это:",
    answer:
      "рассуждение, спор – одно из основных направлений арабо-мусульманской философии;",
  },
  {
    question: "В каком году в первые появилось понятие «киберпространство»?",
    answer: "1982 году",
  },
  {
    question: "Макрух- это:",
    answer: "неодобряемые поступки, деяния которые не стоит совершать",
  },
  {
    question: "Фикх–переводится как?",
    answer: "понимание, знание",
  },
  {
    question: "К какому из течений ислама относится ханафитский мазхаб?",
    answer: "сунниты",
  },
  {
    question: "К какому из течений ислама относится джафаритский мазхаб?",
    answer: "шииты",
  },
  {
    question: "Сколько религиозных конфессий ведут свою деятельность в мире?",
    answer: "5000",
  },
  {
    question: "Что вы понимаете под понятием религиозная секта?",
    answer:
      "религиозная группа, имеющая своё учение и свою практику, отличные от господствующей церкви или идеологии",
  },
  {
    question: "Какие из этих сект особо  искажают религиозные учения?",
    answer: "все ответы верны",
  },
  {
    question: "Самая агрессивная секта",
    answer: "Белое Братство",
  },
  {
    question:
      "В каком году Ташкент получил название « Столица исламской культуры»",
    answer: "2007г",
  },
  {
    question: "Миссионер – это?",
    answer: "лицо, посылаемое для религиозной пропаганды среди населения",
  },
  {
    question: "От лат. …… «посылка, поручение»?",
    answer: "миссионе́рство",
  },
  {
    question:
      "Какой правовой документ запрещает незаконное   производство, хранение, ввоз или хранение религиозных  материалов на территории Республики Узбекистан?",
    answer:
      "в Кодексе об административной ответственности  Республики Узбекистан",
  },
  {
    question:
      "«Прозелитизм - это практика обращения верующих одной религии в другую. Лица, признанные виновными в нарушении этого правила, будут привлечены к ответственности в соответствии с законом '. Сколько из этих положений изложено в Законе о свободе совести и религиозных организациях (в новой редакции)?",
    answer: "5статья, 3-часть",
  },
  {
    question: "Название секты, основанной Дэвидом Корешем в штате Техас, США.",
    answer: "Ветвь Давидова",
  },
  {
    question: "Против чего направлен терроризм ?",
    answer: "преступные деяния против человечества",
  },
  {
    question:
      "Что нужно сделать, обнаружив предмет похожий на взрывное устройство?",
    answer:
      "не трогать его, предупредить окружающих, сообщить о находке в милицию или любому должностному лицу",
  },
  {
    question: "В какой стране впервые появилось понятие «терроризм»?",
    answer: "Франция",
  },
  {
    question:
      "Несмотря на то что существует  общепринятое определение понятия  «терроризм», тем не менее, его можно трактовать еще, как способ решения………?",
    answer: "политических проблем методом насилия",
  },
  {
    question: "Кто создал первый сайт в интернете?",
    answer: "Тим Бернерс Ли",
  },
  {
    question: "Слово «киберпространство» впервые было введено :",
    answer: "Уильямом Гибсоном",
  },
  {
    question: "Киберпространство означает?",
    answer: "виртуальное  пространство, реальность",
  },
  {
    question:
      "В каком направлении Стратегии действий на 2017-2021г, говориться об «Обеспечение безопасности, религиозной толерантности и межнационального согласия»?",
    answer: "5",
  },
  {
    question: "Глобализация – это?",
    answer:
      "процесс всемирной экономической, политической, культурной и религиозной интеграции и унификации",
  },
  {
    question: "Идеологический иммунитет- это?",
    answer: "это система, служащая защите личности, нации, общества",
  },
  {
    question: "Когда международный День Интернета?",
    answer: "4 апреля",
  },
  {
    question:
      "Как называется информационное пространство оказывающее  влияние на людей?",
    answer: "все ответы верны",
  },
  {
    question: "Что собой представляет главная основа и сила   Зороастризма?",
    answer: "добрая мысль, доброе слово, доброе дело",
  },
  {
    question:
      "Когда проблема терроризма стала одной из главных угроз общественно-политической жизни Узбекистана после терактов в Ташкенте?",
    answer: "16 февраля 1999 года",
  },
  {
    question:
      "Когда и где была основана Всемирная ассоциация христианских фундаменталистов?",
    answer: "1919 г. в Филадельфии",
  },
  {
    question:
      "Сколько лет было Пророку Мухаммаду, когда ему было ниспослано первое откровение?",
    answer: "40",
  },
  {
    question: "Сколько лет длилось ниспослание Корана?",
    answer: "23",
  },
  {
    question: "Сколько пророков поименно упомянуто в Коране?",
    answer: "25",
  },
  {
    question: "Термин «religаre» в словарях переводится как?",
    answer: "связывать, соединять",
  },
  {
    question:
      "Раздел религиоведения, изучающий общественные основы религии, общественные закономерности ее возникновения, функции и роль в общественной системе:",
    answer: "социология религии",
  },
  {
    question:
      "Раздел обрисовывает движущийся во времени мир религии во всем ее многообразии, воспроизводит прошлое различных религии и сохраняет информацию о многочисленных религиях:",
    answer: "история религии",
  },
  {
    question:
      "Раздел, изучающий совокупность философских понятий, принципов, концепции, дающих философское объяснение и понимание объекта. Раскрывает глубинные сущностные свойства религии:",
    answer: "философия религии",
  },
  {
    question:
      "Функция, восполняющая ограниченность, зависимость, бессилие людей в плане перестройки сознания и изменения, объективных условии существования:",
    answer: "компенсаторная",
  },
  {
    question:
      "Функция, которая способствует развитию определенных слоев культуры – письменности, книгопечатания, искусства, обеспечивает сохранение и развитие ценностей религиозной культуры:",
    answer: "культуротранслирующая",
  },
  {
    question: "Этимологическое значение слова «тотем» означает:",
    answer: "род",
  },
  {
    question: "Что такое оссуария?",
    answer: "костехранилище",
  },
  {
    question: "Бог – олицетворение зла и тьмы в Зороастризме?",
    answer: "Ахриман",
  },
  {
    question: "Бог, воплощавший мудрость и правду в Зороастризме?",
    answer: "Мазда",
  },
  {
    question: "Кун – цзы   переводится в китайской религии как?",
    answer: "учитель Кун",
  },
  {
    question: "Сборник высказываний Конфуция-это?",
    answer: "Лунь - Юй",
  },
  {
    question: "Имя основателя Даосизма?",
    answer: "Лао - цзы",
  },
  {
    question: "Национальная религия японцев?",
    answer: "Синтоизм",
  },
  {
    question: "Термин «Синто» означает?",
    answer: "путь богов",
  },
  {
    question: "Как называется религиозная мусульманская школа?",
    answer: "медресе",
  },
  {
    question: "Индуизм представляет собой?",
    answer: "политеистическая религия Индии",
  },
  {
    question: "Тримурти – это триединое божество - относится  к какой религии?",
    answer: "к Индуизму",
  },
  {
    question: "Пантеон – это?",
    answer: "иерархическая совокупность богов",
  },
  {
    question: "Священное писание Иудаизма:",
    answer: "Талмуд",
  },
  {
    question: "Время отдыха и запрета на любую деятельность в Иудаизме:",
    answer: "суббота",
  },
  {
    question: "Жизнь, по мнению Будды – это:",
    answer: "страдание",
  },
  {
    question: "Имя матери Будды:",
    answer: "Майя",
  },
  {
    question: "Крещение Иисуса Христа совершилось:",
    answer: "в реке Иордан",
  },
  {
    question: "Термин «Christos» в переводе с греческого языка означает?",
    answer: "помазанник",
  },
  {
    question: "Значение слова «протестантизм»?",
    answer: "возражение, несогласие",
  },
  {
    question: "Самая молодая мировая религия?",
    answer: "Ислам",
  },
  {
    question: "Назовите национальную религию?",
    answer: "Синтоизм",
  },
  {
    question: "Церковь – это здание предназначенное для…..?",
    answer: "для отправления культа в христианстве",
  },
  {
    question: "Мавлюд – это праздник:",
    answer: "дня рождения Пророка Мухаммада",
  },
  {
    question: "Как переводится с арабского священная книга мусульман «Коран»?",
    answer: "чтение",
  },
  {
    question: "Слово «муслим» в переводе с арабского языка означает:",
    answer: "предавший себя Аллаху",
  },
  {
    question: "Как звали мать Пророка Мухаммада?",
    answer: "Амина",
  },
  {
    question: "Один из мусульманских праздников – день общественной молитвы:",
    answer: "пятница",
  },
  {
    question: "Курбан – Байрам – это:",
    answer: "праздник жертвоприношения",
  },
  {
    question: "Концепция «четырех благородных истин» принадлежит?",
    answer: "Буддизму",
  },
  {
    question:
      "В какой статье Конституции Республики Узбекистан говорится, об отделении государства от религии:",
    answer: "61 статье",
  },
  {
    question: "Название папского государства:",
    answer: "Ватикан",
  },
  {
    question: "Священное Писание христиан:",
    answer: "Библия",
  },
  {
    question:
      "Одна из священных книг христианства, в переводе означающая «благая весть»?",
    answer: "Евангелие",
  },
  {
    question: "Как называется мусульманский храм для молитвы?",
    answer: "мечеть",
  },
  {
    question: "Определение хаджа?",
    answer: "паломничество",
  },
  {
    question: "Причина конфликта суннитов и шиитов?",
    answer: "вопрос о преемственности  власти",
  },
  {
    question:
      "Назовите религию, которая разделяет общество на   касты, в Индии?",
    answer: "Брахманизм",
  },
  {
    question: "Древнее, религиозное, священное писание  Индии?",
    answer: "Веда",
  },
  {
    question:
      "Религиозное направление, призывающие к возрождению традиционных ценностей и ориентирующиеся на консервативные социальные цели:",
    answer: "религиозный фундаментализм",
  },
  {
    question: "Какова основная цель направления ислама – ханбалия?",
    answer: "все ответы верны",
  },
  {
    question:
      "Где находится могила известного ученого Мухаммада ибн Исмаила Каффаля  Шаши ?",
    answer: "в Ташкенте",
  },
  {
    question: "Когда произошла битва при Сиффине?",
    answer: "657 год",
  },
  {
    question: "Имена первых людей на Земле?",
    answer: "Адам и Ева",
  },
  {
    question: "Пророк Мухаммад – пророк, какой религии?",
    answer: "Ислам",
  },
  {
    question: "Бог в Иудаизме:",
    answer: "Яхве",
  },
  {
    question: "Пророк Иисус Христос – пророк, какой религии?",
    answer: "Христианства",
  },
  {
    question:
      "Группа бывших сторонников халифа  Али, бросивших его после битвы при Сиффине?",
    answer: "шииты",
  },
  {
    question: "Как называлась гора, где восседал бог Яхве?",
    answer: "Синай",
  },
  {
    question: "Таухид означает...?",
    answer: "единство Бога и Его атрибутов",
  },
  {
    question:
      "Где находится мемориальный комплекс и захоронение великого суфиста, Ахмада  Яссави?",
    answer: "в Туркестане",
  },
  {
    question: "Что означает в переводе имя Заратушрты?",
    answer: "человек оседлавший желтого верблюда",
  },
  {
    question: "Назовите религиозное течение, не относящееся к религии Ислам?",
    answer: "католицизм",
  },
  {
    question: "Какие действия не одобряются в Исламе?",
    answer: "идолопоклонство",
  },
];

const box = document.querySelector(`.box`);
const input = document.querySelector(`.inp-q`);
const answer = document.querySelector(`.inp-a`);

function create(question, answer) {
  box.innerHTML += `<tr class="w-100">
                    <th scope="row" class="w-50">${question}</th>
                    <td class="w-50">${answer}</td>
                </tr>`;
}

for (i = 0; i < data.length; i++) {
  create(data[i].question, data[i].answer);
}

input.addEventListener("input", function (e) {
  let value = e.target.value;
  answer.value = "";
  let find = data.filter((item) =>
    item.question.toLowerCase().includes(value.toLowerCase())
  );
  box.innerHTML = "";
  for (i = 0; i < find.length; i++) {
    create(find[i].question, find[i].answer);
  }
});

answer.addEventListener("input", function (e) {
  let value = e.target.value;
  input.value = "";
  let find = data.filter((item) =>
    item.answer.toLowerCase().includes(value.toLowerCase())
  );
  box.innerHTML = "";
  for (i = 0; i < find.length; i++) {
    create(find[i].question, find[i].answer);
  }
});
