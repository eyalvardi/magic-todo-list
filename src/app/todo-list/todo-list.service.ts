let counter = 0;

export class TaskModel{
    id:number;
    isDone:boolean;
    desc:string;
    priority:number;
    endDate:Date;

    constructor(desc:string,date:Date,isDone:boolean = false){
        this.id     = counter++;
        this.isDone = isDone;
        this.desc   = desc;
        this.endDate= date;
    }

    get isPassedDate():boolean{
        return new Date().getTime() > this.endDate.getTime();
    }
}


export class TodoListService{
    tasks:TaskModel[] = [];

    addTask(desc:string,date:string):void{
        let task = new TaskModel(desc,new Date(date));
        this.tasks.push(task);
    }

    removeTask(task:TaskModel):void{
        let index = this.tasks.findIndex(t=>t.id == task.id);
        this.tasks.splice(index,1);
    }

    get totalIsDone(){
        return this.tasks.filter(t=>t.isDone).length;
    }
    get donePercentage(){
        if(!this.tasks || this.tasks.length === 0) return 0;

        return this.totalIsDone / this.tasks.length;
    }
}