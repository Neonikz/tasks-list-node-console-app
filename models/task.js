import {v4 as uuidv4} from 'uuid';


class Task {
    id = '';
    description = '';
    completedIn = null;

    constructor(description) {
        this.id = uuidv4().toString();
        this.description = description;
        this.completedIn = null;
    }
}

export default Task;