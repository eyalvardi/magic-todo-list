let counter = 0;

export class TaskModel{
    id:number;
    isDone:boolean;
    desc:string;

    constructor(desc:string,isDone:boolean = false){
        this.id     = counter++;
        this.isDone = isDone;
        this.desc   = desc;
    }
}


export class TodoListService{
    tasks:TaskModel[] = [];

    addTask(desc:string):void{
        let task = new TaskModel(desc);
        this.tasks.push(task);
    }

    removeTask(task:TaskModel):void{
        let index = this.tasks.findIndex(t=>t.id == task.id);
        this.tasks.splice(index,1);
    }

    get totalIsDone(){
        return this.tasks.filter(t=>t.isDone).length;
    }
}