# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from menu import MENU
# from recommender import recommend

# app = FastAPI()

# # ✅ CORS (REQUIRED for Next.js)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/chat")
# def chat(user_input: dict):
#     recommendation = recommend(MENU, user_input)

#     if not recommendation:
#         return {
#             "recommendation": "No match found",
#             "reason": "Try changing your mood or taste preference"
#         }

#     return {
#         "recommendation": recommendation["name"],
#         "price": recommendation["price"],
#         "reason": f"Perfect for a {user_input['mood']} mood in the {user_input['time']}."
#     }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from menu import MENU
from recommender import recommend

app = FastAPI()

# ✅ CORS (safe for Render + Vercel)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict later if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Health check (important for Render)
@app.get("/")
def health():
    return {"status": "MoodBrewer backend running"}

# ✅ Chat endpoint
@app.post("/chat")
def chat(user_input: dict):
    recommendation = recommend(MENU, user_input)

    if not recommendation:
        return {
            "recommendation": "No match found",
            "reason": "Try changing your mood or taste preference"
        }

    return {
        "recommendation": recommendation["name"],
        "price": recommendation["price"],
        "reason": f"Perfect for a {user_input['mood']} mood in the {user_input['time']}."
    }
