var database = [
    {
        name:"Alpha",
        pass:"alpha"
    },
    {
        name:"Bravo",
        pass:"bravo"
    },
    {
        name:"Charlie",
        pass:"charlie"
    }
];

var NewsFeed = [
    {
        name:"Alpha",
        timeLine:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ex. Ex odit alias dignissimos officia nam accusamus, saepe ratione a. Consequatur eius ipsa praesentium dolores minima soluta, quis tenetur voluptate?"
    },
    {
        name:"Bravo",
        timeLine:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ex. Ex odit alias dignissimos officia nam accusamus, saepe ratione a. Consequatur eius ipsa praesentium dolores minima soluta, quis tenetur voluptate?"
    },
    {
        name:"Charlie",
        timeLine:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ex. Ex odit alias dignissimos officia nam accusamus, saepe ratione a. Consequatur eius ipsa praesentium dolores minima soluta, quis tenetur voluptate?"
    }
];

for(var i=0; i < database.length; i++){
    alert(database[i].name);
    alert(NewsFeed[i].name +"\nTime Line : "+ NewsFeed[i].timeLine);
}