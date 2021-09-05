export function SearchResultList(props: any) {
  return (
    <>
      <div>SearchResultList</div>
      <ul>
        {props.results.map((res: any) => (
          <li key={res.id}>{res.data}</li>
        ))}
      </ul>
    </>
  );
}
