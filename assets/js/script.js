let container = document.getElementById('container')

// console.log(jsonObj);
fetch('movies.json')
.then(response => {

   return response.json();
})
.then(jsondata => { 
   let movies = jsondata['results']

   movies.forEach(movie => {
      container.innerHTML += `
         <div class="card mb-3 col-lg-3 m-1 ">
            <div class="row g-0">
               <div class="col-md-4">
                  <img src="${movie.poster_path}" class="img-fluid rounded-start" alt="...">
               </div>
               <div class="col-md-8">
                  <div class="card-body">
                        <h5 class="card-title ">${movie.original_title}</h5>
                        <p class="card-text text-wrap ">${movie.overview}</p>
                        <p class="card-text"><small class="text-muted">Note : ${movie.vote_average}</small></p>
                  </div>
               </div>
            </div>
         </div>
      `
      // for (const attribut in movie) {
      //          console.log(movie);

      // }
   });
   // console.log(movies)

});
