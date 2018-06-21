describe('mathService', function () {
    it('add is defined', function () {
        expect(mathService.add).toBeDefined();
      });
    it('should add the values', function () {
        var first = 30;
        var second = 50;
    
        var expected = first + second;
        var actual = mathService.add(first, second);
    
        expect(expected).toBe(actual);
    });
    it('should be greater than 50',function(){
        var first = 30;
        var second = 50;
        var actual = mathService.add(first, second);
        expect(actual).toBeGreaterThan(50);
    });
    it('should return square root of the number',function(){
        var first = 4;
        var expected = Math.sqrt(first);
        var actual = mathService.squareroot(first);
        expect(expected).toBe(actual);
    });
    it('should return square of the number',function(){
        var first = 4;
        var expected = first*first;
        var actual = mathService.square(first);
        expect(expected).toBe(actual);
    });
});
