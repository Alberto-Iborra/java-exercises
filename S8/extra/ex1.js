fetch('https://breakingbadapi.com/api/characters')
  .then((response) => {
    return response.json();
  })
  .then((characters) => {
    console.log(myJson)
    showCharacters(characters);
  });
  const showCharacters = (characters) => {}