const kuori_card = document.getElementById('kuori-card'),
        riisu_card = document.getElementById('riisu-card'), 
        radium_card = document.getElementById('radium-card'),
        amortem_card = document.getElementById('amortem-card'),
        rabies_card = document.getElementById('rabies-card'),// Создал переменные для карточек альбомов

        album_kuori = document.getElementById('album1'),
        album_riisu = document.getElementById('album2'),
        album_radium = document.getElementById('album3'), // Создал переменные для самих альбомов
        album_amortem = document.getElementById('album4'),
        album_rabies = document.getElementById('album5'),

        title_albums = document.getElementById('albumscategory'),
        title_singles = document.getElementById('singlescategory'), // Создал переменные для заголовков "Albums" и "Singles"

        albums_cards = document.querySelector('.albums-cards'),
        singles_cards = document.querySelector('.singles-cards'), // Создал переменные для всех карточек с альбомами и синглами
        back = document.querySelector('.toalbums'); // Переменная для заголовка "To albums and singles"

      


const textesOfSongs = [

    {   title: "Kuori",
        songtext: [
            "Katsopa tuonne, tuohon latoon",
            "Katsopa tarkkaan, katso kattoon",
            "Siellä roikkuu tyhjä kuori",
            "Tuulessa tuoksuu väkevä tuomi",
    
            "",
    
            "Kuuletko sen?",
            "Kuuletko sen?,",
    
            "",
    
            "Katsopa peiliin, mieti tarkkaan",
            "Mihin tää johtaa, kuka ohjaa",
            "Vielä sinäkin sinäkin siellä roikut",
            "Yllä heinien tuulessa keinuen",
    
            "",
    
            "Kuuletko sen?",
            "Kuuletko sen?",
    
            "",
    
            "Kuka kuiskii",
            "Sisällä pään",
            "Sulta vaatii",
            "Saa tekemää",
        ]
    },

    {   title: "Koti",
        songtext: [
            "Lasten huoneen hämärässä makaa tyttö viaton",
            "Oman isän silmissä on kai täysin arvoton",
            "Oi miksi sallit kaiken tämän, tyttö syyttää luojaansa",
            "Silmät täyttyy kyynelistä kun viiltää auki ranteensa",

            "",

            "Kaunat ikiaikaiset saa tekoon epätoivoiseen",
            "Räjähteet hän kehoon teippaa ja lausuu hiljaa rukouksen",
            "Kaupungin keskustasta löytyy paikka sopiva",
            "Hän vetää sokan ja hymyilee, nyt odottaa mua nirvana",

            "",

            "Maailma on paras paikka",
            "Koti meidän kaikkien",
            "Uuden päivän aurinkoisen tuo huominen",
            "Maailma on paras paikka",
            "Koti meidän kaikkien",
            "Täällä synnyin ja täällä elän",
            "Päivän viimeisen",

            "",

            "Pommikone supervallan taivaan halki liihottaa",
            "Köyhän maan pienet lapset sille koettaa vilkuttaa",
            "Lapset näkee kirkkaan valon, hämmästykseen vääntyy suut",
            "Loppui nälkä, loppui kurjuus, jäljelle jäi mustat luut"
        ]
    },

    {   title: "Kiroan",
        songtext: [
            "Minä kiroan kaikki jumalat",
            "Jotka sielut harhaan johtaa",
            "Minä kiroan kansanjohtajat",
            "Jotka pimeyteen meitä ohjaa",

            "",
            
            "Minä kiroan demokratian",
            "Jonka lapset nälkää näkee",
            "Minä kiroan teknologian",
            "Joka meistä uhreja tekee",

            "",
            
            "Tahtoisin sytyttää kaiken palamaan",
            "Se ehkä mielenrauhan tois",
            "Tuhkasta syntyis kaikki uudestaan",
            "Ja painajaiset kuolis pois",

            "",
            
            "Minä kiroan elon ankean",
            "Pelkkää surua, murhetta, tuskaa",
            "Minä kiroan koko maailman",
            "Ei julmuudella oo pohjaa",
            
            "Minä kiroan mielen kamalan",
            "Joka heikkoa aina sortaa",
            "Minä kiroan kurjan kuoleman",
            "Joka lopulta meidät korjaa",
        ]
    },

    {   title: "Ruma Rakkaus",
        songtext: [
            "Kun saapui hän elämääsi",
            "Muurit vihdoin mureni",
            "Ja kaikki haaveet pian täyttyisi",
            "Pistit peliin koko sielusi",

            "",
            
            "Hän rakkautta vannoi",
            "Sä kätesi annoit",
            "Lausuit lupauksen ikuisen",
            "Mutta surujen kirjaan",
            "Sä nimesi kirjaat",
            "Ja tuska repii koko sielusi",

            "",
         
            "Kun rakkaus rumaksi muuttuu",
            "Jää unholaan kaikki lupaukset",
            "Sateen jälkeen uusi myrsky nousee",
            "Murskaa toivon huomisen",

            "",
            
            "Nyt puiden alla sä piilossa itket",
            "Kyyneleet poskille jäätyvät",
            "Mutta mieluummin sä jäädyt ja kuolet",
            "Kun palaat sinne takaisin",
            
            "",
 
            "Ja uusi aamu taas kirkkaana nousee",
            "Peittäen avunhuudot eilisen",
            "Hukkuvan raajat oljenkortta etsii",
           " Tietäen viimeisenkin katkenneen",
        ]
    },

    {   title: "Elon Tiella",
        songtext: [
            "Jotkut jäävät mutaan makaamaan",
            "Toiset latojen orsille roikkumaan",
            "Jotkut seinien sisälle suljetaan",
            "Toiset taivaita kohti kurkoittaa",
            
            "",
            
            "Ei suonissa virtaa väkevä veri",
            "Ei rakot meidän käsissä pesi",
            "Eivät metsät kerro tarinoita",
            "Ei havulintu meille laula",
            
            "",
            
            "Musta korppi meille laulaa",
            "Synkkiä lauluja manan mailta",
            "Musta korppi meille laulaa",
            "Synkkiä lauluja manan mailta",
            
            "",
            
            "Heikot sortuu elon tiellä",
            "(Heikot sortuu elon tiellä)",
            "Heikot sortuu elon tiellä",
            "(Heikot sortuu elon tiellä)",
            
            "",
            
            "Miksi kaivan maata jalkojen alta",
            "Miksi sydän tuntuu niin painavalta",
            "Miksi ajatus kiertää pientä kehää",
            "Miksi syöpä tekee minuun pesää",
        ]
    },

    {   title: "Puhe",
        songtext: [
            "Vielä eilen hetki sitten",
            "Olin suuri kuin jättiläinen",
            "Suuresta suusta suureen ääneen",
            "Lausuin sanoja, huusin ääneen",

            "",
            
            "Sanoja siitä, mitä mieltä",
            "Olen teistä ja teidän töistä",
            "Puhuin puolesta, puolesta maan",
            "Joka jalkojen alla upottaa",

            "",
            
            "Kuuta katson, kuka sen omistaa",
            "Kenen on taivas, kenen on tämä maa",
            "Kenen kehtoa kalma keinuttaa",
            "Kenen toimesta me täällä kuljetaan",

            "",
            
            "Kuuta katson, kuka sen omistaa",
            "Kenen on taivas, kenen on tämä maa",
            "Kenen kehtoa kalma keinuttaa",
            "Kenen toimesta me täällä kuljetaan",
            
            "",
            
            "Mätäs mättäältä, metri metriltä",
            "Vaivun maahan, maahan vetiseen",
            "Täällä on turhaa, turha on huutaa",
            "Sillä täällä ei sanoja kuulla",

            "",
            
            "Kuuta katson, kuka sen omistaa",
            "Kenen on taivas, kenen on tämä maa",
            "Kenen kehtoa kalma keinuttaa",
            "Kenen toimesta me täällä kuljetaan",

            "",
            
            "Kuuta katson, kuka sen omistaa",
            "Kenen on taivas, kenen on tämä maa",
            "Kenen kehtoa kalma keinuttaa",
            "Kenen toimesta me täällä kuljetaan",
        ]
    },
]




