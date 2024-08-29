from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.task import TaskCreate, Task
from app.services.task_service import create_task, get_tasks, complete_task

router = APIRouter()

@router.post("/", response_model=Task)
def create_new_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db=db, task=task)

@router.get("/", response_model=list[Task])
def list_tasks(db: Session = Depends(get_db)):
    return get_tasks(db=db)

@router.post("/{task_id}/complete", response_model=str)
def complete_user_task(task_id: int, user_id: int, db: Session = Depends(get_db)):
    return complete_task(db=db, task_id=task_id, user_id=user_id)
