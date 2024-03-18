const Serielist = [
    {
        Image:'https://fr.web.img4.acsta.net/pictures/21/02/01/16/54/3730739.jpg',
        title:'WandaVision',
        desc:'Wanda Maximoff, alias la Sorcière Rouge, et Vision sont des super-héros, qui coulent des jours paisibles dans une banlieue parfaite, jusqu au jour où Vision commence à soupçonner que tout n est peut-être pas ce qu il y paraît.',
        rate:'7.9/10' , id:'1'
        
    },
    {
        Image:'https://fr.web.img6.acsta.net/pictures/21/02/08/11/16/4714705.jpg',
        title:'Falcon et le Soldat de l hiver',
        desc:'Six mois après la fin des évènements liés à ThanosN 2,1, Bucky Barnes fait équipe avec Sam Wilson. Les deux hommes vont se lancer dans une aventure planétaire et vont devoir faire face aux Flag-Smashers.',
        rate:'6.6/10'
        , id:'2'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BM2FlYzVmNWQtNzE4ZS00OTMwLTlhYTUtZDY0YTEyZTRlZDlkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
        title:'Secret Invasion',
        desc:'Lorsqu il apprend l existence d une invasion clandestine de la Terre par une faction de Skrulls métamorphes, Nick Fury rejoint ses alliés. Leur objectif est de contrecarrer cet envahissement et sauver l humanité. ',
        rate:'6.9/10'
        , id:'3'  
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjU4MTkxNzktNzUyYy00NDM2LWE5NGQtNjJlN2Q0N2MxZDAxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        title:'She-Hulk',
        desc:'Les aventures de l avocate Jennifer Walters, cousine de Bruce Banner, qui hérite de ses pouvoirs et devient Miss Hulk à la suite d une transfusion sanguine reçue après une blessure par balle..',
        rate:'4/10'
        , id:'4'
    },
    {
        Image:'https://cdn.marvel.com/content/2x/whatif_lob_crd_01.jpg',
        title:'What If...?',
        desc:' Une série d animation fascinante qui, en changeant des événements clés des films de l Univers cinématographique Marvel, ouvre une myriade de possibilités.',
        rate:'6.9/10'
        , id:'5'
    },
    
    {
        Image:'https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_.jpg',
        title:'Daredevil',
        desc:'Avocat luttant contre l injustice et aveugle depuis l enfance, Matt Murdock fait place au super-héros Daredevil lorsque la nuit tombe sur les rues de New York..',
        rate:'8/10'
        , id:'6'
    },
    
    {
        Image:'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg',
        title:'The Punisher',
        desc:'Après le massacre de toute sa famille, un ex-agent d élite du FBI, que l on disait mort dans le carnage, se lance dans une impitoyable vendetta. Seule la mort de ses ennemis pourra l arrêter.',
        rate:'7.1/10'
        , id:'7'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_.jpg',
        title:'Iron Fist',
        desc:'Après avoir disparu quelques années, Danny Rand revient à New York pour combattre les criminels qui en ont fait une ville corrompue, grâce à ses connaissances en kung-fu et la puissance destructrice de son poing..',
        rate:'6.8/10'
        , id:'8'
    },
    {
        Image:'https://fr.web.img3.acsta.net/pictures/21/03/01/16/51/5679585.jpg',
        title:'Marvel : Les Agents du SHIELD',
        desc:'Après de longs mois de repos à la suite de sa blessure infligée par le légendaire dieu Loki pendant l invasion de New York, l agent Phil Coulson réintègre le SHIELD, une organisation internationale qui enquête sur les phénomènes paranormaux..',
        rate:'7.7/10'
        , id:'9'
    },
    {
        Image:'https://fr.web.img4.acsta.net/pictures/19/06/18/12/07/2217403.jpg',
        title:'Jessica Jones',
        desc:'Hantée par un passé traumatisant, la détective privée Jessica Jones cherche celui qui la persécute avant qu il ne trouve quelqu un d autre à torturer à Hell s Kitchen.',
        rate:'8/10'
        , id:'10'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg',
        title:'Moon Knight',
        desc:'Marc Spector a grandi en ayant pour but de devenir boxeur et militaire. Laissé pour mort après une mission en Égypte, il est conduit dans le temple de Khonsu, Dieu de la Lune, et accepte de devenir son avatar sur Terre : Moon Knight.',
        rate:'9/10'
        , id:'11'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BNTY1ZDQzNzQtZGM1Yy00YjRhLTliYmMtOGM2OWFlYTRjOTc2XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg',
        title:'Loki', 
        desc:'Dans une réalité alternative, Loki s est échappé avec le Tesseract. Après son évasion, il est emmené auprès du Tribunal des Variations Anachroniques, un organisme qui agit pour arrêter toute personne qui tenterait d altérer léternel flux temporel.',
        rate:'8.2/10'
        , id:'12'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMGQ1OWNlY2QtMGY1NC00ZDkxLWJhZTktMzg5Mzk5YWY1YzA1XkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_.jpg',
        title:'Hawkeye',
        desc:'Le super-héros Clint Barton et son successeur Kate Bishop combattent le mal. Cependant, lorsque les rôles sont soudainement inversés, ils doivent éviter à tout prix de devenir eux-mêmes des cibles.',
        rate:'7.8/10'
        , id:'13'
    },
    {
        Image:'https://images.ladepeche.fr/api/v1/images/view/5c18c6143e45466d1862f167/full/image.jpg',
        title:'Wolverine',
        desc:'Wolverine se rend au Japon pour éviter que sa petite amie Mariko ne soit forcée d épouser un des associés de son père, Shingen. Il reçoit de l aide de Yukio dans la lutte contre le syndicat criminel et se retrouve pris dans un réseau de corruption.',
        rate:'7.5/10'
        , id:'14'
    },
    {
        Image:'https://m.media-amazon.com/images/M/MV5BMTUwMjA5NTg4MF5BMl5BanBnXkFtZTgwODUyODkwMzI@._V1_.jpg',
        title:'The Defenders',
        desc:'Un ninja aveugle. Une détective impertinente. Un ancien détenu résistant aux balles. Un milliardaire amateur de kung-fu. Ces quatre super-héros solitaires combattent ensemble un groupe de criminels menaçant de détruire la ville de New-York.',
        rate:'7.6/10'
        , id:'15'
    },
    {
        Image:'https://fr.web.img4.acsta.net/c_310_420/pictures/14/12/18/15/16/182414.jpg',
        title:'Agent Carter',
        desc:'En 1946, Peggy Carter vient de perdre l amour de sa vie : Steve Rogers, également connu sous le nom de  Captain America . Elle veut à présent retourner sur le terrain et combattre le crime.',
        rate:'7.4/10'
        , id:'16'
    }

]
export default Serielist