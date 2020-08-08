# Trade Logger

## Requirements

* Compare the money in vs the money out
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

* Trades
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

* Everything under /api/v0.1/

## Authentication

* POST /users/login
    - Responds with 200 if successful
    - Responds with 401 for wrong creds
POST Request Body
``` json
{
    "username": "testuser",
    "password": "password"
}
```

* POST /users/register
    - Eventually, want to integrate email for verification

POST Request Body
``` json
{
    "username":"test",
    "password":"testpass",
    "email":"test@email.com"
}
```

* For every single protected route, auth headers need to be included

``` HTTP
Authorization: Basic base64(<username>:<password>)
```

## Trades CRUD

* POST /trade
    - Provide auth headers
        - This will also link the trades to each user

POST Request Body

``` json
{
    "trade": {
        "item_traded": {
            "item_description": "potatoes",
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

* GET /trade
    - Provide auth headers
        - TODOs: 
            - Implement pagination based on a time frame 
            - Implement pagination based on amounts

GET Response Body

``` json
{
    "trades": [
        {
            "trade_id":"1",
            "item_traded": {
                "item_trade_id":"1",
                "item_description": "potatoes",
                "opening_price": 1,
                "closing_price": 1,
                "high_price": 1,
                "low_price": 1
            },
            "trade_notes": {
                "trade_notes":"1",
                "rating": 4,
                "notes": "This was a really good day"
            },
            "starting_money": 1,
            "ending_money": 10,
            "day": {
                "trade_day_id":"1",
                "date": "24/04/2020"
            }
        }
    ],
    "amount":"1",
    "lifetime-win-loss":"50%"
}
```

* PUT /trade?id=xxx
    - Provide auth headers

PUT Request Body
``` json
{
    "trade": {
        "trade_id":"1",
        "item_traded": {
            "item_trade_id":"1",
            "item_description": "potatoes",
            "opening_price": 1,
            "closing_price": 1,
            "high_price": 1,
            "low_price": 1
        },
        "trade_notes": {
            "trade_note_id";"1",
            "rating": 4,
            "notes": "This was a really good day"
        },
        "starting_money": 1,
        "ending_money": 10,
        "day": {
            "trade_day_id":1,
            "date": "24/04/2020"
        }
    }
}

```

* DELETE /trade?id=xxx
    - Provide auth headers

DELETE Request Body
```json
{
    "trade_id":"1"
}
```

