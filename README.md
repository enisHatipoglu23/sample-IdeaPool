### IdeaPool

# This project's purpose is create a bridge between developers, investers etc. and persons that who has a great idea and looking for a help to build it. I named it Idea Pool it sounds nice to me.

### Usage of NEAR Features

1. npm
2. Current version of Node.js
3. yarn / to install: npm install --global yarn (or just npm i -g yarn) you need near-cli installed globally. Here's how:
4. npm install --global near-cli This will give you the near CLI tool. Ensure that it's installed with: near --version

Getting started
1. Clone this repo to a local folder
2. type yarn (This will install the dependencies so that we won’t have a problem related to that.)
3. yarn build:release
4. near dev-deploy ./build/release/simple.wasm

### Functions

## 1.usersIntro
This function returns users intro about themselves and their ideas.
#  export function usersIntro(intro:string): string{
  # return intro;
# }

## 2.hi
This function retruns users intro again or if intro is less than 3 then it returns the default message.
# export function hi(intro:string): string{
#  if(intro.length <= 3){
#    return DEFAULT_MESSAGE;
#  }
#  return intro;
# }

## 3.addIdea
This function allows users to adding an idea according to stated letters counts.
# export function addIdea(head: string, intro: string, idea: string): void{
#  logging.log("Head => \t" + head + "\nIntro => \t" + intro + "\nIdea => \t" + idea)
#  assert(head.length <= MAX_HEAD_LENGTH, `Max head length is ${MAX_HEAD_LENGTH} char. `)
#  assert(!isHeadUsedBefore, "This head has been used before.")
#  assert(intro.length <= MAX_INTRO_LENGTH, `Max intro length is ${MAX_INTRO_LENGTH} char. `)
#  assert(idea.length <= MAX_IDEA_LENGTH, `Max intro length is ${MAX_IDEA_LENGTH} char. `)
#  const listing = new Idea(head, intro, idea)
#  ideas.push(listing)
# }

## 4.findingHead
This function looking for if the idea that is rating from users, exist or not. Or directly looking for the head is exist or not.
# export function findingHead(headq:string): void{
#  for(let i = 0; i<ideas.length; i++){
#    if(ideas[i].head == headq){  
#      logging.log(ideas[i])
#    }
#  }
# }

## 5. isHeadUsedBefore
This function checks if the head that wanting to be used is used before or not.
# export function isHeadUsedBefore(headq: string): boolean {
#  for(let i = 0; i< ideas.length; i++){
#    if(ideas[i].head == headq){
#      logging.log("Head has been used before!")
#      return true;
#    }
#  }  
#  return false
# }

## 6. rateTheIdea
This function allows users to rate the idea. Like or dislike.
# export function rateTheIdea(headq:string, vote:string): Vote{
#  assert(findingHead, "Head not exist.")
#  assert((vote == "like" || vote == "dislike"), `Vote must be equal like or dislike`)
#  if(vote == "like"){
#    logging.log("you liked " + headq + "like=+1^")
#    like++
#  }
#  if(vote == "dislike"){
#    logging.log("you didn't like " + headq)
#    dislike++
#  }
#  let voting = new Vote(headq, context.sender, vote, like, dislike)
#  votes.push(voting)
#  return voting
# }  
