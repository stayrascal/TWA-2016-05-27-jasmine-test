var score = require('../app/score.js');

describe('Score Test', function () {
    it('Should return A when input 95', function () {
        var expectGrade = score.transferScoreToGrade(95);
        expect(expectGrade).toBe('A');
    });

    it('Should return A when input 90', function () {
        var expectGrade = score.transferScoreToGrade(90);
        expect(expectGrade).toBe('A');
    });

    it('Should return B when input 80', function () {
        var expectGrade = score.transferScoreToGrade(80);
        expect(expectGrade).toBe('B');
    });

    it('Should return C when input 60', function () {
        var expectGrade = score.transferScoreToGrade(60);
        expect(expectGrade).toBe('C');
    });

    it('Should return D when input 55', function () {
        var expectGrade = score.transferScoreToGrade(55);
        expect(expectGrade).toBe('D');
    });
});
