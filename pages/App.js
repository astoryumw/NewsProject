// created this to test useRef and learning to add variable 
import { getStory } from "../lib/util.js";
import { useRef, useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const prevCount = usePrevious(count);

  // value.split('\n').map(str => <p>{str}</p>) when setList
  // why does this return an object

  function usePrevious(value) {
    const ref = useRef();
    // value = JSON.stringify(value);
    // console.log(value);

    // useEffect is adding the value to the list
    // will need to add each next news story to this list
    useEffect(() => {
      // setList(previousState => previousState + value);
      // console.log(list[list.length-1]); // list.at is not working
      ref.current = value;
    }, [value]);
    // console.log(ref.current);
    return ref.current;
  }

  async function handleSearch() {
    const story = await getStory("books","2f50b435635d4b8d9be43f04da54b9ef",count+1);
    console.log(story);
  }

  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count+1)}>hehe</button>
      <button onClick={handleSearch}>haha</button>
      <h1>{list}</h1>
    </div>

  )
}