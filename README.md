
# BerserkAPI

BerserkAPI is a RESTful API that provides information on characters from the popular 
manga and anime series Berserk. The API currently supports information on character name, a brief about section, image, and abilities.
## API Reference

#### Get all Characters

```http
  GET /characters
```

#### Get character

```http
  GET /characters/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of character to fetch |




## Usage

Base url: http://berserkapi.kutaybekleric.com

All requests are `GET` requests and go over `https`. All responses will return data in `json`.

To use the API, make a GET request to the endpoint `http://berserkapi.kutaybekleric.com/character/${id}`. You can replace `${id}` with a number from `0-9`.

The API will return a JSON response with the following fields:

- `id` - Id of the data

- `name` - The name of the character.

- `about` - A brief about section for the character.

- `image` - The URL of the character's image.

- `abilities` - An array of abilities for the character.


### Example

```js
fetch('http://berserkapi.kutaybekleric.com/characters/2')
  .then(response => response.json())
  .then(data => {
    console.log(data['name']);
    console.log(data['about']);
    console.log(data['image']);
    console.log(data['abilities']);
  });
```

#### Response

```json
{
"_id":2,
"name":"Griffith",
"about":"Griffith is the current leader of the reborn Band of the Falcon and supreme commander of the Midland Regular Army. Having been at the fore of many battles, he has amassed a reputation as a savior across the continent, and is revered as the `Falcon of Light`.",
"abilities":["Swordsmanship","Hand-to-Hand Combat","Charisma","Leadership and Tactics"],
"image":"https://i.imgur.com/UEb97Rf.png"
}
```
## Demo

To be added.


## Roadmap

- Enable `GET` requests with character names




## Contributing

If you would like to contribute to the BerserkApi, you can fork the repository and make changes as needed. Pull requests are welcome.
