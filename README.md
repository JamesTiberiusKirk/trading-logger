# Trade Logger
## Requirements
- Compare the money in vs the money out
    - A way to log it
    - For every trade 
        - Calculate daily/weekly amounts
    - Log if its a win/loss
        - Colour code it
        - Some visual representation
    - Radio of win/loss
    - Rate self on each trade (smth like 0-5)
    - Notes section for every trade
    - A way to compare two separate days
        - Today vs x date
    - Log the item traded
        - Opening price
        - Closing price
        - Heigh price 
        - Low price

## Data
- Trades
    - Item traded
        - Opening price
        - Closing price
        - High price
        - Low price
    - Starting money
    - End money
    - Date 
    - Self rating
    - Notes
    - Win/loss (determined automatically)
        - Percentage (positive/negative)


---

# Backend API Docs v0.1
- Everything under /api/v0.1/

## Authentication

## Trades CRUD
- POST /api/v0.1/trades
    - Provide auth headers  
POST Body
``` json
{
    "trade": {
        "item_traded": {
            "item_name": "potatoes",
            "opening_price": 1,
            "closing_price": 1,
            "high_price": 1,
            "low_price": 1
        },
        "trade_notes": {
            "rating": 4,
            "notes": "This was a really good day"
        },
        "starting_money": 1,
        "ending_money": 10,
        "date": {
            "date": "24/04/2020"
        }
    }
}
```

