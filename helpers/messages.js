require('colors');

const showMenu = () => {
    return new Promise((resolve) => {
        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción');
        console.log('=========================\n'.green);
    
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List tasks`);
        console.log(`${'3.'.green} List completed tasks`);
        console.log(`${'4.'.green} List pending tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Exit \n`);
    
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readLine.question('Select an option:  ', (option) =>{
            readLine.close();
            resolve(option);
        });
    })
}

const pause = () => {
    return new Promise((resolve) => {
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, (option) =>{
            readLine.close();
            resolve(option)
        }); 
    })
}

module.exports = {
    showMenu,
    pause
}