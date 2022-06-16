const action = "Action"
const adventure = "Adventure"
const animated = "Animated"
const comedy = "Comedy"
const drama = "Drama"
const detective = "Detective"
const fantasy = "Fantasy"
const historical = "Historical"
const horror = "Horror"
const musical = "Musical"
const romance = "Romance"
const science_fiction = "Science Fiction"
const thriller = "Thriller"
const western = "Western"
const mix = "Mix"



const type = [
    action,
    adventure,
    animated,
    comedy,
    detective,
    drama,
    fantasy,
    historical,
    horror,
    musical,
    romance,
    science_fiction,
    thriller,
    western,
    mix,
    
];

const count = [1, 2, 3, 4, 5];

const movies = [
    {
        id: 0,
        name: "Arka Sokaklar",
        type: detective,
        category: "Series",
        images: [require("../Images/arka_sokaklar.jpg"), require("../Images/arka_sokaklar2.jpg")],
        about: "A magical, giant city that challenges centuries; Istanbul. And our brave police who challenges all kinds of bad and trouble to make every street of this city better, 'livable' for everybody.In Istanbul, there is a newly formed special team which contains only some selected commisioners is led by a legendary policeman, Riza Captain, who is also called 'Riza Father'. Under the guidance of their Riza Father, a police squad in Istanbul is fighting against crime.",
    },
    {
        id: 1,
        name: "Fast and Furious",
        type: action,
        category: "Movie",
        images: [require('../Images/hizli_ve_ofkeli.jpg'), require("../Images/hizli_ve_ofkeli2.jpg"), require('../Images/toretto.jpg')],
        about: "In the opening scene, a helmeted racer leads a gang of stunt drivers driving three black Honda Civic coupes who hijack a shipment of electronics from a moving truck.  Brian O'Conner (Brian Walker) is an undercover police officer, driving supercharged cars and trying to infiltrate Dominic Toretto's (Vin Diesel) gang, who are suspects in the robberies. He first visits Dominic's cafe, where he makes conversation with Dominic's younger sister, Mia (Jordana Brewster) and tries to make inroads with the gang by selling performance equipment. Vince (Matt Schulze) is jealous, and a fight breaks out. His girlfriend Letty (Michelle Rodriguez) begs Dom to break it up, who does so, threatening to get Brian fired. ",
    },
    {
        id: 2,
        name: "Black List",
        type: detective,
        category: "Series",
        images: [require('../Images/blacklist.jpg'), require("../Images/blacklist2.jpg")],
        about: "The Blacklist is an American crime thriller television series that premiered on NBC on September 23, 2013. The show follows Raymond 'Red' Reddington (James Spader), a former U.S. Navy officer turned high-profile criminal who voluntarily surrenders to the FBI after eluding capture for decades.",
    },
    {
        id: 3,
        name: "Peaky Blinders",
        type: drama,
        category: "Series",
        images: [require('../Images/peaky.jpg'), require('../Images/peaky2.jpg')],
        about: ("Small Heath, Birmingham, 1919. Thomas Shelby (Cillian Murphy, Inception) and his family run the most feared and powerful local gang, the Peaky Blinders. Named for their practice of sewing razor blades into the peaks of their caps, they make money from illegal betting, protection and the black market."+
        "But Tommy’s ambitions go beyond running the streets, and when a crate of guns goes missing from an arms factory, he recognises an opportunity to move up in the world. As rival gangs, Communist revolutionaries and IRA Fenians descend on Small Heath in pursuit of the weapons; Winston Churchill dispatches a ruthless police chief from Belfast to impose order on an increasingly lawless city and recover the guns."+
        " Boasting a stellar cast that includes Sam Neill (Jurassic Park), Helen McCrory (Harry Potter and the Half-Blood Prince), Paul Anderson (The Revenant), Annabelle Wallis (The Loudest Voice), Joe Cole (Prayer before Dawn) and Sophie Rundle (Gentleman Jack), Benjamin Zephaniah and Natasha O’Keeffe (Filth). Season One sprang an entirely new kind of drama on an unsuspecting audience back in September 2013."+
        " Writer and creator Steven Knight says:} Season One lifted the lid on a world undiscovered and forgotten by history but alive and kicking in oral tradition. I mined the memories of relatives regarding the lawless streets of Small Heath Birmingham, run by gangsters, rocked by turf wars, ruled by the Peaky Blinders. Tommy Shelby arrived on a black horse.  He fought memories of war,"+
         " London gangs, and his own father as well as the indomitable Major Campbell of Special Branch.  He also found Grace and he found love. Series one was about destroying the template of British period drama.  The music took lots of people by surprise and surprise is good.")
     },
    {
        id: 4,
        name: "Rush Hour",
        type: comedy,
        category: "Movie",
        images: [require('../Images/rush_hour.jpg')],
        about: ("Hongkong, the last night of British rulership."+
       " Detective Inspector Lee, close friend to Consul Han Solon, manages to prevent precious pieces of China's history being smuggled out of the country."+
        " Two years later - Consul Han is living in Los Angeles with his family - Crime Lord Juntao takes revenge on him by abducting his young daughter Soo Yung." +
        " Han does not trust the FBI to do a good job and has Lee flown in from Hongkong to assist them. But the FBI officials do not want any help from outside and officially request help from LAPD, who are glad to get rid of Detective James Carter for a while, a big-mouthed work-alone cop who just can't be cool enough."+
         " His assignment is to keep Lee as far away from trouble as possible."+
        " But Carter and Lee don't like being put aside in that way and start working the case on their own.")
    },
    {
        id:5,
        name:"Ironman",
        type:science_fiction,
        category:"Movie",
        images:[ require("../Images/ironman.jpg") , require("../Images/ironman2.jpg") , require("../Images/ironman1.jpg")],
        about:"Iron Man is a superhero appearing in American comic books published by Marvel Comics."+
        " The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby."+
        " The character made his first appearance in Tales of Suspense  (cover dated March 1963), and received his own title in Iron Man  (May 1968)."+
        " Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.  A wealthy American business magnate, playboy, philanthropist,"+
        " inventor and ingenious scientist, Anthony Edward Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction,"+
        " he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company,"+
        " Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually publicly reveals himself to be Iron Man."
    },
    {
        id:6,
        name:"God Father",
        type:drama,
        category:"Movie",
        images:[ require("../Images/godfather.jpg") , require("../Images/godfather2.jpg") ],
        about:"The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York."+
        " He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding."+
        " Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not."+
        " But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same,"+
        " Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart."
    },
    {
        id: 7,
        name: "The Sandman",
        type: horror,
        category: "Series",
        images: [require("../Images/sandman.jpg"), require("../Images/sandman2.jpg")],
        about: "A wizard attempting to capture Death to bargain for eternal life traps her younger brother Dream instead. Fearful for his safety, the wizard kept him imprisoned in a glass bottle for decades. After his escape, Dream, also known as Morpheus, goes on a quest for his lost objects of power",
    },
    {
        id: 8,
        name: "Crimes of the Future",
        type: horror,
        category: "Movie",
        images: [require("../Images/crmf.jpg"), require("../Images/crmf2.jpeg"), require("../Images/crmf3.jpg")],
        about: "It sounds just as ambitious, taking a deep dive into the not-so-distant future in which humankind is learning to adapt to its synthetic surroundings. This evolution moves humans beyond their natural state and into a metamorphosis, which alters their biological makeup. While some embrace the limitless potential of trans-humanism, others attempt to police it. Either way, Accelerated Evolution Syndrome, is spreading fast. Saul Tenser is a beloved performance artist who has embraced this new state, sprouting new and unexpected organs in his body. Along with his partner Caprice, Tenser has turned the removal of these organs into a spectacle for his loyal followers to marvel at in real time theater. But with both the government and a strange subculture taking note, Tenser is forced to consider what would be his most shocking performance of all.",
    },
    {
        id: 9,
        name: "Jason Bourne",
        type: action,
        category: "Movie",
        images: [require("../Images/bourne.jpg"), require("../Images/bourne2.jpg"), require("../Images/bourne3.jpg")],
        about: "Jason Bourne is again being hunted by the CIA. It begins when Nicky Parsons a former CIA operative who helped Bourne, who went under and now works with a man who's a whistle blower and is out to expose the CIA's black ops. Nicky hacks into the CIA and downloads everything on all their Black Ops, including Treadstone which Bourne was a part of. And Heather Lee, a CIA agent, discovers the hack and brings it to the attention of CIA Director Dewey, the man behind the Black Ops. He orders Parsons be found and, hopefully, Bourne, too.",
    },
    {
        id: 10,
        name: "Bullet Train",
        type: action,
        category: "Movie",
        images: [require("../Images/bullettrain.jpg"), require("../Images/bullettrain2.jpg"), require("../Images/bullettrain3.jpg")],
        about: "Trained killer Ladybug wants to give up the life but is pulled back in by his handler Maria Beetle in order to collect a briefcase on a bullet train heading from Tokyo to Morioka. On board are fellow assasins Kimura, the Prince, Tangerine, and Lemon. Once on board the five assasins discover that their objectives are all connected.",
    },
];



export default SelectetItems = {
    type: type,
    movies: movies,
    count: count

}