kuori_card.addEventListener('click', () => {
    title_albums.classList.add('nonactive');
    title_singles.classList.add('nonactive');
    album_kuori.classList.add('active');
    albums_cards.classList.add('nonactive');
    singles_cards.classList.add('nonactive');
    back.classList.add('active');
    
});

riisu_card.addEventListener('click', () => {
    title_albums.classList.add('nonactive');
    title_singles.classList.add('nonactive');
    album_riisu.classList.add('active');
    albums_cards.classList.add('nonactive');
    singles_cards.classList.add('nonactive');
    back.classList.add('active');
});

radium_card.addEventListener('click', () => {
    title_albums.classList.add('nonactive');
    title_singles.classList.add('nonactive');
    album_radium.classList.add('active');
    albums_cards.classList.add('nonactive');
    singles_cards.classList.add('nonactive');
    back.classList.add('active');
});

amortem_card.addEventListener('click', () => {
    title_albums.classList.add('nonactive');
    title_singles.classList.add('nonactive');
    album_amortem.classList.add('active');
    albums_cards.classList.add('nonactive');
    singles_cards.classList.add('nonactive');
    back.classList.add('active');
});

rabies_card.addEventListener('click', () => {
    title_albums.classList.add('nonactive');
    title_singles.classList.add('nonactive');
    album_rabies.classList.add('active');
    albums_cards.classList.add('nonactive');
    singles_cards.classList.add('nonactive');
    back.classList.add('active');
});


