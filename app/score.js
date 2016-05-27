exports.transferScoreToGrade = function (score, scoreObj) {
    var section = score - score % scoreObj.step;
    return scoreObj[section] || scoreObj.default;
};

