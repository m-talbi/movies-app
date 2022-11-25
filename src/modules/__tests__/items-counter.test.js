/**
 * @jest-environment jsdom
 */

import displayShowCounter from '../AppComponents/displayShowCounter.js';
import { getShowByName } from '../TvMazeService/TvMazeService.js';

const mockResponse = [
  {
    id: '82',
    name: 'Game of Thrones',
    genres: [
      'Drama',
      'Adventure',
      'Fantasy',
    ],
    likes: 27,
    summary: '<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>',
    officialSite: 'http://www.hbo.com/game-of-thrones',
    image: 'https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg',
  },
  {
    id: '169',
    name: 'Breaking Bad',
    genres: [
      'Drama',
      'Crime',
      'Thriller',
    ],
    likes: 20,
    summary: '<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family\'s financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White\'s releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>',
    officialSite: 'http://www.amc.com/shows/breaking-bad',
    image: 'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg',
  },
];

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(mockResponse),
}));

describe('Items counter test', () => {
  test('Check if movies get displayed on the main page', async () => {
    document.body.innerHTML = `
    <a href="#" class="nav-logo">
      <i class="fa-solid fa-film"></i>
      <p>TV SHOW <span class="show-number"></span></p>
    </a>
    `;

    const initialCounterValue = document.querySelector('.show-number').textContent;

    const show1 = await getShowByName('Game of Thrones');
    const show2 = await getShowByName('Breaking Bad');

    const shows = [show1, show2];

    displayShowCounter(shows);

    const updatedCounterValue = document.querySelector('.show-number').textContent;

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(initialCounterValue).not.toBe(updatedCounterValue);
  });
});
