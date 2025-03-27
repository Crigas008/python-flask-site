from flask import Flask, render_template
from datetime import datetime
import platform
import os

app = Flask(__name__)

# Функция 1: Получение информации о сервере
def get_server_info():
    return {
        "os": platform.system(),
        "python_version": platform.python_version(),
        "current_time": datetime.now().strftime("%H:%M:%S"),
        "visits": os.environ.get('VISIT_COUNT', 0)
    }

# Функция 2: Простые вычисления
def calculate(a, b):
    return {
        "sum": a + b,
        "difference": a - b,
        "product": a * b,
        "quotient": a / b if b != 0 else "Undefined"
    }

@app.route('/')
def home():
    # Используем наши функции
    server_data = get_server_info()
    math_data = calculate(15, 3)
    
    return render_template('index.html',
                         server=server_data,
                         calculations=math_data,
                         title="Python Backend Demo")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)