// Задание 1

const musicCollection = {

    musicAlbums: [
        { title: 'Задыхаюсь', artist: 'Дима Билан', year: '2011' },
        { title: 'Отпускай', artist: 'Три дня дождя', year: '2022' },
        { title: 'Ева', artist: 'Винтаж', year: '2009' }
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length
            ? { done: false, value: this.musicAlbums[this.index++] }
            : { done: true };
    }
}
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}