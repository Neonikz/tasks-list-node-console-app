import { 
    inquirerMenu,
    listTasksToDelete,
    pause,
    confirm,
    readInput,
    showChecklist
} from './helpers/inquirer.js';
import colors from 'colors';
import Tasks from './models/tasks.js';
import {saveDB,readDB} from './helpers/saveFile.js';


const main = async() => {
    let option = '';

    const tasks = new Tasks();
    const tasksDB = readDB();

    if(tasksDB){
        tasks.uploadTasksFromFile(tasksDB);
    }

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask(desc);
                break;
            case '2':
                tasks.completedList();
                break;
            case '3':
                tasks.listPendingCompletedTasks(true);
                break;
            case '4':
                tasks.listPendingCompletedTasks(false);
                break;
            case '5':
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompletedTasks(ids);
                break;
            case '6':
                const id = await listTasksToDelete(tasks.listArr);
                if(id !== '0'){
                    const ok = await confirm('Are you sure you want to delete the task?');
                    if(ok){
                        tasks.deleteTask(id);
                        console.log('Task deleted successfully')
                    }
                }
                break;
        }

        saveDB(tasks.listArr);

        await pause();
    } while (option !== '0');
}

main();