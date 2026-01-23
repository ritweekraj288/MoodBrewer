def score_item(item, prefs):
    """
    Score an item based on how well it matches user preferences.
    Higher scores indicate better matches.
    """
    score = 0
    
    # Temperature match is CRITICAL - give it high weight
    # If temperature doesn't match, heavily penalize
    user_temp = str(prefs.get("temperature", "")).lower().strip()
    item_temp = str(item.get("temperature", "")).lower().strip()
    
    if user_temp == item_temp:
        score += 10  # High weight for temperature match
    else:
        score -= 5   # Penalty for temperature mismatch
    
    # Mood match - very important (case-insensitive)
    user_mood = str(prefs.get("mood", "")).lower().strip()
    item_moods = [str(m).lower().strip() for m in item.get("mood", [])]
    
    if user_mood in item_moods:
        score += 8
    else:
        score -= 2  # Small penalty for mood mismatch
    
    # Taste preference - very important (case-insensitive)
    user_taste = str(prefs.get("taste", "")).lower().strip()
    item_tastes = [str(t).lower().strip() for t in item.get("taste", [])]
    
    if user_taste in item_tastes:
        score += 8
    else:
        score -= 2  # Small penalty for taste mismatch
    
    # Time of day match (case-insensitive)
    user_time = str(prefs.get("time", "")).lower().strip()
    item_times = [str(t).lower().strip() for t in item.get("time", [])]
    
    if user_time in item_times or "any" in item_times:
        score += 5
    elif user_time == "any":
        score += 3  # If user selected "any", still give some points
    else:
        score -= 1  # Small penalty for time mismatch
    
    # Caffeine level match
    user_caf_raw = str(prefs.get("caffeine", "")).lower().strip()
    item_caf_raw = str(item.get("caffeine", "")).lower().strip()
    
    if user_caf_raw == item_caf_raw:
        score += 5
    else:
        # Partial match for caffeine levels
        caffeine_levels = ["none", "low", "low-medium", "medium", "high", "very-high"]
        
        user_caf = user_caf_raw
        item_caf = item_caf_raw
        
        if user_caf in caffeine_levels and item_caf in caffeine_levels:
            user_idx = caffeine_levels.index(user_caf)
            item_idx = caffeine_levels.index(item_caf)
            diff = abs(user_idx - item_idx)
            
            if diff == 1:
                score += 2  # Adjacent levels get some points
            elif diff == 2:
                score += 1  # Two levels away get minimal points
            else:
                score -= 1  # Penalty for very different levels
        else:
            # Fuzzy matching for similar caffeine descriptions
            if "low" in user_caf and "low" in item_caf:
                score += 1
            elif "high" in user_caf and "high" in item_caf:
                score += 1
            elif "medium" in user_caf and "medium" in item_caf:
                score += 1
            elif user_caf == "none" or item_caf == "none":
                score -= 2  # Bigger penalty for none vs something
            else:
                score -= 1
    
    return score


def recommend(menu, prefs):
    """
    Recommend the best menu item based on user preferences.
    Prioritizes exact matches but falls back to best available match.
    """
    if not menu:
        return None
    
    # First, try to find items that match temperature exactly (case-insensitive)
    user_temperature = str(prefs.get("temperature", "")).lower().strip()
    temperature_matches = [
        item for item in menu 
        if str(item.get("temperature", "")).lower().strip() == user_temperature
    ]
    
    # If we have temperature matches, ONLY consider those (strict temperature requirement)
    if temperature_matches:
        candidates = temperature_matches
    else:
        # If no temperature match exists, fall back to all items
        # But we'll still heavily penalize wrong temperature in scoring
        candidates = menu
    
    best = None
    best_score = float('-inf')
    
    for item in candidates:
        score = score_item(item, prefs)
        if score > best_score:
            best_score = score
            best = item
    
    # If no good match found, still return something (shouldn't happen with menu items)
    if best is None:
        # Fallback: return first item matching temperature if possible, else first item
        if temperature_matches:
            best = temperature_matches[0]
        else:
            best = menu[0] if menu else None
    
    return best
