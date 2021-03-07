import { SearchResultList } from "./SearchResultList";
import { getSearchResults } from "../api";

describe("SearchResultList", () =>{
    test("", async () => {
        const searchResult = await getSearchResults();
        expect( searchResult.length).toBe(20);
        // const result = <SearchResultList results={searchResult} />;

        // expect(result.)
    });
});