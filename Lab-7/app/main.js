
const personsURI = 'data/persons.json';
const personsXHR = new XMLHttpRequest();
personsXHR.open('GET', personsURI);

/**
 * loads the response.
 */
personsXHR.onload = function () {
    if(this.status === '200'){
        const responseText = this.responseText;
        const persons = JSON.parse(responseText);
        load(persons);

    }
};
personsXHR.send();

/**
 * adds person as the list item to the parent
 * @param {Person} person the person object
 * @param {HTMLElement} parent the parent element
 */
const createPerson = (person, parent) => {
    const li = document.createElement('li');
    li.textContent = `${person.firstName} ${person.lastName}`; // it's ` and not '
    parent.appendChild(li);
};
/**
 * loads all persons to the ordered list element.
 * 
 * @param {*} persons 
 */
const load = (persons) => {
    const ol = document.getElementById('list');
    persons.forEach(person => {
        createPerson(person, ol);
        
    });

}

setTimeout(() => {
    console.log('Hi!');
}, 2000);










