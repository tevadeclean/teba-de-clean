import requests
import json

API_KEY = "AIzaSyAEwvUyxV6ax99jLu-VSEn8vySiK67-p9I"
SPREADSHEET_ID = "1mkobJlasnMVNuxmAGntVntpz7ZSNv-rudq0-kQ2qLxw"
RANGE = "A1:Z100"  # 最初の100行を取得

url = f"https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values/{RANGE}?key={API_KEY}"

try:
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    
    if 'values' in data:
        print(f"Successfully retrieved {len(data['values'])} rows.")
        for i, row in enumerate(data['values'][:5]):
            print(f"Row {i}: {row}")
    else:
        print("No data found in the specified range.")
        print(f"Full response: {json.dumps(data, indent=2)}")
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, 'response') and e.response is not None:
        print(f"Response: {e.response.text}")
