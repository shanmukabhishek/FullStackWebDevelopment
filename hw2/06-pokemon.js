const url = 'https://pokeapi.co/api/v2/pokemon/';

// Enter your code here
function getpage(url) {
    fetch(url).then(response => response.json()).
        then(data => displayNames(data));
}

function displayNames(data){
    var list = document.getElementById('results');
    var newEntry =  null;
    for( poke of data.results){
        newEntry = document.createElement('span');
        newEntry.innerHTML=poke.name.charAt(0).toUpperCase()+poke.name.substr(1)+"&nbsp- ";
        list.appendChild(newEntry);

    }
      if(data.next)
    getpage(data.next);
}

getpage(url);
