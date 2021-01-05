# Toronto Water Monitor

## Why

A relative got a high water bill. Since the City of Toronto doesn't notify
you when there's a leak and many people get mailed once a quarter, it's
possible to get a water bill in the thousands.

I could also share it with others so that as a city, we can save a lot of water.

## Tech stack

- Back-end
  - Node.js
  - Express
  - PostgreSQL
  - Heroku
  - TypeScript

## Plan

1. Look at existing solutions
2. Figure out how to get the data
3. Back-end
4. Front-end

## Execution

### Existing solutions

There are existing solutions that you can place on top of your water. However, they're expensive.

### Get the data

The City of Toronto has a tool called MyWaterToronto.
After completing a form, you can view your water usage up until a week ago.

I was looking at the network tab and noticed that I could get the data I needed with a few calls with Postman. I didn't even need Puppeteer!

### Back-end

I started with the backend because the front-end depends on the backend.

I decided to go with an Express and Postgres stack because it's solid.

#### Emailing

Emailing is really expensive.
I did quite a bit of research.
It turns out that Blue SOMETHING had the best stuff. However, Twilio SendGrid seemed to have nicer docs and had a video tutorial integrating with Nodemailer so I went with the dev-friendly option.

I eventually just did everything on my own because:

1. with an external service, I would have to keep track of two email lists
   1. in my database
   2. with the external service
2. I couldn't customize the unsubscribe functionality.
3. I didn't want to invest the time to use one of their templates that could use nodemailer.
4. I wanted to keep things simple
5. I'm wary of the 100 daily email limit
6. I don't need the additional features like knowing the click through rate

##### Customizing emails

I now understand why HTML emailing is hard.
There's not a lot of support for many features and you have to inline style everything.

The biggest technical hurdle came when I decided to add the feature to unsubscribe directly from the email.

I don't fully understand how MailChimp and other mail clients do a single click to unsubscribe. I know that it sends them to a site which then redirects to a POST request to unsubscribe. However, I don't know how they handle the email client pre-fetching URLs. I know that GET requests should NEVER make a change to database and MailChimp seems to be violating this and getting away with it. I asked a [StackOverflow question]() but it remains unanswered.

So I did what I felt was the right thing to do: have the unsubscribe email link direct the user to a page with a form where they have to enter their email.

#### Testing

- Jest

I have unit tests for the validation of incoming data.

I have a manual tester that will send the two types of emails to my personal email address.

Finally, I test the database operations.

#### Deployment

I deployed my app with Heroku because it's free and you don't need another service to handle your database.

Heroku doesn't have a cron job so I used the Heroku daily scheduler which will.

### Front-end
