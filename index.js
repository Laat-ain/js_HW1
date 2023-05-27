/* Первая задача */
let foundation_area = document.getElementById('inp_foundation_area');
let depth = document.getElementById('inp_depth');
let cost_per_cubic_meter = document.getElementById('inp_cost_per_cubic_meter');

let calculation_foundation_cost = document.getElementById('calculation_foundation_cost');
let out_foundation_cost = document.getElementById('out_foundation_cost');

calculation_foundation_cost.onclick = foundation_cost;

function foundation_cost() {
	let foundation_cost = Number(foundation_area.value) * Number(depth.value) * Number(cost_per_cubic_meter.value);
	console.log(foundation_cost);
	out_foundation_cost.innerText = "Cтоимость фундамента = " + foundation_cost;
}

/* Вторая задача */
const board_price = 1500;
let number_purchased_boards = document.getElementById('number_purchased_boards');

let money_calculator = document.getElementById('money_calculator');
let out_money_calculator = document.getElementById('out_money_calculator');

money_calculator.onclick = f_money_calculator;

function f_money_calculator() {
	let number_boards = Number(number_purchased_boards.value);
	let discount_price;
	if (number_boards >= 100 && number_boards < 200) {
		discount_price = (board_price * number_boards) - (board_price * number_boards * 0.05);
	}
	else if (number_boards >= 200 && number_boards < 300) {
		discount_price = (board_price * number_boards) - (board_price * number_boards * 0.1);
	}
	else if (number_boards >= 300) {
		discount_price = (board_price * number_boards) - (board_price * number_boards * 0.2);
	}
	else{
		discount_price = board_price * number_boards;
	}
	out_money_calculator.innerText = "Cтоимость покупки с учетом скидки  = " + discount_price;
} 