let a = '';
let b = '';
let op = '';
let end = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '÷', '%', '+/-', '<<'];

const output = document.querySelector('#screen p');

function AC () {
	a = '';
	b = '';
	op = '';
	end = false;
	output.textContent = 0;
}

document.querySelector('#AC').onclick = AC;

document.querySelector('#keyboard').onclick = (event) => {
	if(!event.target.classList.contains('btn')) return;
	if(event.target.classList.contains('AC')) return;

	output.textContent = '';

	const key = event.target.textContent;

	if (num.includes(key)) {
		if (b === '' && op === ''){
			a += key;
			output.textContent = a;
		} else if (a !== '' && b !== '' && end){
			b = key;
			end = false;
			output.textContent = b;
		} else {
			b += key;
			output.textContent = b;
		}

		return;	
	}

	if (action.includes(key)) {
		op = key;
		output.textContent = op;
		return;
	}

	if (key === '='){
		if (b === '') {
			b = a;
		}
		switch (op) {
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "x":
				a = a * b;
				break;
			case "÷":
				if (b === '0') {
					output.textContent = 'Ошибка';
					a = '';
					b = '';
					op = '';
					return;
				}
				a = a / b;
				break;
			case "%":
				a = a / 100;
				break;
			case "+/-":
				a = -a;
				break;
			case "<<":
				a = a.slice(0, -1);
				if (length.a === 0){
					a = 0;
					break;
				}
				break;
			}
				
		end = true;
		output.textContent = a;
	}
}