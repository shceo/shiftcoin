from aiogram import Bot, Dispatcher, types
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram.utils import executor
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup
from app.core.config import settings
from app.services.user_service import create_user
from app.db.session import SessionLocal

bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)
dp = Dispatcher(bot)
dp.middleware.setup(LoggingMiddleware())

@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    db = SessionLocal()
    user = create_user(db, {"username": message.from_user.username})

    # Создание кнопок
    app_button = InlineKeyboardButton("Open App", url="https://your-frontend-app-url.com")
    channel_button = InlineKeyboardButton("Подписаться на канал", url="https://t.me/ShiftCoinCommunity")

    keyboard = InlineKeyboardMarkup().add(app_button).add(channel_button)

    await message.reply(f"Привет, {user.username}! Нажми на кнопку снизу, чтобы открыть приложение.", reply_markup=keyboard)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
