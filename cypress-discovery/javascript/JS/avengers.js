//API 
var avengers = ['Tony Stark', 'Clint barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Bruce Banner','Scot Lang']

function listaVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''// ul.replaceChildren() 

    avengers.forEach(function (a) {
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })

}