function addSongText() {   
    const block_songtext = document.getElementById('song-text') //Блок с текстом песни, который изначально невидим
    const nameSongHead = document.getElementById('name')//Название песни, которого изначально нет в этом блоке
    const iconClose = document.getElementById('close') //Крестик для закрытия этого окна
    const paragraphSongText = document.getElementById('paragraph-song-text') //Блок span, вовнутрь которого мы будем добавлять текст песни

    //Добавляем событие клика
    document.addEventListener('click', function(event) {
        const clickedElement = event.target; //event.target - тот элемент, по которому кликнули
      
    // Проверяем, если кликнутый элемент - это a (ссылка) и имеет data-атрибут data-song
        if (clickedElement.tagName === 'A' && clickedElement.hasAttribute('data-song')) {
            paragraphSongText.innerHTML = 'Text undefined' //Сразу присваиваем неизвестное значение блоку с текстом песни
            block_songtext.classList.add('active') // Делаем блок с текстом песни активным после того, как кликнули по названию песни
            
            //Получаем содержимое из того элемента, по которому кликнули и присваиваем в переменную clickedSong
            let clickedSong = clickedElement.textContent; 
            console.log(clickedSong); // Проверка 1

            //Удаляем первые три символа из полученного содержимого, присваиваем в переменную
            const new_namesong = clickedSong.slice(3) 
            console.log(new_namesong) //Проверка 2
            nameSongHead.textContent = new_namesong //Вставляем название песни в пустой <h3></h3>

            // Перебираем массив с текстом песен. Используем метод forEach. Перебираем каждый элемент массива
            // У нас каждый элемент массива - это объект. Для обозначения элемента массива использую слово item
            textesOfSongs.forEach (item => {
                if (new_namesong === item.title) // Если название песни совпадает со свойством title из какого-нибудь элемента массива, то
                    { 
                        //Массив с текстом песни преобразовываем в строку при помощи join (разделитель - <br>)
                        const songTextInMassive = item.songtext.join("<br>")
            
                       //Выводим текст песни в пустое значение блока span (получилось толлько при помощи innerHTML)
                        paragraphSongText.innerHTML = songTextInMassive 
                    } 
            })
        }
    });

    //Если кликнули по иконке крестика, то окошко закроется
    iconClose.addEventListener('click', () => 
        block_songtext.classList.remove('active'),
        
    )
}

addSongText()