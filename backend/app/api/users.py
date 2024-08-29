from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user import UserCreate, User
from app.services.user_service import create_user, get_user_balance

router = APIRouter()

@router.post("/", response_model=User)
def create_new_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)

@router.get("/{user_id}/balance", response_model=float)
def get_balance(user_id: int, db: Session = Depends(get_db)):
    return get_user_balance(db=db, user_id=user_id)
