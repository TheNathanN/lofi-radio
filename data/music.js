import { v4 as uuidv4 } from 'uuid';

class Album {
  constructor(name, artist, img, featured, songs) {
    this.name = name;
    this.artist = artist;
    this.img = img;
    this.featured = featured;
    this.songs = songs;
  }
}

const album1 = new Album(
  'Inside a Saltwater Room',
  'Delayde, anybodyy',
  'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg',
  true,
  [
    {
      name: 'Where The Sun Goes',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23188',
      active: false,
    },
    {
      name: 'Southwesterly',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23196',
      active: false,
    },
    {
      name: 'Blue',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23195',
      active: false,
    },
    {
      name: 'Time Went By',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23194',
      active: false,
    },
    {
      name: 'Inside a Saltwater Room',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23193',
      active: false,
    },
    {
      name: 'There and Back',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23192',
      active: false,
    },
    {
      name: 'Bird In The Floorboards',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23191',
      active: false,
    },
    {
      name: 'Driftwood',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23190',
      active: false,
    },
    {
      name: 'Little Windows',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23189',
      active: false,
    },
  ]
);

const album2 = new Album(
  'Passing Notes',
  'Middle School',
  'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
  true,
  [
    {
      name: 'When I Get Up In the Morning',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22933',
      active: false,
    },
    {
      name: 'Chit Chat',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22934',
      active: false,
    },
    {
      name: 'Same Old Circles',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22935',
      active: false,
    },
    {
      name: 'The Way We Were',
      id: uuidv4(),
      credits: 'Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22936',
      active: false,
    },
    {
      name: 'By The Window',
      id: uuidv4(),
      credits: 'Middle School, Aso',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22937',
      active: false,
    },
    {
      name: 'Passing Notes',
      id: uuidv4(),
      credits: 'Middle School, Aso',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22938',
      active: false,
    },
    {
      name: 'Halklow',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22939',
      active: false,
    },
    {
      name: 'Chop City',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22940',
      active: false,
    },
  ]
);

export const albums = [album1, album2];
