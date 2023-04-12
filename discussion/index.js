function shirtColor(day) {
    if(typeof day === 'string') {
        switch(day.toLowerCase()) {
        case 'monday':
            console.log('Today is Monday, Wear Black')
            break;

        case 'tuesday':
            console.log('Today is Tuesday, Wear Green');
            break;
        
        case 'wednesday':
            console.log('Today is Wednesday, Wear Yellow');
            break;

        case 'thursday':
            console.log('Today is Thursday, Wear Red');
            break;

        case 'friday':
            console.log('Today is Friday, Wear Violet');
            break;

        case 'saturday':
            console.log('Today is Saturday, Wear BLue');
            break;

        case 'sunday':
            console.log('Today is Sunday, Wear White');
            break;

        default:
            console.log('Invalid Input. Enter a valid day of the week')
}
    }
else { console.log('Invalid Input. Please input a string')
    }

}

shirtColor('monday')
shirtColor('tuesday')
shirtColor('wednesday')
shirtColor('thursday')
shirtColor('friday')
shirtColor('saturday')
shirtColor('sunday')
shirtColor('true')
shirtColor(false)