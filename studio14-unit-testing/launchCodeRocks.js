function launchOutput(num){
    // if (num % 2 === 0 && num % 3 !== 0 && num % 5 !==0){
    //     return 'Launch!';
    // } else if (num % 3 === 0 && num % 2 !== 0 && num % 5 !== 0) {
    //     return 'Code!';
    // } else if (num % 5 === 0 && num % 2 !== 0 && num % 3 !== 0) {
    //     return 'Rocks!';
    // } else if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {
    //     return 'LaunchCode!';
    // } else if (num % 3 === 0 && num % 5 === 0 && num % 2 !== 0) {
    //     return 'Code Rocks!';
    // } else if (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0) {
    //     return 'Launch Rocks!';
    // } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
    //     return 'LaunchCode Rocks!';
    // } else {
    //     return `Rutabagas! That doesn't work.`;
    // }
    
    let output = '';
    let rocks = 'Rocks';

    if (num % 2 === 0) {
        output += 'Launch';
    }
    
    if (num % 3 === 0) {
        output += 'Code';
    }

    if (num % 5 === 0) {
        if (output !== '') {
            output += ' ' + rocks;
        } else {
            output += rocks;
        }
    }

    if (output === '') {
        return `Rutabagas! That doesn't work.`;
    }

    return output + '!';
}

module.exports = launchOutput;