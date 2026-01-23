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
    """
    Get a personalized coffee recommendation based on user preferences.
    
    Expected input:
    {
        "mood": str (e.g., "focused", "energetic", "relaxed"),
        "taste": str (e.g., "bold", "sweet", "creamy"),
        "time": str (e.g., "morning", "afternoon", "evening"),
        "temperature": str ("hot" or "cold"),
        "caffeine": str ("none", "low", "medium", "high", "very-high")
    }
    """
    # Validate required fields
    required_fields = ["mood", "taste", "time", "temperature", "caffeine"]
    missing_fields = [field for field in required_fields if field not in user_input or not user_input[field]]
    
    if missing_fields:
        return {
            "recommendation": "Invalid Request",
            "reason": f"Missing required fields: {', '.join(missing_fields)}",
            "price": None
        }
    
    # Get recommendation
    recommendation = recommend(MENU, user_input)

    if not recommendation:
        return {
            "recommendation": "No match found",
            "reason": "Try changing your mood or taste preference",
            "price": None
        }
    
    # Build a more descriptive reason (case-insensitive matching)
    reason_parts = []
    
    user_temp = str(user_input.get("temperature", "")).lower().strip()
    item_temp = str(recommendation.get("temperature", "")).lower().strip()
    temp_match = user_temp == item_temp
    
    user_mood = str(user_input.get("mood", "")).lower().strip()
    item_moods = [str(m).lower().strip() for m in recommendation.get("mood", [])]
    mood_match = user_mood in item_moods
    
    user_taste = str(user_input.get("taste", "")).lower().strip()
    item_tastes = [str(t).lower().strip() for t in recommendation.get("taste", [])]
    taste_match = user_taste in item_tastes
    
    user_time = str(user_input.get("time", "")).lower().strip()
    item_times = [str(t).lower().strip() for t in recommendation.get("time", [])]
    time_match = user_time in item_times or "any" in item_times
    
    user_caf = str(user_input.get("caffeine", "")).lower().strip()
    item_caf = str(recommendation.get("caffeine", "")).lower().strip()
    caffeine_match = user_caf == item_caf
    
    if temp_match:
        reason_parts.append(f"served {recommendation['temperature']}")
    if mood_match:
        reason_parts.append(f"perfect for a {user_input['mood']} mood")
    if taste_match:
        reason_parts.append(f"with a {user_input['taste']} taste")
    if time_match:
        reason_parts.append(f"ideal for {user_input['time']}")
    if caffeine_match:
        reason_parts.append(f"{user_input['caffeine']} caffeine")
    
    if reason_parts:
        reason = f"Recommended because it's {', '.join(reason_parts)}."
    else:
        reason = f"Perfect for a {user_input['mood']} mood in the {user_input['time']}."

    return {
        "recommendation": recommendation["name"],
        "price": recommendation["price"],
        "reason": reason
    }
