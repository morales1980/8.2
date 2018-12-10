var box = [];
box[0] = '1'+2;
box[1] = '1'*2;
box[2] = '1cm'*3;
box[3] = parseInt('1cm'*3);
box[4] = parseInt('cm1'*3);
box[5] = parseInt('1,5'*3);
box[6] = parseInt('1.5'*3);
box[7] = parseFloat('1,5'*3);
box[8] = parseFloat('1.5'*3);

function evaluateElement(element, index, array) {
    document.write('value of item ' + (index + 1)+ ' is: ' + element + ' and its type is ' + typeof(element) + '<br>');
}
box.forEach(evaluateElement);
