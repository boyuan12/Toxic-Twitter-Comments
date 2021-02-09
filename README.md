## Inspiration
Social media is replete with a lot of negative comments and this tends to affect peoples' judgment, reasoning, and mood. This makes social media not a safe place to be. We thought we could help by labeling comments based on toxicity level. When labels are placed on comments, they can be used to filter out inappropriate comments and therefore making social media a safe place to be again.

## What it does
This project classifies comments based on the following toxicity level:
- toxic
- severe toxic
- obscene
- threat
- insult
- identity hate

## How we built it
We trained a model that classifies comments based on the toxicity levels listed above. Our model is then used to classify comments according to their toxicity levels.

## Challenges we ran into
- Deploying our model on AWS lambda using BentoML was quite challenging
- We initially wanted to run our model on Twitter but we found it more complex to write a Twitter extension

## Accomplishments that we're proud of
- We were able to find a way around all our challenges. We decided to create mock comments to test our model.

## What we learned
- We were able to delve deeper into how BentoML works
- We also learnt some new concepts from some of the researches we did. Some of the concepts are AWS cloud deployment, creating a google chrome extension, etc.

## What's next for Toxic-Twitter-Comments
- For our future work, we will pursue running our model against some social media comments like Twitter. That was our initial plan but for the time constraint, we had.
