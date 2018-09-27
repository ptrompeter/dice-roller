//jshint esnext: true

// function roller(num, max_val) {
//     var values = [];
//     for (i = 0; i < num; i++){
//         values.push(Math.floor(Math.random() * max_val) +1);
//     }
//     return values;
// }

function roll(max_val) {
    return Math.floor(Math.random() * max_val) + 1;
}

function multiRoll(num, max_val) {
    console.log(num);
    console.log(max_val);

    let values = new Array(parseInt(num));
    values.fill(max_val);
    let output = { original: max_val, roll: values.map(x => roll(x)) }; 
    console.log(output.roll);
    return output;


    // return max_val, values;
}

function makeSelector() {
    newBox=$(document.createElement("Div"));
    newBox.addClass("dice-type");
    newBox.append('<div>How many dice? <input type="text" name="number" value="0"></input></div>');
    newBox.append('<div>How many sides? <input type="text" name="sides" value="0"></input></div>');
    return newBox;
}

function readyFn(jQuery) {
    content = $('#form-content');
    content.append(makeSelector());
    $('#roll').on("click", function(e){
        e.preventDefault();
        const fields = $(".dice-type");
        fields.each(function(){
            let diceNum = this.children[0].children[0].value;
            let diceSize = this.children[1].children[0].value;
            let output = multiRoll(diceNum, diceSize);
            console.log(diceNum, diceSize, JSON.stringify(output));
            this.append(`You rolled: ${output.roll}`);
        });
    });
    $('#add-dice').on("click", function() {
        content.append(makeSelector());
    });
}
$(document).ready(readyFn);

