function whatCanIDrink(age) {
	if (age <= 0) {
		return "Sorry. I can't tell what drink because that age is incorrect!"
	} else if (age <= 14) { return "Drink Toddy!"
	} else if (age <= 18) { return "drink coke"
	} else if (age <= 21) { return "drink Beer"
	} else if (age <= 30) { return "drink jagerbombs"
	} else if (age <= 60) { return "drink real ale"
	} else if (age <= 130) { return "drink whiskey"
	} else { return "Sorry. I can't tell what drink because that age is incorrect!"}


	
}

console.log(whatCanIDrink(30);