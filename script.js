// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте)

let dynamoKyiv = {
    eurocups: true,
    trophies: 38,
    stadium: 'НСК «Олімпійський»',
    location: 'Київ, Україна'
}

let ukraine = {
    capital: 'Київ',
    area: '603 548 км²',
    president: 'Володимир Зеленський',
    independence: ' 24 серпня 1991'
}

let samsungGalaxyA50 = {
    os: 'Android',
    displaySize: 6.4,
    battery: '4000 мА·год',
    processor: 'Exynos 9611'
}

let car = {
    model: 'Camaro',
    producer: 'Chevrolet',
    tankVolume: 3.6,
    horsePower: 323
}

let TV = {
    brand: 'JVC',
    color: 'Сірий',
    LCD: false
}

// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let band = {
    title: 'Queen',
    founded: 1970,
    members: ['Freddie Mercury', 'Brian May', ' Roger Taylor', 'John Deacon'],
    discography: {
        1973: 'Queen',
        1974: 'Queen II',
        1975: 'A Night at the Opera',
        1976: 'A Day at the Races',
        1977: 'News of the World'
    }
}

let actor = {
    named: 'Jackie Chan',
    nationality: 'Chinese',
    occupation: ['actor', 'stuntman', 'filmmaker', 'action choreographer', 'singer'],
    wife: {
        name: 'Joan Lin',
        occupation: 'Actress',
        children: true
    }
}

let footballPlayer = {
    fullName: 'Андрій Миколайович Шевченко',
    career: {
        dynamoKyiv: {
            games: 249,
            goals: 124
        },
        milan: {
            games: 322,
            goals: 175
        },
        chelsea: {
            games: 77,
            goals: 22
        }
    },
    wife: true,
    children: ['Джордан', 'Кристіан', 'Олександр', 'Райдер-Габриель']
}

let racingDriver = {
    fullName: 'Себастьян Феттель',
    formulaOne: {
        BMWSauber: '2006—2007',
        toroRosso: '2007—2008',
        redBull: '2009-2014',
        ferrari: '2015-2020'
    },
    wins: 53,
    championships: [2010, 2011, 2012, 2013]
}

let basketballPlayer = {
        born: '30 грудня 1984',
        position: 'Small forward',
        NBAChampion: [2012, 2013, 2016, 2020],
        career: {
            clevelandCavaliers: '2003-2010',
            miamiHeat: '2010-2014',
            clevelandCavaliers: '2014-2018',
            losAngelesLakers: '2018–present'
        }
    }
    // 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (const key in dynamoKyiv) {
    console.log(key);
}

console.log('_________________________');

for (const key in ukraine) {
    console.log(key);
}

console.log('_________________________');

for (const key in samsungGalaxyA50) {
    console.log(key);
}

console.log('_________________________');

for (const key in car) {
    console.log(key);
}

console.log('_________________________');

for (const key in TV) {
    console.log(key);
}

console.log('_________________________');

for (const key in band) {
    console.log(key);
}

console.log('_________________________');

for (const key in actor) {
    console.log(key);
}

console.log('_________________________');

for (const key in footballPlayer) {
    console.log(key);
}

console.log('_________________________');

for (const key in racingDriver) {
    console.log(key);
}

console.log('_________________________');

for (const key in basketballPlayer) {
    console.log(key);
}

console.log('_________________________');

// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(dynamoKyiv));
console.log('_________________________');

console.log(Object.keys(ukraine));
console.log('_________________________');

console.log(Object.keys(samsungGalaxyA50));
console.log('_________________________');

console.log(Object.keys(car));
console.log('_________________________');

console.log(Object.keys(TV));
console.log('_________________________');

console.log(Object.keys(band));
console.log('_________________________');

console.log(Object.keys(actor));
console.log('_________________________');

console.log(Object.keys(footballPlayer));
console.log('_________________________');

console.log(Object.keys(racingDriver));
console.log('_________________________');

console.log(Object.keys(basketballPlayer));
console.log('_________________________');

// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars = [{
    model: 'Volkswagen Passat',
    editionYear: 2011,
    power: 150,
    color: 'grey'
}, {
    model: 'Volkswagen Touareg',
    editionYear: 2015,
    power: 340,
    color: 'white'
}, {
    model: 'Fiat 500X',
    editionYear: 2012,
    power: 180,
    color: 'red'
}, {
    model: 'Chevrolet Malibu',
    editionYear: 2014,
    power: 169,
    color: 'black'
}, {
    model: 'Chevrolet Camaro',
    editionYear: 2016,
    power: 323,
    color: 'yellow'
}, {
    model: 'Skoda Octavia',
    editionYear: 2014,
    power: 102,
    color: 'green'
}, {
    model: 'BMW X5',
    editionYear: 2018,
    power: 400,
    color: 'black'
}, {
    model: 'Mitsubishi Outlander',
    editionYear: 2016,
    power: 170,
    color: 'blue'
}, {
    model: 'Audi A4',
    editionYear: 2014,
    power: 190,
    color: 'grey'
}, {
    model: 'Audi A6',
    editionYear: 2016,
    power: 190,
    color: 'white'
}]

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [{
    name: 'Lviv',
    population: 721301,
    country: 'Ukraine',
    region: 'West',
}, {
    name: 'Manchester',
    population: 552858,
    country: 'England',
    region: '	North West',
}, {
    name: 'Barcelona',
    population: 1620343,
    country: 'Spain',
    region: 'Catalonia',
}, {
    name: 'Liverpool',
    population: 513441,
    country: 'England',
    region: 'North West',
}, {
    name: 'Valencia',
    population: 814208,
    country: 'Spain',
    region: 'Valencia',
}, {
    name: 'Marseille',
    population: 851420,
    country: 'France',
    region: 'Provence-Alpes-Côte dAzur',
}, {
    name: 'Turin',
    population: 866425,
    country: 'Italy',
    region: 'Piedmont',
}, {
    name: 'Ivano-Frankivsk',
    population: 237686,
    country: 'Ukraine',
    region: 'West',
}]

// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars2 = [{
    model: 'Volkswagen Passat',
    editionYear: 2011,
    power: 150,
    color: 'grey',
    driver: {
        name: 'Valtteri Bottas',
        age: '34',
        sex: 'man',
        experience: '3 years'
    }
}, {
    model: 'Volkswagen Touareg',
    editionYear: 2015,
    power: 340,
    color: 'white',
    driver: {
        name: 'Maxim Verstappen',
        age: 34,
        sex: 'woman',
        experience: '6 years'
    }
}, {
    model: 'Fiat 500X',
    editionYear: 2012,
    power: 180,
    color: 'red',
    driver: {
        name: 'Daniil Kvyat',
        age: 37,
        sex: 'man',
        experience: '9 years'
    }
}, {
    model: 'Chevrolet Malibu',
    editionYear: 2014,
    power: 169,
    color: 'black',
    driver: {
        name: 'Antonio Giovinazzi',
        age: 29,
        sex: 'man',
        experience: '3 years'
    }
}, {
    model: 'Chevrolet Camaro',
    editionYear: 2016,
    power: 323,
    color: 'yellow',
    driver: {
        name: 'Lana Norris',
        age: 38,
        sex: 'woman',
        experience: '5 years'
    }
}, {
    model: 'Skoda Octavia',
    editionYear: 2014,
    power: 102,
    color: 'green',
    driver: {
        name: 'Pierre Gasly2',
        age: 34,
        sex: 'man',
        experience: '4 years'
    }
}, {
    model: 'BMW X5',
    editionYear: 2018,
    power: 400,
    color: 'black',
    driver: {
        name: 'Selena Pérez',
        age: 37,
        sex: 'woman',
        experience: '8 years'
    }
}, {
    model: 'Mitsubishi Outlander',
    editionYear: 2016,
    power: 170,
    color: 'blue',
    driver: {
        name: 'Nico Hülkenberg',
        age: 41,
        sex: 'man',
        experience: '10 years'
    }
}, {
    model: 'Audi A4',
    editionYear: 2014,
    power: 190,
    color: 'grey',
    driver: {
        name: ' Pietro Fittipaldi',
        age: 33,
        sex: 'man',
        experience: '4 years'
    }
}, {
    model: 'Audi A6',
    editionYear: 2016,
    power: 190,
    color: 'white',
    driver: {
        name: 'Jack Aitken',
        age: 35,
        sex: 'man',
        experience: '5 years'
    }
}]

// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

console.log('_____________________________________');
i = 0;
while (i < cities.length) {
    console.log(cities[i]);
    i++;
}

console.log('_____________________________________');
i = 0;
while (i < cars2.length) {
    console.log(cars2[i]);
    i++;
}

console.log('_____________________________________');

// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);

}

console.log('_____________________________________');
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);

}

console.log('_____________________________________');
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);

}
console.log('_____________________________________');


// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (const car of cars) {
    console.log(car);
}
console.log('_____________________________________');

