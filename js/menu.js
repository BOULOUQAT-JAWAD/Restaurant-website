let menuItems = document.getElementById("menu-items");

let All = document.getElementById("All");
let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let drinks = document.getElementById("drinks");


if(menuItems) {
        function Breakfast() {
                for (let i = 1; i <= 4; i++) {
                        /*-single item*/
                        //article
                        let article = document.createElement('article');
                        article.setAttribute("id", "menu-item");

                        // img
                        let divImg = document.createElement("div");
                        divImg.setAttribute("class", "photo");
                        divImg.setAttribute("id","p"+i);
                        article.appendChild(divImg);

                        // div (item-info)
                        let div = document.createElement("div");
                        div.setAttribute("class", "item-info");
                        article.appendChild(div);

                        // Title and Price
                        let header = document.createElement("header");
                        let title = document.createElement("h4");
                        let price = document.createElement("h4");
                        price.setAttribute("id", "price");
                        if (i === 1) {
                                title.textContent = "Pancakes";
                                price.textContent = "$15";
                        } else if (i === 2) {
                                title.textContent = "oats";
                                price.textContent = "$10";
                        } else if (i === 3) {
                                title.textContent = "bread&eggs";
                                price.textContent = "$10";
                        } else if (i === 4) {
                                title.textContent = "bread&eggs";
                                price.textContent = "$8";
                        }
                        header.appendChild(title);
                        header.appendChild(price);
                        div.appendChild(header);

                        menuItems.appendChild(article);
                        /*-single item*/
                }

        }

        function Lunch() {
                for (let i = 5; i <= 8; i++) {
                        /*-single item*/
                        //article
                        let article = document.createElement('article');
                        article.setAttribute("id", "menu-item");

                        // img
                        let divImg = document.createElement("div");
                        divImg.setAttribute("class", "photo");
                        divImg.setAttribute("id", "p" + i);
                        article.appendChild(divImg);

                        // div (item-info)
                        let div = document.createElement("div");
                        div.setAttribute("class", "item-info");
                        article.appendChild(div);

                        // Title and Price
                        let header = document.createElement("header");
                        let title = document.createElement("h4");
                        let price = document.createElement("h4");
                        price.setAttribute("id", "price");
                        if (i === 5) {
                                title.textContent = "Burger";
                                price.textContent = "$10";
                        } else if (i === 6) {
                                title.textContent = "Sandwich";
                                price.textContent = "$8";
                        } else if (i === 7) {
                                title.textContent = "Spaghetti";
                                price.textContent = "$15";
                        } else if (i === 8) {
                                title.textContent = "Salad";
                                price.textContent = "$12";
                        }
                        header.appendChild(title);
                        header.appendChild(price);
                        div.appendChild(header);

                        menuItems.appendChild(article);
                        /*-single item*/
                }
        }
        function Dinner() {
                for (let i = 9; i <= 12; i++) {
                        /*-single item*/
                        //article
                        let article = document.createElement('article');
                        article.setAttribute("id", "menu-item");

                        // img
                        let divImg = document.createElement("div");
                        divImg.setAttribute("class", "photo");
                        divImg.setAttribute("id","p"+i);
                        article.appendChild(divImg);

                        // div (item-info)
                        let div = document.createElement("div");
                        div.setAttribute("class", "item-info");
                        article.appendChild(div);

                        // Title and Price
                        let header = document.createElement("header");
                        let title = document.createElement("h4");
                        let price = document.createElement("h4");
                        price.setAttribute("id", "price");
                        if (i === 9) {
                                title.textContent = "Plat";
                                price.textContent = "$20";
                        } else if (i === 10) {
                                title.textContent = "spaghetti";
                                price.textContent = "$18";
                        } else if (i === 11) {
                                title.textContent = "Soup";
                                price.textContent = "$10";
                        } else if (i === 12) {
                                title.textContent = "Salad";
                                price.textContent = "$12";
                        }
                        header.appendChild(title);
                        header.appendChild(price);
                        div.appendChild(header);

                        menuItems.appendChild(article);
                        /*-single item*/
                }

        }

        function Drinks() {
                for (let i = 13; i <= 17; i++) {
                        /*-single item*/
                        //article
                        let article = document.createElement('article');
                        article.setAttribute("id", "menu-item");

                        // img
                        let divImg = document.createElement("div");
                        divImg.setAttribute("class", "photo");
                        divImg.setAttribute("id","p"+i);
                        article.appendChild(divImg);

                        // div (item-info)
                        let div = document.createElement("div");
                        div.setAttribute("class", "item-info");
                        article.appendChild(div);

                        // Title and Price
                        let header = document.createElement("header");
                        let title = document.createElement("h4");
                        let price = document.createElement("h4");
                        price.setAttribute("id", "price");
                        if (i === 13) {
                                title.textContent = "Cappuccino";
                                price.textContent = "$5";
                        } else if (i === 14) {
                                title.textContent = "coffee&milk";
                                price.textContent = "$5";
                        } else if (i === 15) {
                                title.textContent = "Ice coffee";
                                price.textContent = "$7";
                        } else if (i === 16) {
                                title.textContent = "orange";
                                price.textContent = "$10";
                        } else if (i === 17) {
                                title.textContent = "Strawberry";
                                price.textContent = "$10";
                        }
                        header.appendChild(title);
                        header.appendChild(price);
                        div.appendChild(header);

                        menuItems.appendChild(article);
                        /*-single item*/
                }

        }

        Breakfast();
        Lunch();
        Dinner();
        Drinks();

        let itemNumber = 17 ;
        All.onclick = function () {
                for(let i = 0 ; i < itemNumber ;i++){
                        document.querySelector('#menu-item').remove();
                }
                Breakfast();
                Lunch();
                Dinner();
                Drinks();
                itemNumber = 17 ;
        }
        breakfast.onclick = function () {
                for(let i = 0 ; i < itemNumber ;i++){
                        document.querySelector('#menu-item').remove();
                }
                Breakfast();
                itemNumber = 4 ;
        }
        lunch.onclick = function () {
                for(let i = 0 ; i < itemNumber ;i++){
                        document.querySelector('#menu-item').remove();
                }
                Lunch();
                itemNumber = 4 ;
        }
        dinner.onclick = function () {
                for(let i = 0 ; i < itemNumber ;i++){
                        document.querySelector('#menu-item').remove();
                }
                Dinner();
                itemNumber = 4 ;
        }
        drinks.onclick = function () {
                for(let i = 0 ; i < itemNumber ;i++){
                        document.querySelector('#menu-item').remove();
                }
                Drinks();
                itemNumber = 5;
        }
}

