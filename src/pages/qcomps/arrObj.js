import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(JSON.parse(JSON.stringify(initialList)));
  const [yourList, setYourList] = useState(JSON.parse(JSON.stringify(initialList)));

  function handleToggleMyList(artworkId, nextSeen) {
    const updatedList = myList.map(artwork =>
      artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork
    );
    setMyList(updatedList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const updatedList = yourList.map(artwork =>
      artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork
    );
    setYourList(updatedList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
