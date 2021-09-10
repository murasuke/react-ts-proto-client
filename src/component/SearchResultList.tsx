/* eslint-disable react/destructuring-assignment */
import { VFC } from 'react';

type PropType = { results: { id: string; data: string }[] };

const SearchResultList: VFC<PropType> = (props) => (
  <>
    <div>SearchResultList</div>
    <ul>
      {props.results.map((res) => (
        <li key={res.id}>{res.data}</li>
      ))}
    </ul>
  </>
);

export default SearchResultList;
