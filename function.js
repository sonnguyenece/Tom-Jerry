function Rat(name, weight, speed, diaglog,stt) {
    this.stt = stt;
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.say = diaglog;
    // this.eatenBy = function (cat) {
    //     this.stt = 'death';
    // }
}

function Cat(name, weight, speed, diaglog) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.say = diaglog;
    this.chaseRat = function (mouse) {
        if (this.speed > mouse.speed) {
            this.chaseRat = true;
            this.say = "I can catch this mouse!!!"
        } else {
            this.say = "This mouse is so fucking quick!!!";
            this.chaseRat = false;
        }
        main();
    };
    this.checkRatStt = function (mouse) {
        if (mouse.stt==="alive" && this.chaseRat) {
            this.say = "Gotcha!!";
            mouse.say = "No,I'll be dead";
            this.checkRatStt = true;
        } else {
            this.say = "Hhmm! It's not fresh";
            this.checkRatStt = false;
        }
        main();
    };
    this.eatRat = function (mouse) {
        if (this.checkRatStt) {
            this.weight = this.weight + mouse.weight;
            this.say = "mum,mum...";
            mouse.stt = "death";
            mouse.say = '';
            mouse.weight = 0;
            mouse.speed = 0;
        } else {
            this.say = "I have nothing to eat!!!";
        }
        main()
    }
}

let jerry = new Rat("Jerry", 0.35, 20, "I'm Jerry","alive");
let tom = new Cat("Tom", 2, 30, "I'm Tom");

function f() {

}

function main() {
    document.getElementById("jerryStat").innerHTML =
        jerry.name + ": " + jerry.stt + " " + jerry.weight + "kg " + jerry.speed + "m/s " + jerry.say;
    document.getElementById("tomStat").innerHTML =
        tom.name + ": " + tom.weight + "kg " + tom.speed + "m/s " + tom.say;
}

main();