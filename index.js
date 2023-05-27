/* Первая задача */
let foundation_area = document.getElementById('inp_foundation_area');
let depth = document.getElementById('inp_depth');
let cost_per_cubic_meter = document.getElementById('inp_cost_per_cubic_meter');

let calculation_foundation_cost = document.getElementById('calculation_foundation_cost');
let out_foundation_cost = document.getElementById('out_foundation_cost');

calculation_foundation_cost.onclick = foundation_cost;

function foundation_cost(){

}

/* Вторая задача */
let board_price = 1500;
let discount_price;
let number_purchased_boards = document.getElementById('inp_foundation_area');

let money_calculator = document.getElementById('money_calculator');
let out_money_calculator = document.getElementById('out_money_calculator');

calculation_foundation_cost.onclick = foundation_cost;
out.innerText = discount_price;

function money_calculator(){
/* 	если купите 100+ досок то скидка 5%
если 200+ скидка 10%
если 300+ скидка 20% */

if(number_purchased_boards => 100 && number_purchased_boards < 200){
	discount_price = 
}
else if(number_purchased_boards => 200 && number_purchased_boards < 300){

}
else if(number_purchased_boards => 300){
	
}

return discount_price;
}