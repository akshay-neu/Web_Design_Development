
import {Person} from './person';
import '../scss/main.scss';

const personsURI = 'data/persons.json';

fetch(personURI, {
    method: 'GET'

}).then(response => {
    response.json()
})
.then(data => { load(data)
});




/**
 * adds person as the list item to the parent
 * @param {Person} person the person object
 * @param {HTMLElement} parent the parent element
 */
const createPerson = (person, parent) => {
    const li = document.createElement('li');
    //li.textContent = `${person.firstName} ${person.lastName}`; // it's ` and not '
    li.textContent = person.getName();
    parent.appendChild(li);
};
/**
 * loads all persons to the ordered list element.
 * 
 * @param {Array} data list of persons
 * @returns{boolean}  returns true if successful
 */
const load = (data) => {
    const ol = document.getElementById('list');
    data.forEach(item => {
        const person = new Person(item.firstName, iten.lastName);
        createPerson(person, ol);
        
    });
    return true;

}

setTimeout(() => {
    console.log('Hi!');
}, 2000);










