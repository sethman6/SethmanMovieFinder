import request from 'superagent'


export default function getMovies (callback, year) {
  request
    .get('http://www.omdbapi.com/?apikey=a9d96ad0' + '&y=' + year)
    .end((err, response) => {
      if (err) {
        console.log(err)
      } else {
        callback(response)
      }
    })

}
