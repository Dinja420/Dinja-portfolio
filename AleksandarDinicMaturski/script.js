const champions = [
    {
        name: "Aatrox",
        lanes: ["Top"],
        resource: "Blood Well",
        gender: "Male",
        region: "Runeterra",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2013
    },
    {
        name: "Ahri",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Mage", "Assassin"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Akali",
        lanes: ["Mid", "Top"],
        resource: "Energy",
        gender: "Female",
        region: "Ionia",
        types: ["Assassin"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Akshan",
        lanes: ["Mid", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2021
    },
    {
        name: "Alistar",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Tank", "Support"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Amumu",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Tank", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Anivia",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Freljord",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Annie",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Runeterra",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Aphelios",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Targon",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2019
    },
    {
        name: "Ashe",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Freljord",
        types: ["Marksman", "Support"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "AurelionSol",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2016
    },
    {
        name: "Azir",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Mage", "Marksman"],
        range: "Ranged",
        releaseDate: 2014
    },
    {
        name: "Bard",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2015
    },
    {
        name: "Bel'Veth",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Void",
        types: ["Fighter"],
        range: "Melee",
        releaseDate: 2022
    },
    {
        name: "Blitzcrank",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Other",
        region: "Zaun",
        types: ["Tank", "Support"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Brand",
        lanes: ["Support", "Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Braum",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Support", "Tank"],
        range: "Melee",
        releaseDate: 2014
    },
    {
        name: "Caitlyn",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Piltover",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Camille",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Piltover",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2016
    },
    {
        name: "Cassiopeia",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Noxus",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Cho'Gath",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Tank", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Corki",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Bandle City",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Darius",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Diana",
        lanes: ["Jungle", "Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Targon",
        types: ["Fighter", "Mage"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Dr. Mundo",
        lanes: ["Top"],
        resource: "Health",
        gender: "Male",
        region: "Zaun",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Draven",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Ekko",
        lanes: ["Mid", "Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2015
    },
    {
        name: "Elise",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Shadow Isles",
        types: ["Mage", "Fighter"],
        range: "Melee/Ranged",
        releaseDate: 2012
    },
    {
        name: "Evelynn",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Runeterra",
        types: ["Assassin", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Ezreal",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Piltover",
        types: ["Marksman", "Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Fiddlesticks",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Other",
        region: "Runeterra",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Fiora",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Fizz",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Galio",
        lanes: ["Mid", "Support"],
        resource: "Mana",
        gender: "Male",
        region: "Demacia",
        types: ["Tank", "Mage"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Gangplank",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Garen",
        lanes: ["Top"],
        resource: "None",
        gender: "Male",
        region: "Demacia",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Gnar",
        lanes: ["Top"],
        resource: "Rage",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Tank"],
        range: "Melee/Ranged",
        releaseDate: 2014
    },
    {
        name: "Gragas",
        lanes: ["Jungle", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Mage"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Graves",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Gwen",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Shadow Isles",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2021
    },
    {
        name: "Hecarim",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Heimerdinger",
        lanes: ["Mid", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Piltover",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Illaoi",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Bilgewater",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2015
    },
    {
        name: "Irelia",
        lanes: ["Top", "Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Ivern",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2016
    },
    {
        name: "Janna",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Zaun",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Jarvan IV",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Demacia",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Jax",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Jayce",
        lanes: ["Top", "Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Piltover",
        types: ["Fighter", "Marksman"],
        range: "Melee/Ranged",
        releaseDate: 2012
    },
    {
        name: "Jhin",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2016
    },
    {
        name: "Jinx",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Zaun",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2013
    },
    {
        name: "Kai'Sa",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Void",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2018
    },
    {
        name: "Kalista",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Shadow Isles",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2014
    },
    {
        name: "Karma",
        lanes: ["Support", "Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Karthus",
        lanes: ["Jungle", "Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Kassadin",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Assassin", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Katarina",
        lanes: ["Mid"],
        resource: "None",
        gender: "Female",
        region: "Noxus",
        types: ["Assassin", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Kayle",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Fighter", "Support"],
        range: "Melee/Ranged",
        releaseDate: 2009
    },
    {
        name: "Kayn",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2017
    },
    {
        name: "Kennen",
        lanes: ["Top", "Mid"],
        resource: "Energy",
        gender: "Male",
        region: "Ionia",
        types: ["Mage", "Marksman"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Kha'Zix",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Assassin"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Kindred",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Other",
        region: "Runeterra",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2015
    },
    {
        name: "Kled",
        lanes: ["Top"],
        resource: "Courage",
        gender: "Male",
        region: "Noxus",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2016
    },
    {
        name: "Kog'Maw",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Marksman", "Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "LeBlanc",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Noxus",
        types: ["Assassin", "Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Lee Sin",
        lanes: ["Jungle"],
        resource: "Energy",
        gender: "Male",
        region: "Ionia",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Leona",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Targon",
        types: ["Tank", "Support"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Lillia",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Fighter", "Mage"],
        range: "Ranged",
        releaseDate: 2020
    },
    {
        name: "Lissandra",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Freljord",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2013
    },
    {
        name: "Lucian",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Demacia",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2013
    },
    {
        name: "Lulu",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Bandle City",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Lux",
        lanes: ["Support", "Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Malphite",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Ixtal",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Malzahar",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Mage", "Assassin"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Maokai",
        lanes: ["Support", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Tank", "Mage"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "MasterYi",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Miss Fortune",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Bilgewater",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Mordekaiser",
        lanes: ["Top"],
        resource: "Shield",
        gender: "Male",
        region: "Noxus",
        types: ["Fighter", "Mage"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Morgana",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Nami",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Runeterra",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Nasus",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Nautilus",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Tank", "Support"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Neeko",
        lanes: ["Mid", "Support"],
        resource: "Mana",
        gender: "Female",
        region: "Ixtal",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2018
    },
    {
        name: "Nidalee",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Ixtal",
        types: ["Assassin", "Mage"],
        range: "Melee/Ranged",
        releaseDate: 2009
    },
    {
        name: "Nocturne",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Nunu & Willump",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Tank", "Mage"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Olaf",
        lanes: ["Jungle", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Orianna",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Piltover",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Ornn",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2017
    },
    {
        name: "Pantheon",
        lanes: ["Top", "Support"],
        resource: "Mana",
        gender: "Male",
        region: "Targon",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Poppy",
        lanes: ["Top", "Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Pyke",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Support", "Assassin"],
        range: "Melee",
        releaseDate: 2018
    },
    {
        name: "Qiyana",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Ixtal",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2019
    },
    {
        name: "Quinn",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2013
    },
    {
        name: "Rakan",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Support"],
        range: "Ranged",
        releaseDate: 2017
    },
    {
        name: "Rammus",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Tank"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Rek'Sai",
        lanes: ["Jungle"],
        resource: "Rage",
        gender: "Female",
        region: "Void",
        types: ["Fighter"],
        range: "Melee",
        releaseDate: 2014
    },
    {
        name: "Rell",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Noxus",
        types: ["Tank", "Support"],
        range: "Melee",
        releaseDate: 2020
    },
    {
        name: "Renekton",
        lanes: ["Top"],
        resource: "Fury",
        gender: "Male",
        region: "Shurima",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Rengar",
        lanes: ["Jungle", "Top"],
        resource: "Ferocity",
        gender: "Male",
        region: "Ixtal",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Riven",
        lanes: ["Top"],
        resource: "None",
        gender: "Female",
        region: "Noxus",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Rumble",
        lanes: ["Top", "Mid"],
        resource: "Heat",
        gender: "Male",
        region: "Bandle City",
        types: ["Fighter", "Mage"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Ryze",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Mage", "Fighter"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Samira",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Noxus",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2020
    },
    {
        name: "Sejuani",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Freljord",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Senna",
        lanes: ["Support", "Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Shadow Isles",
        types: ["Marksman", "Support"],
        range: "Ranged",
        releaseDate: 2019
    },
    {
        name: "Seraphine",
        lanes: ["Support", "Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Piltover",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2020
    },
    {
        name: "Sett",
        lanes: ["Top"],
        resource: "Grit",
        gender: "Male",
        region: "Ionia",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2020
    },
    {
        name: "Shaco",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Assassin"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Shen",
        lanes: ["Top", "Support"],
        resource: "Energy",
        gender: "Male",
        region: "Ionia",
        types: ["Tank"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Shyvana",
        lanes: ["Jungle"],
        resource: "Fury",
        gender: "Female",
        region: "Demacia",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Singed",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Sion",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Sivir",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Shurima",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Skarner",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Sona",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Soraka",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Targon",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Swain",
        lanes: ["Mid", "Support"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Mage", "Fighter"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Sylas",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Demacia",
        types: ["Mage", "Assassin"],
        range: "Melee",
        releaseDate: 2019
    },
    {
        name: "Syndra",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Tahm Kench",
        lanes: ["Support", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Support", "Tank"],
        range: "Melee",
        releaseDate: 2015
    },
    {
        name: "Taliyah",
        lanes: ["Mid", "Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Shurima",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2016
    },
    {
        name: "Talon",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Assassin"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Taric",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Targon",
        types: ["Support", "Fighter"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Teemo",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Bandle City",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Thresh",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Support", "Tank"],
        range: "Ranged",
        releaseDate: 2013
    },
    {
        name: "Tristana",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Bandle City",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Trundle",
        lanes: ["Top", "Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Tryndamere",
        lanes: ["Top"],
        resource: "Fury",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Twisted Fate",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Bilgewater",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Twitch",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Udyr",
        lanes: ["Jungle", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Urgot",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Fighter", "Tank"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Varus",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Marksman", "Mage"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Vayne",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Demacia",
        types: ["Marksman", "Assassin"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Veigar",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Bandle City",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
        name: "Vel'Koz",
        lanes: ["Mid", "Support"],
        resource: "Mana",
        gender: "Male",
        region: "Void",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2014
    },
    {
        name: "Vex",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Bandle City",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2021
    },
    {
        name: "Vi",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Piltover",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Viego",
        lanes: ["Jungle"],
        resource: "None",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2021
    },
    {
        name: "Viktor",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Vladimir",
        lanes: ["Mid", "Top"],
        resource: "Bloodthirst",
        gender: "Male",
        region: "Noxus",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2010
    },
    {
        name: "Volibear",
        lanes: ["Top", "Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Freljord",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Warwick",
        lanes: ["Jungle", "Top"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2009
    },
    {
        name: "Wukong",
        lanes: ["Top", "Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Xayah",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Ionia",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2017
    },
    {
        name: "Xerath",
        lanes: ["Mid", "Support"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2011
    },
    {
        name: "Xin Zhao",
        lanes: ["Jungle"],
        resource: "Mana",
        gender: "Male",
        region: "Demacia",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2010
    },
    {
        name: "Yasuo",
        lanes: ["Mid", "Top"],
        resource: "Flow",
        gender: "Male",
        region: "Ionia",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2013
    },
    {
        name: "Yone",
        lanes: ["Mid", "Top"],
        resource: "Flow",
        gender: "Male",
        region: "Ionia",
        types: ["Assassin", "Fighter"],
        range: "Melee",
        releaseDate: 2020
    },
    {
        name: "Yorick",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Shadow Isles",
        types: ["Fighter", "Tank"],
        range: "Melee",
        releaseDate: 2011
    },
    {
        name: "Yuumi",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Bandle City",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2019
    },
    {
        name: "Zac",
        lanes: ["Jungle"],
        resource: "None",
        gender: "Male",
        region: "Zaun",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2013
    },
    {
        name: "Zed",
        lanes: ["Mid"],
        resource: "Energy",
        gender: "Male",
        region: "Ionia",
        types: ["Assassin"],
        range: "Melee",
        releaseDate: 2012
    },
    {
        name: "Zeri",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Zaun",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2022
    },
    {
        name: "Ziggs",
        lanes: ["Mid", "Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Zaun",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "Zilean",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Male",
        region: "Runeterra",
        types: ["Support", "Mage"],
        range: "Ranged",
        releaseDate: 2009
    },
    {
    
        name: "Zoe",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Targon",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2017
    },
    {
        name: "Zyra",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Ixtal",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2012
    },
    {
        name: "RenataGlasc",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Zaun",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2022
    },
    {
        name: "Nilah",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Female",
        region: "Bilgewater",
        types: ["Marksman"],
        range: "Melee",
        releaseDate: 2022
    },
    {
        name: "Ksante",
        lanes: ["Top"],
        resource: "Mana",
        gender: "Male",
        region: "Shurima",
        types: ["Tank", "Fighter"],
        range: "Melee",
        releaseDate: 2022
    },
    {
        name: "Milio",
        lanes: ["Support"],
        resource: "Mana",
        gender: "Female",
        region: "Ixtal",
        types: ["Support"],
        range: "Ranged",
        releaseDate: 2023
    },
    {
        name: "Naafiri",
        lanes: ["Mid", "Jungle"],
        resource: "Mana",
        gender: "Female",
        region: "Shurima",
        types: ["Fighter", "Assassin"],
        range: "Melee",
        releaseDate: 2023
    },
    {
        name: "Briar",   
        lanes: ["Jungle"],
        resource: "Health",
        gender: "Female",
        region: "Noxus",
        types: ["Fighter"],
        range: "Melee",
        releaseDate: 2023
    },
    {
        name: "Hwei",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Male",
        region: "Ionia",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2023
    },
    {
        name: "Smolder",
        lanes: ["Bottom"],
        resource: "Mana",
        gender: "Male",
        region: "Noxus",
        types: ["Marksman"],
        range: "Ranged",
        releaseDate: 2024
    },
    {
        name: "Aurora",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Freljord",
        types: ["Mage"],
        range: "Ranged",
        releaseDate: 2024
    },
    {
        name: "Ambessa",
        lanes: ["Top"],
        resource: "Energy",
        gender: "Female",
        region: "Noxus",
        types: ["Fighter"],
        range: "Melee",
        releaseDate: 2024
    },
    {
        name: "Mel",
        lanes: ["Mid"],
        resource: "Mana",
        gender: "Female",
        region: "Noxus",
        types: ["Mage", "Support"],
        range: "Ranged",
        releaseDate: 2025
    },

];
let targetChampion;
let attempts;
let guessedAttributes;

const elements = {
    guessInput: document.getElementById('guess-input'),
    guessButton: document.getElementById('guess-button'),
    restartButton: document.getElementById('restart-button'),
    guessResults: document.getElementById('guess-results'),
    historyContainer: document.getElementById('history'),
    laneValues: document.getElementById('lane-values'),
    resourceValues: document.getElementById('resource-values'),
    genderValues: document.getElementById('gender-values'),
    regionValues: document.getElementById('region-values'),
    typeValues: document.getElementById('type-values'),
    rangeValues: document.getElementById('range-values'),
    dateValues: document.getElementById('date-values')
};

const championImages = {};
champions.forEach(champ => {
    const imageName = champ.name.toLowerCase()
        .replace(/'/g, '')
        .replace(/ /g, '_')
        .replace(/\./g, '') + '.jpg';
    championImages[champ.name] = `slike/${imageName}`;
});

function initGame() {
    targetChampion = champions[Math.floor(Math.random() * champions.length)];
    attempts = 0;
    guessedAttributes = {
        lanes: new Set(),
        resource: new Set(),
        gender: new Set(),
        region: new Set(),
        types: new Set(),
        range: new Set(),
        releaseDate: new Set()
    };
    elements.guessResults.innerHTML = '';
    elements.historyContainer.innerHTML = '';
    elements.guessInput.value = '';
    elements.guessInput.disabled = false;
    elements.guessButton.disabled = false;
    elements.guessInput.focus();
    initializeAttributeValues();
    console.log("Target champion:", targetChampion.name);
}

function initializeAttributeValues() {
    const allLanes = new Set();
    const allResources = new Set();
    const allGenders = new Set();
    const allRegions = new Set();
    const allTypes = new Set();
    const allRanges = new Set();
    const allDates = new Set();

    champions.forEach(champ => {
        champ.lanes.forEach(lane => allLanes.add(lane));
        allResources.add(champ.resource);
        allGenders.add(champ.gender);
        allRegions.add(champ.region);
        champ.types.forEach(type => allTypes.add(type));
        allRanges.add(champ.range);
        allDates.add(champ.releaseDate);
    });

    displayAttributeValues(Array.from(allLanes), elements.laneValues);
    displayAttributeValues(Array.from(allResources), elements.resourceValues);
    displayAttributeValues(Array.from(allGenders), elements.genderValues);
    displayAttributeValues(Array.from(allRegions), elements.regionValues);
    displayAttributeValues(Array.from(allTypes), elements.typeValues);
    displayAttributeValues(Array.from(allRanges), elements.rangeValues);
    displayAttributeValues(Array.from(allDates), elements.dateValues);
}

function displayAttributeValues(values, container) {
    container.innerHTML = '';
    values.sort().forEach(value => {
        const span = document.createElement('span');
        span.className = 'attribute-value';
        span.textContent = value;
        container.appendChild(span);
    });
}

function checkGuess() {
    const guess = elements.guessInput.value.trim();
    
    if (!guess) {
        showToast('Unesite ime heroja!', 'error');
        return;
    }

    const foundChampion = champions.find(c => c.name.toLowerCase() === guess.toLowerCase());
    
    if (!foundChampion) {
        showToast('Heroj ne postoji u bazi!', 'error');
        elements.guessInput.value = '';
        return;
    }

    attempts++;
    addHistoryItem(foundChampion.name);
    
    if (foundChampion.name === targetChampion.name) {
        setTimeout(() => {
            showToast(`Čestitamo! Pogodili ste heroja ${targetChampion.name} u ${attempts} pokušaja!`, 'success', 5000);
            triggerConfetti(); // ← Dodato!
        }, 300);
        elements.guessInput.disabled = true;
        elements.guessButton.disabled = true;
    }

    updateAttributeDisplay(foundChampion);
    addGuessResult(foundChampion.name);

    elements.guessInput.value = '';
}

function showToast(message, type, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

function addGuessResult(name) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'champion-guess';

    const img = document.createElement('img');
    img.src = championImages[name];
    img.alt = name;
    img.className = 'champion-image';
    resultDiv.appendChild(img);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'champion-name';

    for (let i = 0; i < name.length; i++) {
        const letterDiv = document.createElement('span');
        letterDiv.className = 'letter';
        letterDiv.textContent = name[i].toUpperCase();

        if (i < targetChampion.name.length && name[i].toLowerCase() === targetChampion.name[i].toLowerCase()) {
    letterDiv.classList.add('correct');
        }
        else 
        {
    letterDiv.classList.add('absent');
        }

        nameDiv.appendChild(letterDiv);
        }

    resultDiv.appendChild(nameDiv);
    elements.guessResults.appendChild(resultDiv);
}

function addHistoryItem(championName) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';

    const attemptNumber = document.createElement('span');
    attemptNumber.textContent = `${attempts}.`;

    const championImg = document.createElement('img');
    championImg.src = championImages[championName];
    championImg.alt = championName;
    championImg.className = 'history-image';

    const championNameSpan = document.createElement('span');
    championNameSpan.textContent = championName;

    historyItem.appendChild(attemptNumber);
    historyItem.appendChild(championImg);
    historyItem.appendChild(championNameSpan);
    elements.historyContainer.appendChild(historyItem);

    elements.historyContainer.scrollTop = elements.historyContainer.scrollHeight;
}

function updateAttributeDisplay(champion) {
    champion.lanes.forEach(lane => {
        guessedAttributes.lanes.add(lane);
        highlightAttributeValue(elements.laneValues, lane, targetChampion.lanes.includes(lane));
    });

    const attributes = [
        { key: 'resource', element: elements.resourceValues },
        { key: 'gender', element: elements.genderValues },
        { key: 'region', element: elements.regionValues },
        { key: 'range', element: elements.rangeValues },
        { key: 'releaseDate', element: elements.dateValues }
    ];

    attributes.forEach(attr => {
        guessedAttributes[attr.key].add(champion[attr.key]);
        highlightAttributeValue(attr.element, champion[attr.key], champion[attr.key] === targetChampion[attr.key]);
    });

    champion.types.forEach(type => {
        guessedAttributes.types.add(type);
        highlightAttributeValue(elements.typeValues, type, targetChampion.types.includes(type));
    });
}

function highlightAttributeValue(container, value, isCorrect) {
    const values = container.getElementsByClassName('attribute-value');

    for (let i = 0; i < values.length; i++) {
        if (values[i].textContent == value) {
            values[i].classList.toggle('correct-attribute', isCorrect);
            values[i].classList.toggle('wrong-attribute', !isCorrect);
            break;
        }
    }
}

elements.guessButton.addEventListener('click', checkGuess);
elements.guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});
elements.restartButton.addEventListener('click', () => {
    document.getElementById('new-game-popup').style.display = 'flex';
});
document.getElementById("show-answer-button").addEventListener("click", () => {
    showToast(`Tačan odgovor je: ${targetChampion.name}`, 'warning', 4000);
    addGuessResult(targetChampion.name);
    elements.guessInput.disabled = true;
    elements.guessButton.disabled = true;
});

function showAutocompleteSuggestions(input) {
    const autocompleteList = document.getElementById("autocomplete-list");
    autocompleteList.innerHTML = "";

    if (input.length < 1) {
        autocompleteList.style.display = "none";
        return;
    }

    const suggestions = champions.filter(champ =>
        champ.name.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 10);

    if (suggestions.length > 0) {
        suggestions.forEach(champ => {
            const suggestion = document.createElement("div");
            suggestion.innerHTML = `<strong>${champ.name}</strong>`;
            suggestion.addEventListener("click", function() {
                elements.guessInput.value = champ.name;
                autocompleteList.style.display = "none";
                elements.guessInput.focus();
            });
            autocompleteList.appendChild(suggestion);
        });
        autocompleteList.style.display = "block";
    } else {
        autocompleteList.style.display = "none";
    }
}

function handleAutocompleteKeyDown(e) {
    const autocompleteList = document.getElementById("autocomplete-list");
    let items = autocompleteList.getElementsByTagName("div");

    if (e.keyCode === 40) {
        e.preventDefault();
        if (currentFocus >= items.length - 1) currentFocus = 0;
        else currentFocus++;
        addActive(items);
    } else if (e.keyCode === 38) {
        e.preventDefault();
        if (currentFocus <= 0) currentFocus = items.length - 1;
        else currentFocus--;
        addActive(items);
    } else if (e.keyCode === 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            if (items) items[currentFocus].click();
        }
    }
}

function addActive(items) {
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
}

function removeActive(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("autocomplete-active");
    }
}

let currentFocus = -1;
elements.guessInput.addEventListener("input", function() {
    currentFocus = -1;
    showAutocompleteSuggestions(this.value);
});
elements.guessInput.addEventListener("keydown", handleAutocompleteKeyDown);
document.addEventListener("click", function(e) {
    if (e.target.id !== "guess-input") {
        document.getElementById("autocomplete-list").style.display = "none";
    }
});

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7858d7', '#4a3a8a', '#ff4757', '#2ed573', '#ffa502']
    });
}
document.getElementById('popup-yes').addEventListener('click', () => {
    document.getElementById('new-game-popup').style.display = 'none';
    initGame();
});

document.getElementById('popup-no').addEventListener('click', () => {
    document.getElementById('new-game-popup').style.display = 'none';
});
initGame();