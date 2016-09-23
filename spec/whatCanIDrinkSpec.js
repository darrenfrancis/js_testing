describe ("whatCanIDrink", function() {

	describe('Drink Selector', function() {

		it('should pass a 17 as an argument and return Drink coke', function() {
			//whatCanIDrink(17); This wasn't needed
			expect(whatCanIDrink(17)).toBe("drink coke");
			
		});

		it('should pass a 13 as an argument and return Drink coke', function() {
			expect(whatCanIDrink(13)).toBe("Drink Toddy!");
			
		});

		it ('should pass 20 as an argument and return Drink coke', function() {
			expect(whatCanIDrink(20)).toBe("drink beer");
		});

		it("should pass some text as an argument and return 'Sorry I didnt recognize...'", function(){
			expect(whatCanIDrink(wally)).toBe("Sorry!!. I can't tell what drink because that age is incorrect!");
		});
	});
});