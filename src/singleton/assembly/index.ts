import { context, logging, PersistentVector } from "near-sdk-core";


const whoIsDev = context.sender
const DEFAULT_MESSAGE = "Hey I am developer my name is " + whoIsDev
 + " ,i have a great idea!"
const MAX_INTRO_LENGTH = 100;
const MAX_IDEA_LENGTH = 150;
const MAX_HEAD_LENGTH = 10;
let like = 0;
let dislike = 0;
//classes
@nearBindgen
class Idea{
  head: string
  intro: string
  idea: string
  votes: PersistentVector<Vote>
  
  constructor(head: string, intro: string, idea: string){
    this.head = head
    this.intro = intro
    this.idea = idea
    
  }
}
@nearBindgen
class Vote{
  head: string
  user: string
  vote: string
  likeC: u16 = 0
  dislikeC: u16 = 0

  constructor(head: string, userName: string, voteRate: string, likeC:u16, dislikeC:u16){
    this.head = head;
    this.user = userName;
    this.vote = voteRate;
    this.likeC = likeC;
    this.dislikeC = dislikeC;
  }
}
const ideas = new PersistentVector<Idea>("ide")
const votes = new PersistentVector<Vote>("vote")
const votesArr = new Array<Vote>(votes.length)
votesArr.push(votes.popBack())

//saying hi
export function hi(intro:string): string{
  if(intro.length <= 3){
    return DEFAULT_MESSAGE;
  }

  return intro;

}
//adding the idea to the platform
export function addIdea(head: string, intro: string, idea: string): void{
  logging.log("Head => \t" + head + "\nIntro => \t" + intro + "\nIdea => \t" + idea)
  assert(head.length <= MAX_HEAD_LENGTH, `Max head length is ${MAX_HEAD_LENGTH} char. `)
  assert(!isHeadUsedBefore, "This head has been used before.")
  assert(intro.length <= MAX_INTRO_LENGTH, `Max intro length is ${MAX_INTRO_LENGTH} char. `)
  assert(idea.length <= MAX_IDEA_LENGTH, `Max intro length is ${MAX_IDEA_LENGTH} char. `)
  const listing = new Idea(head, intro, idea)
  ideas.push(listing)
}
//checking head is exist or not
export function findingHead(headq:string): void{
  for(let i = 0; i<ideas.length; i++){
    if(ideas[i].head == headq){
      
      logging.log(ideas[i])
    }
  }
}
//checking to head is used before
export function isHeadUsedBefore(headq: string): boolean {
  for(let i = 0; i< ideas.length; i++){
    if(ideas[i].head == headq){
      logging.log("Head has been used before!")
      return true;
    }
  }  
  return false
}
//voting the idea 0-10
export function rateTheIdea(headq:string, vote:string): Vote{
  
  assert(findingHead, "Head not exist.")
  assert((vote == "like" || vote == "dislike"), `Vote must be equal like or dislike`)
  if(vote == "like"){
    logging.log("you liked " + headq + "like=+1^")
    like++
  }
  if(vote == "dislike"){
    logging.log("you didn't like " + headq)
    dislike++
  }
  let voting = new Vote(headq, context.sender, vote, like, dislike)
  votes.push(voting)
  return voting
  
}  





