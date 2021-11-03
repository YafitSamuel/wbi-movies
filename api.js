let basicApi = "https://api.tvmaze.com/";

async function apiFunction(bApi) {
  try {
    return await fetch(bApi).then((response) => response.json());
  } catch (error) {
    return error;
  }
}

btnSearchByName.onclick = () => {
  apiFunction(`${basicApi}search/shows?q=${inputSearch.value}`).then((res) => {
    console.log(res);
    showAllToScreen(res);
  });
};

btnByPeople.onclick = () => {
  apiFunction(`${basicApi}search/people?q=${inputSearch1.value}`).then((res) => {
    console.log(res);
    showAllToScreen(res);
  });
};

function showAllToScreen(array) {
  for (const object of array) {
    myDiv.innerHTML += `<div class="container"> 
       <h2><b>${object.show.name} <b></h2>
       <h3><b>${object.show.id} <b></h3>
       <h3><b>${object.score}<b></h3>
       <img id="image" src="${object.show.image.medium}">
      </div>`;
  }
}
