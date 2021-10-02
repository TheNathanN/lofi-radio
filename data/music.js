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
      active: false,
    },
    {
      name: 'Glaciar',
      id: uuidv4(),
      credits: 'Juan Rios, chief.',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21648',
      active: false,
    },
    {
      name: 'What If I Told You',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21649',
      active: false,
    },
    {
      name: 'Saudade',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21650',
      active: false,
    },
    {
      name: 'Luz',
      id: uuidv4(),
      credits: 'Juan Rios, Ian Ewing',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21651',
      active: false,
    },
    {
      name: 'Pie in the Sky',
      id: uuidv4(),
      credits: 'Juan Rios, Djemeia',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21652',
      active: false,
    },
    {
      name: 'Libélula',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21653',
      active: false,
    },
    {
      name: 'Leña',
      id: uuidv4(),
      credits: 'Juan Rios, Ian Ewing',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21654',
      active: false,
    },
    {
      name: 'Dando Vueltas',
      id: uuidv4(),
      credits: 'Juan Rios, Cráneo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21655',
      active: false,
    },
    {
      name: 'Esfera',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21773',
      active: false,
    },
    {
      name: 'Ámbar',
      id: uuidv4(),
      credits: 'Juan Rios, Made in M',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21656',
      active: false,
    },
    {
      name: 'Cueva',
      id: uuidv4(),
      credits: 'Juan Rios, Sr.Guayaba',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21657',
      active: false,
    },
    {
      name: 'Puesta De Sol',
      id: uuidv4(),
      credits: 'Juan Rios',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21658',
      active: false,
    },
    {
      name: 'Esfera',
      id: uuidv4(),
      credits: 'Juan Rios, Djemeia',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21646',
      active: false,
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
      active: false,
    },
    {
      name: 'Caravan',
      id: uuidv4(),
      credits: 'goosetaf, The Field Tapes, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20122',
      active: false,
    },
    {
      name: 'Trainspotting',
      id: uuidv4(),
      credits: 'Aarigod, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20120',
      active: false,
    },
    {
      name: 'Safe Haven',
      id: uuidv4(),
      credits: 'Oatmello, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20123',
      active: false,
    },
    {
      name: 'Layover',
      id: uuidv4(),
      credits: 'Makzo, brillion.',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20124',
      active: false,
    },
    {
      name: 'Tether',
      id: uuidv4(),
      credits: 'Makzo, Bcalm',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20127',
      active: false,
    },
    {
      name: 'Wayfare',
      id: uuidv4(),
      credits: 'The Kount, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20125',
      active: false,
    },
    {
      name: 'Badlands',
      id: uuidv4(),
      credits: 'Hanz, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20126',
      active: false,
    },
    {
      name: 'Magnitude',
      id: uuidv4(),
      credits: 'Makzo, Hoffy Beats',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20332',
      active: false,
    },
    {
      name: 'Airplane Mode',
      id: uuidv4(),
      credits: 'Axian, falcxne, Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=20121',
      active: false,
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
      active: false,
    },
    {
      name: 'New Moon',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17931',
      active: false,
    },
    {
      name: 'Lavish',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17933',
      active: false,
    },
    {
      name: 'Opia',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17946',
      active: false,
    },
    {
      name: 'Rover',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17927',
      active: false,
    },
    {
      name: 'Down',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17929',
      active: false,
    },
    {
      name: 'Contemplation',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17937',
      active: false,
    },
    {
      name: 'Antematter',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17938',
      active: false,
    },
    {
      name: 'Dreamstate',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17947',
      active: false,
    },
    {
      name: 'Momo',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17943',
      active: false,
    },
    {
      name: 'Aftersome',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17944',
      active: false,
    },
    {
      name: 'Dusk',
      id: uuidv4(),
      credits: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=17925',
      active: false,
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
      active: false,
    },
    {
      name: 'railway pulse',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19060',
      active: false,
    },
    {
      name: 'sozu',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19062',
      active: false,
    },
    {
      name: "man it's late",
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19064',
      active: false,
    },
    {
      name: 'exits',
      id: uuidv4(),
      credits: 'mommy, Sleepy Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19066',
      active: false,
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
      active: false,
    },
    {
      name: 'Lonely Waves',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14981',
      active: false,
    },
    {
      name: 'Spiritual Mind',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14987',
      active: false,
    },
    {
      name: 'Lost Soul',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14989',
      active: false,
    },
    {
      name: 'Blue Moon',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14991',
      active: false,
    },
    {
      name: 'Playful Obsession',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14983',
      active: false,
    },
    {
      name: 'Taste of Heaven',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14994',
      active: false,
    },
    {
      name: 'Dreamlover',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14995',
      active: false,
    },
    {
      name: 'Naked Sunday',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=14998',
      active: false,
    },
    {
      name: 'Zodiac',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=15000',
      active: false,
    },
    {
      name: '70 Avenue',
      id: uuidv4(),
      credits: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=15001',
      active: false,
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
      active: false,
    },
    {
      name: 'Woodnote',
      id: uuidv4(),
      credits: 'Aarigod, imagiro',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13014',
      active: false,
    },
    {
      name: 'Golden',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13005',
      active: false,
    },
    {
      name: 'Splendour',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13013',
      active: false,
    },
    {
      name: 'Evenfall',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13007',
      active: false,
    },
    {
      name: 'Maple',
      id: uuidv4(),
      credits: 'Arbour ,Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13015',
      active: false,
    },
    {
      name: 'Barrows',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13003',
      active: false,
    },
    {
      name: 'Ambleside',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12999',
      active: false,
    },
    {
      name: 'Momentary Loss',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13009',
      active: false,
    },
    {
      name: 'Coda',
      id: uuidv4(),
      credits: 'Aarigod',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13001',
      active: false,
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
      active: false,
    },
    {
      name: 'Seascape',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773',
      active: false,
    },
    {
      name: 'Melancholy',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11778',
      active: false,
    },
    {
      name: 'Oasis',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11768',
      active: false,
    },
    {
      name: 'Longing',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11777',
      active: false,
    },
    {
      name: 'Departure',
      id: uuidv4(),
      credits: 'Makzo',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11771',
      active: false,
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
      active: false,
    },
    {
      name: 'Creswick',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10454',
      active: false,
    },
    {
      name: 'Deeper',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10460',
      active: false,
    },
    {
      name: 'Not A Cloud In Sight',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10450',
      active: false,
    },
    {
      name: 'Bluetooth Ringtone (interlude)',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10446',
      active: false,
    },
    {
      name: 'Hotel Lobby Birthday Party',
      id: uuidv4(),
      credits: 'Aviino, Oliv',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10452',
      active: false,
    },
    {
      name: 'Magenta Forever',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10458',
      active: false,
    },
    {
      name: 'Still Life Dreamtime',
      id: uuidv4(),
      credits: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10459',
      active: false,
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