for (const city of cities) {
    console.log(city);
}
console.log('_____________________________________');

for (const car of cars2) {
    console.log(car);
}
console.log('_____________________________________');


// 11 - взять объекты из задания 1 и превратить каждый в json.


console.log(JSON.stringify(dynamoKyiv));
console.log(JSON.stringify(ukraine));
console.log(JSON.stringify(samsungGalaxyA50));
console.log(JSON.stringify(car));
console.log(JSON.stringify(TV));
console.log('_____________________________________');
// 12 - взять json из задания 11 и превратить их обратно в объекты.

console.log(JSON.parse(JSON.stringify(dynamoKyiv)));
console.log(JSON.parse(JSON.stringify(ukraine)));
console.log(JSON.parse(JSON.stringify(samsungGalaxyA50)));
console.log(JSON.parse(JSON.stringify(car)));
console.log(JSON.parse(JSON.stringify(TV)));
console.log('_____________________________________');
// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let i = 0; i < cars.length; i++) {

    console.log(JSON.stringify(cars[i]));
}
console.log('_____________________________________');
// 14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let i = 0; i < cities.length; i++) {

    console.log(JSON.stringify(cities[i]));
}
console.log('_____________________________________');
// 15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

let newCars = [];
for (let i = 0; i < cars2.length; i++) {

    newCars.push(JSON.parse(JSON.stringify(cars2[i])))
}
console.log(cars2);
console.log(newCars);
console.log('_____________________________________');
// 16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users = [{
        name: 'vasya',
        age: 31,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        skills: ['java', 'js', 'html']
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        skills: ['mysql', 'mongo']
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'max',
        age: 30,
        status: true,
        skills: ['mysql', 'mongo']
    }
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].skills.length; j++) {

        console.log(users[i].skills[j]);
    }
}

console.log('_____________________________________');
// 17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let userSkills = [];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].skills.length; j++) {

        userSkills.push(users[i].skills[j]);
    }
}

console.log(userSkills);
console.log('_____________________________________');
// 18 - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
users = [{
        name: 'vasya',
        age: 31,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        skills: ['java', 'js', 'html']
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        skills: ['mysql', 'mongo']
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'max',
        age: 30,
        status: true,
        skills: ['mysql', 'mongo']
    }
];

console.log(users);

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].skills.length; j++) {

        console.log(users[i].skills[j]);
    }

}

console.log('________________________________________________________________________________');

// Дано масив users:
users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 19 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
console.log(users);
let emptyArray = [];

for (let i = 0; i < users.length; i++) {
    //  console.log(users[i].address);
    emptyArray[i] = users[i].address;
}
console.log(emptyArray);
console.log('________________________________________________________________________________');

// 20 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (let i = 0; i < users.length; i++) {
    let div = document.createElement('div');
    div.innerText = `Name ${users[i].name}, age ${users[i].age}, status ${users[i].status}, address: ${users[i].address.city}, ${users[i].address.country}, ${users[i].address.street}, ${users[i].address.houseNumber}`;
    document.body.append(div);
}

document.write('________________________________________________________________________');
// 21 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let i = 0; i < users.length; i++) {
    let user = document.createElement('div');
    let name = document.createElement('div');
    let age = document.createElement('div');
    let status = document.createElement('div');
    let address = document.createElement('div');
    user.className = 'user';
    user.style.display = 'flex';
    name.style.paddingRight = '10px'
    age.style.paddingRight = '10px'
    status.style.paddingRight = '10px'
    document.body.append(user);
    name.innerText = `Name ${users[i].name},`;
    age.innerText = `age ${users[i].age},`;
    status.innerText = `status ${users[i].status},`;
    address.innerText = `address: ${users[i].address.city}, ${users[i].address.country}, ${users[i].address.street}, ${users[i].address.houseNumber}`;

    user.append(name);
    user.append(age);
    user.append(status);
    user.append(address);
}

/* for (let i = 0; i < users.length; i++) {

    let user = document.createElement('div');

    for (const item in users[i]) {
        console.log(users[i][item]);
        let div = document.createElement('div');
        div.innerText = users[i][item];
        user.append(div);
    }
    document.body.append(user);
}
 */
