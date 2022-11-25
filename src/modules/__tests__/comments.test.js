/**
 * @jest-environment jsdom
 */

import renderComments from '../AppComponents/displayComments.js';
import { AddComment } from '../InvolvementService/CommentService.js';

const mockPopupData = [
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

describe('Comments counter', () => {
  const mockResponse = [
    {
      creation_date: '2022-11-21',
      username: 'Mohamed Talbi',
      comment: 'Very good show, I like the ending',
    },
    {
      comment: 'Cool show',
      username: 'Peter',
      creation_date: '2022-11-21',
    },
    {
      creation_date: '2022-11-22',
      username: 'Kweeka',
      comment: 'Good show',
    },
  ];

  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockResponse),
  }));

  test('AddComment and renderComments methods should update the counter on the page', async () => {
    document.body.innerHTML = `
     <section id="169" class="movie_popup__wrapper">
       <div class="movie__comments">
         <h3>Comments (0)</h3>
         <div class="comment_cards__container"></div>
       </div>
     </section>
     `;

    const popup = document.querySelector('section');

    const comment = {
      item_id: mockPopupData[1].id,
      username: 'Kweeka',
      comment: 'Good show',
    };

    const initialCounterValue = document.querySelector('h3').textContent.match(/[0-9]/).join('');

    await AddComment(comment);
    await renderComments(mockPopupData[1].id, popup);

    const updatedCounterValue = document.querySelector('h3').textContent.match(/[0-9]/).join('');

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(initialCounterValue).not.toBe(updatedCounterValue);
  });
});
