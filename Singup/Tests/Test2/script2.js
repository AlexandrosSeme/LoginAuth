

const div = document.querySelector('div')
const inputname = document.querySelector('#name')
const inputsname = document.querySelector('#sname')
//--------------------------------------------------//

const form = document.getElementById("form")

changeColor (form)

function changeColor(element) {
    element.style.backgroundColor = '#345'
}





const h1 = document.createElement('h1')

document.body.append (h1);
h1.innerHTML = ('Tests');

const h2 =document.createElement ('h2')
document.body.append(h2);
h2.innerHTML =('Please filed the below infos')



const div1 = document.createElement('div')
document.body.append(div1);
div1.innerHTML = "Div1";


const div2 = document.createElement('div');
document.body.append(div2);
div2.innerHTML= 'Div2';



const innnertext = document.createElement('input')
document.body.append(innnertext);
innnertext.innerHTML= ('type here');

const button1 =document.createElement ('button');
document.body.append(button1);
button1.innerHTML = 'Press me';


const marina = document.createElement('h3')
document.body.append(marina);
marina.innerHTML = ('Είμαι η Μαρίνα');
