describe ("whatCanIDrink", function() {

	describe('Drink Selector', function() {

		it('should pass a 17 as an argument and return Drink coke', function() {
			//whatCanIDrink(17); This wasn't needed
			expect(whatCanIDrink(17)).toBe("drink coke");
			
		});

		it('should pass a 13 as an argument and return Drink coke', function() {
			//whatCanIDrink(17); This wasn't needed
			expect(whatCanIDrink(13)).toBe("Drink Toddy!");
			
		});
	});
});