const cardArray=[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    }
    ,
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    }
    ,{
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    }
    ,
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    }
    ,{
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    }
]
console.log(cardArray)
cardArray.sort(()=>0.5 -Math.random())
const gridDisplay =document.querySelector("#grid")
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i+1)
            card.addEventListener('click',flipCard)
gridDisplay.appendChild(card)
    }
}
createBoard()
function flipCard(){
   const cardId=this.getAttribute('data-id')
   const cards=cardArray[cardId]
   console.log(cards)
    console.log('clicked',cardId)
}