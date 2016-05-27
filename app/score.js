exports.transferScoreToGrade = function (score) {
    var scoreSections = [90, 80, 60];
    var label = ['A', 'B', 'C', 'D'];

    for(var i = 0; i < scoreSections.length; i++){
        if (score >= scoreSections[i]){
            return label[i];
        }
    }
    return label[i];
};

