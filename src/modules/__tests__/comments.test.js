/**
 * @jest-environment jsdom
 */

import { enableFetchMocks } from 'jest-fetch-mock';
import renderCommentPopup from '../AppComponents/displayPopUp.js';

enableFetchMocks();

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
  test('AddComment method should update the counter on the page', () => {
    document.body.innerHTML = `
      <main></main>
    `;

    renderCommentPopup(mockPopupData[1]);

    const form = document.querySelector('form');
    const userField = document.getElementById('user-field');
    const commentField = document.getElementById('comment-field');

    const initialCounterValue = document.querySelector('h3').textContent;

    userField.value = 'Mohamed Talbi';
    commentField.value = 'Very good show, I like the ending';
    form.submit();

    const updatedCounterValue = document.querySelector('h3').textContent;

    expect(initialCounterValue).not.toBe(updatedCounterValue);
  });
});