document.write('______________________________________________');
// 22 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    let user = document.createElement('div');
    let name = document.createElement('div');
    let age = document.createElement('div');
    let status = document.createElement('div');
    let address = document.createElement('div');

    user.style.display = 'flex';
    name.style.paddingRight = '10px'
    age.style.paddingRight = '10px'
    status.style.paddingRight = '10px'
    document.body.append(user);

    name.innerText = `Name ${users[i].name},`;
    age.innerText = `age ${users[i].age},`;
    status.innerText = `status ${users[i].status},`;

    for (const item in users[i].address) {
        console.log(users[i].address[item]);
        let div = document.createElement('div');
        div.innerText = users[i].address[item];
        div.style.paddingRight = '10px'
        address.append(div);
    }
    address.style.display = 'flex';
    user.append(name);
    user.append(age);
    user.append(status);
    user.append(address);
}
// 23 - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithCities = [];

for (const key in usersWithId) {

    usersWithCities.push(usersWithId[key]);

    for (const iter in citiesWithId) {
        if (usersWithId[key].id === citiesWithId[iter].user_id) {
            usersWithCities[key].address = citiesWithId[iter];
        }
    }
}

console.log(usersWithCities);
document.write('______________________________________________');

// 24- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// 25 - змінити цей текст використовуючи селектори id, class,  tag
// 26 - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// 27 - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// 28 - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// 29 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// 30 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

//        Вирішення в файлі tables.html     !!!!!


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний


//        Вирішення в файлі main.html     !!!!!


// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.



//        Вирішення в файлі rules.html     !!!!!!!!!




// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


//        Вирішення в файлі rule.html     !!!!!!!!!!



// let rules = [{
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];



// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const i in users) {
            let div = document.createElement('div');
            let company = document.createElement('div');
            let address = document.createElement('div');
            let geo = document.createElement('div');

            div.innerText = `Id: ${users[i].id}, Name: ${users[i].name}, username: ${users[i].username},  phone: ${users[i].phone}, email: ${users[i].email}, website: ${users[i].website}`;
            document.body.append(div);

            address.innerText = `Address: city: ${users[i].address.city}, street: ${users[i].address.street}, suite: ${users[i].address.suite}, zipcode: ${users[i].address.zipcode}`;
            div.append(address);

            geo.innerText = `geo: lat: ${users[i].address.geo.lat}, lng: ${users[i].address.geo.lng}`;
            address.append(geo);

            company.innerText = `Company: name: ${users[i].company.name}, bs: ${users[i].company.bs}, catchPhrase: ${users[i].company.catchPhrase}`;
            div.append(company);
            //  document.write('____________________________________________');
        }

        console.log(users);
    })

document.write('____________________________________________');

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const i in posts) {
            let div = document.createElement('div');
            document.body.append(div);

            let title = document.createElement('h3');
            let body = document.createElement('div');
            title.innerText = `Post №${posts[i].id}: ${posts[i].title}`;
            body.innerText = posts[i].body;
            div.append(title, body);
        }
        console.log(posts);
    }) */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            document.body.append(div);

            let title = document.createElement('h3');
            let body = document.createElement('div');
            title.innerText = `Post №${post.id}: ${post.title}`;
            body.innerText = post.body;
            div.append(title, body);
        }
        console.log(posts);
    })

document.write('____________________________________________');

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const i in comments) {
            let div = document.createElement('div');
            document.body.append(div);

            let title = document.createElement('h3');
            let body = document.createElement('div');
            title.innerText = `Comment №${comments[i].id}: ${comments[i].name}, write:  ${comments[i].email}`;
            body.innerText = comments[i].body;
            div.append(title, body);
        }
        console.log(comments);
    }) */

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let div = document.createElement('div');
            document.body.append(div);

            let title = document.createElement('h3');
            let body = document.createElement('div');
            title.innerText = `Comment №${comment.id}: ${comment.name}, write:  ${comment.email}`;
            body.innerText = comment.body;
            div.append(title, body);
        }
        console.log(comments);
    })

document.write('____________________________________________');

// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        for (const i in posts) {

            let div = document.createElement('div');
            document.body.append(div);

            let title = document.createElement('h3');
            let body = document.createElement('div');
            let comment = document.createElement('div');
            title.innerText = `Post №${posts[i].id}: ${posts[i].title}`;
            body.innerText = posts[i].body;
            div.append(title, body, comment);

            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(comments => {
                    for (const j in comments) {

                        if (posts[i].id === comments[j].postId) {

                            let commentTitle = document.createElement('h4');
                            let commentBody = document.createElement('div');

                            commentTitle.innerText = `Name:  ${comments[j].name}, E-mail:  ${comments[j].email}`;
                            commentBody.innerText = comments[j].body;
                            comment.append(commentTitle, commentBody);

                        }
                    }

                })
        }
    })