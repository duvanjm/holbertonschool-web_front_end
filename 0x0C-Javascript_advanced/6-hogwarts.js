function studentHogwarts() {
    var privateScore = 0;
    var name = null;

    function changeScoreBy(points) {
        privateScore = privateScore + points;
    }

    this.setName = function(newName) {
        name = newName;
    }

    this.rewardStudent = function() {
        changeScoreBy(1);
    }

    this.penalizeStudent = function() {
        changeScoreBy(-1);
    }

    this.getScore = function() {
        return name + ": " + privateScore;
    }
}

    let harry = new studentHogwarts();
    harry.setName("Harry");
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    console.log(harry.getScore());

    let draco = new studentHogwarts();
    draco.setName("Draco");
    draco.rewardStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    console.log(draco.getScore());
