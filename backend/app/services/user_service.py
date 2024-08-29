from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate

def create_user(db: Session, user: UserCreate):
    db_user = User(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_balance(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    return user.balance if user else None
