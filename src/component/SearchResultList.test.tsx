// import { SearchResultList } from "./SearchResultList";
import { getSearchResults } from '../api';

describe('SearchResultList', () => {
  test('', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const searchResult = await getSearchResults({ key: '' });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(searchResult.length).toBe(20);
    // const result = <SearchResultList results={searchResult} />;

    // expect(result.)
  });
});
