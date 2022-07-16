const cardsInital = [{
        name: 'Крым',
        link: 'http://mobimg.b-cdn.net/v3/fetch/86/86a3864e4c40a1b2f05a3ac8d0c6ff25.jpeg?w=1470&r=0.5625',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'
    }, {
        name: 'Алтай',
        link: 'http://catherineasquithgallery.com/uploads/posts/2021-02/1613636503_75-p-fon-dlya-prezentatsii-gori-118.jpg',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'
    }, {
        name: 'Айдахо',
        link: 'http://catherineasquithgallery.com/uploads/posts/2021-03/1614636786_14-p-fon-gori-dlya-fotoshopa-18.jpg',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'
    }, {
        name: 'Амисан',
        link: 'http://on-desktop.com/wps/2017Nature___Mountains_Mountain_view_Paytlerkofel__Italy__112938_.jpg',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'
    }, {
        name: 'Амисан',
        link: 'http://on-desktop.com/wps/2017Nature___Mountains_Mountain_view_Paytlerkofel__Italy__112938_.jpg',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'

    },
    {
        name: 'Робсон',
        link: 'http://kartinkin.net/uploads/posts/2021-07/1625166396_19-kartinkin-com-p-fon-gori-krasivie-foni-21.jpg',
        description: 'Алтайские горы, или Алтай (от монгольского «алтан» — «золотой»), — одна из самых значительных горных систем Центральной Азии и Южной Сибири. Они находятся на территории сразу четырех государств — России, Казахстана, Монголии и Китая'
    }
]

/* cards width mountains */
const altai = document.querySelector('#popupAltai')
const altaiTitle = altai.querySelector('.popup__title')
const altaiParagraph = altai.querySelector('.popup__paragraph')

const templateElement = document.querySelector('#cards').content;
const elements = document.querySelector('.elements');


cardsInital.forEach((item) => {
    const card = createCard(item);
    elements.prepend(card);
})

/* функция возращающая карточки */
function createCard(data) {
    const userElementWrapper = templateElement.querySelector('.element').cloneNode(true);

    const cardsTitle = userElementWrapper.querySelector('.element__title');
    const cardsLink = userElementWrapper.querySelector('.element__image');
    const cardsDescription = userElementWrapper.querySelector('.element__description');

    cardsTitle.textContent = data.name
    cardsLink.src = data.link
    cardsDescription.textContent = data.description


    userElementWrapper.addEventListener('click', function() {
        altai.classList.add('popup__active');
        altaiTitle.textContent = cardsTitle.textContent
        altaiParagraph.textContent = cardsDescription.textContent

    })

    return userElementWrapper

}




/* scroll bar */
window.addEventListener('scroll', function() {
    const headerBar = document.querySelector('.header')
    headerBar.classList.toggle('header__sticky', window.scrollY > 0)

})