const age = +prompt("Скільки вам років?");
const citi = prompt("В якому місті живете?");
const sport = prompt("Найулюбленіший спорт?");

let ageLine = `Вік: ${age}`;

let liveLine = `Tи живеш у місті ${citi}`;
const myCities = [
    {
        Citi: 'Київ',
        Country: 'України',
    },
    {
        Citi: 'Вашингтон',
        Country: 'Сполучених штатів',
    },
    {
        Citi: 'Лондон',
        Country: 'Британії',
    }
]

let lineSpot = `Твій улюблений спорт ${sport}`;
const sports = [
    {
        Sport: 'Формула',
        Champion: 'Max Verstappen',
    },
    {
        Sport: 'Футбол',
        Champion: 'Cristiano Ronaldo',
    },
    {
        Sport: 'Кибер Спорт',
        Champion: 'Oleksandr Kostyliev (s1mple)',
    },
]

myCities.forEach(myCity => {
    if (myCity.Citi === citi) {
        liveLine = `Ти живеш у столиці ${myCity.Country}`;
    }
})

sports.forEach(mySport => {
    if (mySport.Sport === sport) {
        lineSpot = `Круто! Хочеш стати ${mySport.Champion}?`;
    }
})

if (age === null || age === 0) {
    ageLine = `Шкода, що Ви не захотіли ввести свій вік`
}

if (citi === null || citi === '') {
    liveLine = `Шкода, що Ви не захотіли ввести своє місто`
}

if (sport === null || sport === '') {
    lineSpot = `Шкода, що Ви не захотіли ввести свій улюбленний вид спорту`
}

alert(`
    -${ageLine};
    -${liveLine};
    -${lineSpot}
`)