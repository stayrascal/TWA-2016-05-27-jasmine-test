var score = require('../app/score.js');

describe('Score Test', function () {

    var gradeObj = {
        90: 'A',
        80: 'B',
        60: 'C',
        default: 'D',
        step: 10

    };

    it('Should return A when input 95', function () {
        var expectGrade = score.transferScoreToGrade(95, gradeObj);
        expect(expectGrade).toBe('A');
    });

    it('Should return A when input 80', function () {
        var expectGrade = score.transferScoreToGrade(80, gradeObj);
        expect(expectGrade).toBe('B');
    });

    it('Should return A when input 55', function () {
        var expectGrade = score.transferScoreToGrade(55, gradeObj);
        expect(expectGrade).toBe('D');
    });
});
