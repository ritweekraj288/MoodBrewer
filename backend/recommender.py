def score_item(item, prefs):
    score = 0

    if prefs["mood"] in item["mood"]:
        score += 3

    if prefs["taste"] in item["taste"]:
        score += 3

    if prefs["time"] in item["time"]:
        score += 2

    if prefs["caffeine"] == item["caffeine"]:
        score += 2

    if prefs["temperature"] == item["temperature"]:
        score += 1

    return score


def recommend(menu, prefs):
    best = None
    best_score = -1

    for item in menu:
        s = score_item(item, prefs)
        if s > best_score:
            best_score = s
            best = item

    return best
