from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str
    reward: int

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int
    is_completed: bool

    class Config:
        orm_mode = True
