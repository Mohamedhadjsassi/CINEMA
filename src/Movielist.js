const movielist = [
    {
        Image:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg',
        title:'Iron Man',
        desc:'Alors qu il fait l essai d une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s évade et rentre aux États-Unis.',
        rate:'7.9/10' , id:'1'
        
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
        title:'The Incredible Hulk',
        desc:'Tapi dans les bas-fonds de Sao Paulo, Bruce Banner tente désespérément de percer le secret de la maladie qui l afflige.',
        rate:'6.6/10'
        , id:'2'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
        title:'Iron Man 2',
        desc:'Le monde sait désormais que l inventeur milliardaire Tony Stark et le super-héros Iron Man ne font qu un. Cependant, malgré les pressions, Tony n est pas disposé à divulguer les secrets de son armure, redoutant que l information atterrisse dans de mauvaises mains. Avec Pepper Potts et James Rhodey ',
        rate:'6.9/10'
        , id:'3'  
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
        title:'Thor',
        desc:'Le roi Odin règne avec sagesse sur son royaume. Une entente maintient la paix avec les Géants du monde glacé de Jotunheim.',
        rate:'7/10'
        , id:'4'
    },
    {
        Image:'https://www.chroniquedisney.fr/imgFiliale/marvel/2011-america-01.jpg',
        title:'Captain America',
        desc:'La Seconde Guerre mondiale fait rage. Après avoir tenté vainement de s engager dans l armée pour se battre aux côtés des Alliés, Steve Rogers, frêle et timide, se porte volontaire pour participer à un programme expérimental qui va le transformer en un super soldat connu sous le nom de Captain',
        rate:'6.9/10'
        , id:'5'
    },
    
    {
        Image:'https://musicart.xboxlive.com/7/deb75000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        title:'Marvels The Avengers',
        desc:'Quand un ennemi inattendu fait surface pour menacer la sécurité et l équilibre mondial, Nick Fury, directeur de l agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente.',
        rate:'8/10'
        , id:'6'
    },
    
    {
        Image:'https://img.over-blog.com/600x800/1/32/60/44/Actucine/2013/sem10/Iron-Man-3-nouvelle-affiche-VF.jpg',
        title:'Iron Man 3',
        desc:'Tony Stark, alias Iron Man, mène une vie confortable aux côtés de sa compagne, Pepper. Cependant, il se retrouve confronté à Mandarin, chef d une organisation terroriste, qui détruit sa maison et tout son univers. Tony Stark part alors à la recherche de Pepper, disparue, et cherche à se venger.',
        rate:'7.1/10'
        , id:'7'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg',
        title:'Thor: The Dark World',
        desc:'Alors que sur Terre, l astrophysicienne Jane Foster, grand amour de Thor, trouve par hasard une substance mystérieuse, l Éther, que beaucoup croyaient perdue depuis longtemps, Thor part délivrer son frère adoptif, Loki, dans sa prison d Asgard, car il a besoin de son aide. En effet, Malekith, un elfe noir jadis vaincu par Odin et les siens est de retour.',
        rate:'6.8/10'
        , id:'8'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BYzMyN2I0NjMtYmZhZS00MWJkLWE1MTktNGM2ZDhmNDE1ZDc0XkEyXkFqcGdeQXVyNDg2NzE0MjE@._V1_.jpg',
        title:'Captain America: The Winter Soldier',
        desc:'Steve Rogers, plus connu sous le nom de Captain America, s est adapté tant bien que mal à son nouvel environnement, et poursuit ses missions en tant qu agent du S.H.I.E.L.D., l agence militaire chargée d assurer l ordre international. Mais une organisation secrète aux desseins maléfiques a réussi à infiltrer le S.H.I.E.L.D. qu elle gangrène de l intérieur.',
        rate:'7.7/10'
        , id:'9'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg',
        title:'Guardians of the Galaxy',
        desc:'Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l univers tout entier. Lorsqu il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre extraterrestres disparates.',
        rate:'8/10'
        , id:'10'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
        title:'Avengers: Age of Ultron',
        desc:'Alors qu il tente de récupérer le sceptre de Loki avec l aide de ses camarades Avengers, Tony Stark découvre que Strucker avait mis au point une intelligence artificielle révolutionnaire, plus puissante encore que Jarvis. Strucker, mis hors d état de nuire, et le sceptre récupéré, Stark conçoit bien',
        rate:'7.3/10'
        , id:'11'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
        title:'Ant-Man',
        desc:'Doté d une capacité étonnante, celle de rétrécir considérablement sa taille tout en multipliant sa force, Scott Lang, voleur professionnel, doit accepter le héros qui sommeille en lui afin de venir en aide à son mentor, le docteur Hank Pym, et ainsi protéger les secrets technologiques que renferme son costume.',
        rate:'7.2/10'
        , id:'12'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg',
        title:'Captain America: Civil War',
        desc:'Steve Rogers est désormais à la tête des Avengers, dont la mission est de protéger l humanité. À la suite d une de leurs interventions qui a causé d importants dégâts collatéraux, le gouvernement décide de mettre en place un organisme de commandement et de supervision.',
        rate:'7.8/10'
        , id:'13'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg',
        title:'Doctor Strange',
        desc:'Doctor Strange suit l histoire du Docteur Stephen Strange, talentueux neurochirurgien qui, après un tragique accident de voiture, doit mettre son égo de côté et apprendre les secrets d un monde caché de mysticisme et de dimensions alternatives. Basé à New York, Doctor Strange doit jouer les',
        rate:'7.5/10'
        , id:'14'
    },
    {
        Image:'https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg',
        title:'Guardians of the Galaxy Vol. 2',
        desc:'Musicalement accompagné de la  Awesome Mixtape 2 , ce deuxième volet propose à nouveau les aventures de l équipe alors qu elle traverse les confins du cosmos. Les gardiens doivent combattre pour rester unis alors qu ils découvrent les mystères de la filiation de Peter Quill. Les vieux ennemis vont d',
        rate:'7.6/10'
        , id:'15'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_FMjpg_UX1000_.jpg',
        title:'Spider-Man: Homecoming',
        desc:'Après ses spectaculaires débuts avec les Avengers, le jeune Peter Parker découvre peu à peu sa nouvelle identité, celle de Spider-Man, le superhéros lanceur de toile. Galvanisé par ses expériences précédentes, Peter rentre chez lui auprès de sa tante May, sous l oeil attentif de son nouveau mentor, Tony Stark.',
        rate:'7.4/10'
        , id:'16'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
        title:'Thor: Ragnarok',
        desc:'Privé de son puissant marteau, Thor est retenu prisonnier sur une lointaine planète aux confins de l univers. Pour sauver Asgard, il va devoir lutter contre le temps afin d empêcher l impitoyable Hela d accomplir le Ragnarök, ou la destruction de son monde et la fin de la civilisation asgardienne.',
        rate:'7.9/10'
        , id:'17'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg',
        title:'Black Panther',
        desc:'Après les événements qui se sont déroulés dans Captain America : Civil War, T Challa revient chez lui prendre sa place sur le trône du Wakanda, une nation africaine technologiquement très avancée mais lorsqu un vieil ennemi resurgit, le courage de T Challa est mis à rude épreuve, aussi bien en tant',
        rate:'7.3/10'
        , id:'18'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
        title:'Avengers: Infinity War',
        desc:'Alors que les Avengers et leurs alliés ont continué de protéger le monde face à des menaces bien trop grandes pour être combattues par un héros seul, un nouveau danger est venu de l espace : Thanos. Despote craint dans tout l univers, Thanos a pour objectif de recueillir les six Pierres d Infinité,',
        rate:'8.4/10'
        , id:'19'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title:'Ant-Man and the Wasp',
        desc:'Après les événements survenus dans Captain America, Civil War, Scott Lang a bien du mal à concilier sa vie de super-héros et ses responsabilités de père. Cependant, ses réflexions sur les conséquences de ses choix tournent court lorsque Hope van Dyne et le Dr Hank Pym lui confient une nouvelle missi',
        rate:'7/10'
        , id:'20'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg',
        title:'Captain Marvel',
        desc:'Captain Marvel se bat dans le camp des Kree aux côtés de son maître, Yon-Rogg. Des images d un passé qu elle a oublié refont surface lorsqu elle se fait enlever par les Skrulls, qui tentent d extirper certaines informations de son cerveau. Après une bagarre, elle atterrit sur Terre.',
        rate:'6.8/10'
        , id:'21'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        title:'Avengers: Endgame',
        desc:'Le Titan Thanos, ayant réussi à s approprier les six Pierres d Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s échapper de la dimension subatomique où il était',
        rate:'8.4/10'
        , id:'22'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BODA5MTY0OWUtNjdlOC00NDI5LWE3NjYtNDM4MDI2MzE4OWUxXkEyXkFqcGdeQXVyOTAzODkzMjI@._V1_.jpg',
        title:'Spider-Man: Far From Home',
        desc:'L araignée sympa du quartier décide de rejoindre ses meilleurs amis Ned, MJ, et le reste de la bande pour des vacances en Europe. Cependant, le projet de Peter de laisser son costume de super-héros derrière lui pendant quelques semaines est rapidement compromis quand il accepte à contrecoeur d aider',
        rate:'7.4/10'
        , id:'23'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        title:'Black Widow',
        desc:'Lorsqu un complot dangereux en lien avec son passé ressurgit, Natasha Romanoff, alias Black Widow, doit y faire face.',
        rate:'6.7/10'
        , id:'24'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        title:'Shang-Chi and the Legend of the Ten Rings',
        desc:'Shang-Chi est le fils du chef d une puissante organisation criminelle. Le garçon a été élevé dès son plus jeune âge pour devenir un guerrier, mais il a décidé d abandonner cette voie et de s enfuir pour vivre une vie paisible. Mais tout change lorsqu il est attaqué par un groupe d assassins et qu il est obligé de faire face à son passé.',
        rate:'7.4/10'
        , id:'25'
    },
    {
        Image:'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16808607_v_v10_ag.jpg',
        title:'Eternals',
        desc:'Après les événements d "Avengers : Endgame", une tragédie imprévue oblige les Éternels à sortir de l ombre et à se rassembler à nouveau face à l ennemi le plus ancien de la race humaine : les Déviants.',
        rate:'6.3/10'
        , id:'26'
    },
    {
        Image:'https://www.francetvinfo.fr/pictures/fGHsrzcVfzYKBNQJ3LwTxXolmN8/fit-in/720x/2021/12/14/php3v7HEq.jpg',
        title:'Spider-Man: No Way Home',
        desc:'Avec l identité de Spiderman désormais révélée, celui-ci est démasqué et n est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d être un superhéros. Lorsque Peter demande de l aide au docteur Strange, les enjeux deviennent encore plus dangereux, l obligeant à découvrir ce que signifie vraiment être Spiderman.',
        rate:'8.2/10'
        , id:'27'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
        title:'Doctor Strange in the Multiverse of Madness',
        desc:'Le Docteur Stephen Strange continue ses recherches sur la Pierre du Temps. Cependant, un vieil ami devenu ennemi tente de détruire tous les sorciers de la Terre, ce qui perturbe le plan de Strange.',
        rate:'6.9/10'
        , id:'28'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        title:'Thor: Love and Thunder',
        desc:'Thor se lance dans un voyage différent de tout ce qu il a connu jusqu à présent : une quête de paix intérieure. Cependant, sa retraite est interrompue par Gorr le boucher des dieux, un tueur galactique qui cherche l extinction des dieux. Pour combattre la menace, Thor fait appel à l aide du roi Valk',
        rate:'6.2/10'
        , id:'29'
    },
    {
        Image:'https://m.media-amazon.com/images/I/71KTPoAOX0L._AC_UF894,1000_QL80_.jpg',
        title:'Ant-Man and the Wasp: Quantumania',
        desc:'Les super-héros et partenaires Scott Lang et Hope Van Dyne, alias Ant-Man et la Guêpe, vont vivre de nouvelles aventures. En compagnie de Hank Pym et Janet Van Dyne, les parents de Hope, le duo va explorer la dimension subatomique, interagir avec d étranges nouvelles créatures et se lancer dans une',
        rate:'6.1/10'
        , id:'30'
    },

]
export default movielist