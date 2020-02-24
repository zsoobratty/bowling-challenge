describe('Bowling', function() {
    var bowling;
    beforeEach(function() {
        bowling = new Bowling;
    });
    describe('#score', function() {
        it('returns 0 for a game of gutterballs', function() {
            for (var i = 0; i < 20; i++) {
                bowling.bowl(0);
            };
            expect(bowling.score()).toEqual(0);
        });

        it('returns 20 for a game of all 1s', function() {
            for (var i = 0; i < 20; i++) {
                bowling.bowl(1)
            };
            expect(bowling.score()).toEqual(20);
        });

        it('should return correct score when bowling a spare', function() {
            bowling.bowl(9);
            bowling.bowl(1);
            bowling.bowl(5);
            for (var i = 0; i < 17; i++) {
                bowling.bowl(0)
            };
            expect(bowling.score()).toEqual(20);
        });

        it('should return correct when bowling a strike', function() {
            bowling.bowl(10);
            bowling.bowl(5);
            bowling.bowl(3);
            for (var i = 0; i < 17; i++) {
                bowling.bowl(0)
            };
            expect(bowling.score()).toEqual(26)
        });
        
        it('should return 300 when bowling all strikes', function() {
            for (var i = 0; i < 20; i++) {
                bowling.bowl(10)
            };
            expect(bowling.score()).toEqual(300)
        })
    });   
});