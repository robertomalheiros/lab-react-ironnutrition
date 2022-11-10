import { Divider, Input } from 'antd';

function Search({ search, setSearch }) {
  function handleChange(e) {
    // console.log(e.target.value); => a tecla que foi pressionada.
    setSearch(e.target.value);
  }
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" value={search} onChange={handleChange} />
    </>
  );
}

export default Search;
