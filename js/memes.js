const memes = [
  {
    id: "dancing-baby",
    name: "Dancing Baby",
    year: 1996,
    category: "Animation",
    image: "assets/images/dancing-baby.svg",
    imageAlt: "Original museum illustration of a dancing baby, not the original animation.",
    description: "A tiny 3D baby in a cha-cha loop became one of the earliest true internet sensations and a milestone of early viral culture.",
    origin: "The meme began in 1996 as a 3D baby animation created by Michael Girard and Robert Lurye for Autodesk's Character Studio. It spread through email chains and early web communities before becoming famous as a looping GIF paired with the 'Hooked on a Feeling' song.",
    meaning: "Dancing Baby is a goofy, uncanny little performance that made the internet feel magical and weird at the same time. It is a symbol of the early web's delight in sharing absurdly charming digital oddities.",
    significance: "This was one of the earliest viral internet phenomena and a precursor to modern meme culture. Its rapid spread showed that email, message boards, and early GIF-sharing communities could turn a random digital creation into a global joke.",
    sources: [
      "https://en.wikipedia.org/wiki/Dancing_baby",
      "https://knowyourmeme.com/memes/dancing-baby"
    ],
    imageCredit: "Original SVG illustration created for this project; it is not the 1996 animation and uses no third-party image."
  },
  {
    id: "grumpy-cat",
    name: "Grumpy Cat",
    year: 2012,
    category: "Animal",
    image: "assets/images/grumpy-cat.jpg",
    imageAlt: "Gage Skidmore photograph of Grumpy Cat with a meme caption.",
    description: "An unmistakable frown turned into a universal symbol for disappointment, skepticism, and low-energy judgment.",
    origin: "Born from a photo of Tardar Sauce, a cat from Morristown, Arizona, the meme took off in 2012 after images were shared online and quickly captioned as a grumpy commentator on ordinary life.",
    meaning: "The joke is that the cat looks as though it has already seen through the nonsense of the world. Grumpy Cat became a shorthand for 'I am not impressed' across social media.",
    significance: "The meme helped define the era of animal-photo caption culture and became a media sensation, appearing in commercials, merchandise, and internet commentary.",
    sources: [
      "https://en.wikipedia.org/wiki/Grumpy_Cat",
      "https://knowyourmeme.com/memes/grumpy-cat",
      "https://commons.wikimedia.org/wiki/File:Grumpy_Cat_meme_example.jpg",
      "https://creativecommons.org/licenses/by-sa/4.0/"
    ],
    imageCredit: "Photograph by Gage Skidmore, Wikimedia Commons file \"Grumpy Cat meme example.jpg,\" licensed CC BY-SA 4.0. See the linked file page and license."
  },
  {
    id: "this-is-fine",
    name: "This Is Fine",
    year: 2013,
    category: "Comic",
    image: "assets/images/this-is-fine-interpretation.svg",
    imageAlt: "Museum interpretation of a snail sheltering from a storm, representing composure amid chaos; not KC Green's comic.",
    description: "A cartoon dog sits calmly in a room filling with flames, embodying the internet's most polished fake composure.",
    origin: "Created by cartoonist KC Green in 2013 as a comic titled 'This is Fine,' the image was later repurposed as a meme to dramatize quietly spiraling situations, denial, and emotional shutdown.",
    meaning: "The meme captures a person or organization acting like everything is absolutely normal while disaster unfolds in the background. It is the visual equivalent of 'I am coping, sort of.'",
    significance: "It became one of the most reusable reaction memes for stress, workplace chaos, and public nonsense because its joke is instantly readable and dramatically flexible.",
    sources: [
      "https://en.wikipedia.org/wiki/This_is_Fine_(meme)",
      "https://knowyourmeme.com/memes/this-is-fine"
    ],
    imageCredit: "Original museum interpretation created for this project. It evokes the meme's general theme of composure amid chaos; it is not KC Green's original comic or artwork."
  },
  {
    id: "overly-attached-girlfriend",
    name: "Overly Attached Girlfriend",
    year: 2012,
    category: "Reaction",
    image: "assets/images/overly-attached-girlfriend.jpg",
    imageAlt: "Gage Skidmore photograph of Laina Morris and Grumpy Cat at VidCon 2014, not the original meme template.",
    description: "A close-up stare and intense expression turned a simple internet reaction face into an exaggerated symbol of overly enthusiastic attention.",
    origin: "The meme emerged from a photo of Laina Morris, who became famous after the image was paired with captions about being too interested, too emotionally invested, or just a little bit too committed.",
    meaning: "It satirizes obsessive behavior, jealousy, and the kind of attention that feels a bit too intense for a normal social interaction. The meme is a visual shorthand for 'I am extremely invested in this situation.'",
    significance: "It became a staple of early 2010s meme culture, spreading across imageboards and social media as a reaction template for dramatic over-commitment.",
    sources: [
      "https://en.wikipedia.org/wiki/Overly_Attached_Girlfriend",
      "https://knowyourmeme.com/memes/overly-attached-girlfriend",
      "https://commons.wikimedia.org/wiki/File:Laina_Morris_by_Gage_Skidmore.jpg",
      "https://creativecommons.org/licenses/by-sa/3.0/"
    ],
    imageCredit: "Photograph by Gage Skidmore, \"Laina Morris by Gage Skidmore.jpg\" (VidCon 2014), licensed CC BY-SA 3.0. See the linked file page and license."
  },
  {
    id: "nyan-cat",
    name: "Nyan Cat",
    year: 2011,
    category: "Animation",
    image: "assets/images/nyan-cat-interpretation.svg",
    imageAlt: "Original pixel-star and musical-note illustration, a museum interpretation rather than Nyan Cat's original artwork.",
    description: "A pop-art cat with a rainbow trail and a cheerful melody became the official emblem of internet delight in the early 2010s.",
    origin: "Created by illustrator Christopher Torres in 2011, the character was animated and uploaded to YouTube with a looping song, spreading rapidly across anime fandoms and social media communities.",
    meaning: "Nyan Cat captures pure, ecstatic silliness. It is a cheerful counterweight to more cynical memes and a reminder that the internet can also be very, very happy.",
    significance: "It became one of the earliest viral loop animations to feel truly native to online culture, and its cheerful scoring is still instantly recognizable.",
    sources: [
      "https://en.wikipedia.org/wiki/Nyan_Cat",
      "https://knowyourmeme.com/memes/nyan-cat",
      "https://www.nyan.cat/",
      "https://www.nyan.cat/credits.php"
    ],
    imageCredit: "Original museum interpretation created for this project. This abstract pixel-star illustration evokes Nyan Cat's cheerful, musical internet energy; it is not Nyan Cat's character or original artwork."
  },
  {
    id: "keyboard-cat",
    name: "Keyboard Cat",
    year: 2009,
    category: "Video",
    image: "assets/images/keyboard-cat-interpretation.svg",
    imageAlt: "Original illustration of a different cat playing a synthesizer, not Fatso or a video still.",
    description: "A cat apparently 'playing' a keyboard became a viral reaction meme in 2009, often used to play off a failure or awkward moment.",
    origin: "Charlie Schmidt filmed his cat Fatso in 1984 and uploaded the footage to YouTube in 2007. It stayed relatively obscure until Brad O'Farrell's 2009 'Play him off, Keyboard Cat' mash-up brought it widespread attention.",
    meaning: "Keyboard Cat is a visual joke about musical confidence, absurd timing, and the temporary illusion that any chaotic scene can be solved with a dramatic keyboard flourish.",
    significance: "As one of the earliest viral cat memes, it helped define the internet's love of looping, remixable animal comedy and became a template for later meme culture.",
    sources: [
      "https://en.wikipedia.org/wiki/Keyboard_Cat",
      "https://knowyourmeme.com/memes/keyboard-cat",
      "https://www.theguardian.com/technology/2009/may/16/keyboard-cat",
      "https://www.youtube.com/watch?v=J---aiyznGQ"
    ],
    imageCredit: "Original museum interpretation created for this project. It depicts a different, stylized cat playing a synthesizer; it is not Fatso or a still from Charlie Schmidt's video."
  },
  {
    id: "doge",
    name: "Doge",
    year: 2013,
    category: "Image Macro",
    image: "assets/images/doge-meme-example.jpg",
    imageAlt: "A Shiba Inu named Archer surrounded by colorful captions depicting the dog's thoughts.",
    description: "A Shiba Inu gets a running inner monologue in colorful, deliberately odd captions—such wow, much internet.",
    origin: "Photos of Shiba Inus, especially Kabosu's, helped inspire the Doge format. The meme became widely popular in 2013. This licensed example features Archer, a different Shiba Inu, rather than Kabosu.",
    meaning: "Doge captions mimic a dog's excited inner voice with short, intentionally unusual phrases such as 'such,' 'many,' 'very,' and 'wow.' The sillier the grammar, the better.",
    significance: "Doge-speak became a widely recognized online language, inspiring countless captioned images and remixes.",
    sources: [
      "https://www.dictionary.com/culture/memes/doge",
      "https://knowyourmeme.com/memes/doge",
      "https://commons.wikimedia.org/wiki/File:Doge_meme_example.jpg",
      "https://creativecommons.org/licenses/by/2.0/"
    ],
    imageCredit: "Image by likeaduck, \"Doge meme example.jpg,\" Wikimedia Commons, licensed CC BY 2.0. It is extracted from \"Shiba Inu in snow.jpg,\" also by likeaduck and licensed CC BY 2.0. Credit likeaduck, link the license, and indicate any changes."
  }
];
