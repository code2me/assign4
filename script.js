let form = document.getElementById('form');

let arr = ['PetName', 'PetAge', 'PetWeight', 'PetType', 'LikedObject'];
form.addEventListener('submit', (e) => e.preventDefault());
let petObject = {
    PetName: '',
    PetAge: '',
    PetWeight: '',
    PetType: '',
    LikedObject: ''
}
for(let i = 0; i < arr.length; i++) {
    let label = document.createElement('label');
    label.innerHTML = arr[i];
    label.setAttribute('for', arr[i]);
    label.setAttribute('class', 'label');
    form.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute('class', 'input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', arr[i]);
    input.setAttribute('placeholder', arr[i]);
    input.setAttribute('value',petObject[arr[i]]);
    input.addEventListener('change', (e) => {petObject = {...petObject, [arr[i]]: e.target.value}});
    form.appendChild(input);
}

let button = document.createElement('button');
button.setAttribute('class', 'button');
button.innerHTML = 'Submit'; 

form.appendChild(button);
button.addEventListener('click', () => console.log(petObject));

