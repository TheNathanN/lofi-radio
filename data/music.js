import { v4 as uuidv4 } from 'uuid';

class Album {
  constructor(name, artist, img, songs) {
    this.name = name;
    this.artist = artist;
    this.img = img;
    this.songs = songs;
  }
}

const album1 = new Album(
  'Inside a Saltwater Room',
  'Delayde, anybodyy',
  'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg',
  [
    {
      name: 'Where The Sun Goes',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23188',
    },
    {
      name: 'Southwesterly',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23196',
    },
    {
      name: 'Blue',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23195',
    },
    {
      name: 'Time Went By',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23194',
    },
    {
      name: 'Inside a Saltwater Room',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23193',
    },
    {
      name: 'There and Back',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23192',
    },
    {
      name: 'Bird In The Floorboards',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23191',
    },
    {
      name: 'Driftwood',
      id: uuidv4(),
      credits: 'Delayde',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23190',
    },
    {
      name: 'Little Windows',
      id: uuidv4(),
      credits: 'Delayde, anybodyy',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23189',
    },
  ]
);

const album2 = new Album(
  'Passing Notes',
  'Middle School',
  'https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg',
  [
    {
      name: 'When I Get Up In the Morning',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22933',
    },
    {
      name: 'Chit Chat',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22934',
    },
    {
      name: 'Same Old Circles',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22935',
    },
    {
      name: 'The Way We Were',
      id: uuidv4(),
      credits: 'Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22936',
    },
    {
      name: 'By The Window',
      id: uuidv4(),
      credits: 'Middle School, Aso',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22937',
    },
    {
      name: 'Passing Notes',
      id: uuidv4(),
      credits: 'Middle School, Aso',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22938',
    },
    {
      name: 'Halklow',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22939',
    },
    {
      name: 'Chop City',
      id: uuidv4(),
      credits: 'Middle School',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22940',
    },
  ]
);

const album3 = new Album(
  'Meraki',
  'Juan Rios',
  'https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg',
  [
    {
      name: 'Cabaña',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21647',
    },
    {
      name: 'Glaciar',
      id: uuidv4(),
      credits: 'Juan Rios, chief.',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21648',
    },
    {
      name: 'What If I Told You',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21649',
    },
    {
      name: 'Saudade',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21650',
    },
    {
      name: 'Luz',
      id: uuidv4(),
      credits: 'Juan Rios, Ian Ewing',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21651',
    },
    {
      name: 'Pie in the Sky',
      id: uuidv4(),
      credits: 'Juan Rios, Djemeia',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21652',
    },
    {
      name: 'Libélula',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21653',
    },
    {
      name: 'Leña',
      id: uuidv4(),
      credits: 'Juan Rios, Ian Ewing',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21654',
    },
    {
      name: 'Dando Vueltas',
      id: uuidv4(),
      credits: 'Juan Rios, Cráneo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21655',
    },
    {
      name: 'Esfera',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21773',
    },
    {
      name: 'Ámbar',
      id: uuidv4(),
      credits: 'Juan Rios, Made in M',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21656',
    },
    {
      name: 'Cueva',
      id: uuidv4(),
      credits: 'Juan Rios, Sr.Guayaba',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21657',
    },
    {
      name: 'Puesta De Sol',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21658',
    },
    {
      name: 'Esfera',
      id: uuidv4(),
      credits: 'Juan Rios, Djemeia',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21646',
    },
  ]
);

const album4 = new Album(
  'Wanderlust',
  'Makzo',
  'https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg',
  [
    {
      name: 'Viatecture',
      id: uuidv4(),
      credits: 'Leavv, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20119',
    },
    {
      name: 'Caravan',
      id: uuidv4(),
      credits: 'goosetaf, The Field Tapes, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20122',
    },
    {
      name: 'Trainspotting',
      id: uuidv4(),
      credits: 'Aarigod, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20120',
    },
    {
      name: 'Safe Haven',
      id: uuidv4(),
      credits: 'Oatmello, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20123',
    },
    {
      name: 'Layover',
      id: uuidv4(),
      credits: 'Makzo, brillion.',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20124',
    },
    {
      name: 'Tether',
      id: uuidv4(),
      credits: 'Makzo, Bcalm',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20127',
    },
    {
      name: 'Wayfare',
      id: uuidv4(),
      credits: 'The Kount, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20125',
    },
    {
      name: 'Badlands',
      id: uuidv4(),
      credits: 'Hanz, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20126',
    },
    {
      name: 'Magnitude',
      id: uuidv4(),
      credits: 'Makzo, Hoffy Beats',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20332',
    },
    {
      name: 'Airplane Mode',
      id: uuidv4(),
      credits: 'Axian, falcxne, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20121',
    },
  ]
);

