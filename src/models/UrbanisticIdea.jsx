export class UrbanisticIdea {
    constructor(title, description, author, status, likes, imageLink, avatarImageLink) {
        this.id = Date.now() + Math.random();
        this.title = title || 'Новый проект';
        this.description = description || "Опишите подробно вашу идею: какую проблему она решает, какие изменения предлагаются и какой результат ожидается для жителей района...";
        this.author = author || "Фамилия И.";
        this.status = status || 'Идея';
        this.likes = likes || 0;
        this.imageLink = imageLink || "https://www.newhorizons.ru/upload/iblock/368/luqf7us23on00shp1ll4jnsngip03tjg/drakon-s.jpg";
        this.avatarImageLink = avatarImageLink || "https://s13.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2022/05/1-25.jpg";
    }
}