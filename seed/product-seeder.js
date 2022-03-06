   const Product = require('../models/Product'); 
   const mongoose = require("mongoose");
   mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

   let products = [
       
    new product({
        title: "HOTTEST !!!" ,
        desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
        categories: ["hoodies", "sweatshirts", "joggers"],
        size: ["L", "XL", "XXL"],
        color: ["grey", "coffe-brown", "brown"],
        price: 20000,
        inStock: true,

   }),
   new product({
    title: "AMAZING OFFER!!!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,
}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

}),
new product({
    title: "HOTTEST DEAL!" ,
    desc: "Let your style do the talking this season!!! GET 40% FLAT OFF EACH NEW STOCK.",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F591941944773405174%2F&psig=AOvVaw3ZBikP0ZFFYYjtp1JNwM0C&ust=1646497856105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjYld_wrPYCFQAAAAAdAAAAABAF",
    categories: ["hoodies", "sweatshirts", "joggers"],
    size: ["L", "XL", "XXL"],
    color: ["grey", "coffe-brown", "brown"],
    price: 20000,
    inStock: true,

})
]

let done = 0;
for(let i = 0; i = products.length; i++){
    products[i].save((err, result)=>{
        done++ ;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}

    
    