const album5 = new Album(
  'Aftersome',
  'Toonorth',
  'https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg',
  [
    {
      name: 'Dawn',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17941',
    },
    {
      name: 'New Moon',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17931',
    },
    {
      name: 'Lavish',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17933',
    },
    {
      name: 'Opia',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17946',
    },
    {
      name: 'Rover',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17927',
    },
    {
      name: 'Down',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17929',
    },
    {
      name: 'Contemplation',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17937',
    },
    {
      name: 'Antematter',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17938',
    },
    {
      name: 'Dreamstate',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17947',
    },
    {
      name: 'Momo',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17943',
    },
    {
      name: 'Aftersome',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17944',
    },
    {
      name: 'Dusk',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17925',
    },
  ]
);

const album6 = new Album(
  'Kinship',
  'Sleepy Fish',
  'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
  [
    {
      name: 'travelbag',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
    },
    {
      name: 'railway pulse',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19060',
    },
    {
      name: 'sozu',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19062',
    },
    {
      name: "man it's late",
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19064',
    },
    {
      name: 'exits',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19066',
    },
  ]
);

const album7 = new Album(
  'Into The Past',
  'C Y G N',
  'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
  [
    {
      name: 'Roses n Flames',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14985',
    },
    {
      name: 'Lonely Waves',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14981',
    },
    {
      name: 'Spiritual Mind',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14987',
    },
    {
      name: 'Lost Soul',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14989',
    },
    {
      name: 'Blue Moon',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14991',
    },
    {
      name: 'Playful Obsession',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14983',
    },
    {
      name: 'Taste of Heaven',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14994',
    },
    {
      name: 'Dreamlover',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14995',
    },
    {
      name: 'Naked Sunday',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14998',
    },
    {
      name: 'Zodiac',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=15000',
    },
    {
      name: '70 Avenue',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=15001',
    },
  ]
);

const album8 = new Album(
  'Forest Lore',
  'Aarigod',
  'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
  [
    {
      name: 'Kinsfolk',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997',
    },
    {
      name: 'Woodnote',
      id: uuidv4(),
      credits: 'Aarigod, imagiro',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13014',
    },
    {
      name: 'Golden',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13005',
    },
    {
      name: 'Splendour',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13013',
    },
    {
      name: 'Evenfall',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13007',
    },
    {
      name: 'Maple',
      id: uuidv4(),
      credits: 'Arbour, Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13015',
    },
    {
      name: 'Barrows',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13003',
    },
    {
      name: 'Ambleside',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12999',
    },
    {
      name: 'Momentary Loss',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13009',
    },
    {
      name: 'Coda',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13001',
    },
  ]
);

const album9 = new Album(
  'Anecdotes',
  'Makzo',
  'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
  [
    {
      name: 'Hereafter',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11770',
    },
    {
      name: 'Seascape',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773',
    },
    {
      name: 'Melancholy',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11778',
    },
    {
      name: 'Oasis',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768',
    },
    {
      name: 'Longing',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11777',
    },
    {
      name: 'Departure',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11771',
    },
  ]
);

const album10 = new Album(
  'Hologramophone',
  'Aviino',
  'https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg',
  [
    {
      name: 'Slim Bobby',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10448',
    },
    {
      name: 'Creswick',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10454',
    },
    {
      name: 'Deeper',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10460',
    },
    {
      name: 'Not A Cloud In Sight',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10450',
    },
    {
      name: 'Bluetooth Ringtone (interlude)',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10446',
    },
    {
      name: 'Hotel Lobby Birthday Party',
      id: uuidv4(),
      credits: 'Aviino, Oliv',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10452',
    },
    {
      name: 'Magenta Forever',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10458',
    },
    {
      name: 'Still Life Dreamtime',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10459',
    },
  ]
);

export const albums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8,
  album9,
  album10,
];

export const getAlbumInfo = albumName => {
  return albums.filter(album => album.name === albumName);
};

export const getAlbumFromSong = songName => {
  return albums.filter(album => {
    const albumSongs = album.songs;
    for (let song of albumSongs) {
      song.name === songName;
    }
  });
};

getAlbumFromSong();
