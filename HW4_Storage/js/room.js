var room = [
    {
        id:"R1",
        name:"Deluxe Room Ocean View",
        img : "Deluxe___Twin_1.jpg",
        type : "Phong doi",
        price:3000000,
        description: "Phòng Deluxe có diện tích 70m2 cùng tầm nhìn vô cực ra biển. Được trang bị 2 loại giường là một giường lớn hoặc 2 giường nhỏ",
    },
    {
        id:"R2",
        name:"Premium Deluxe Room Ocean View",
        img : "premium deluxe room.jpg",
        type : "Phong doi",
        price:4000000,
        description: "Là phiên bản nâng cấp của Deluxe với diện tích rộng rãi hơn, lên đến 85m2, phòng Premium Deluxe mở ra không gian thoáng đãng, thu gọn trong tầm mắt",
    },
    {
        id:"R3",
        name:"Family Room Ocean View",
        img : "family_room.jpg",
        type : "Phong doi",
        price:3500000,
        description: "Với diện tích 70m2, phòng Family với tầm nhìn trực diện biển là lựa chọn tuyệt vời cho gia đình 04 người hoặc nhóm bạn khi đi du lịch. ",
    },
    {
        id:"R4",
        name:"Premium Family Room Ocean View",
        img : "premium family.jpg",
        type : "Phong doi",
        price:5640000,
        description: "Phòng Premium Family có diện tích lên đến 85m2 với tầm nhìn trực diện biển, thích hợp cho gia đình 4 người hoặc nhóm bạn. ",
    },
    {
        id:"R5",
        name:"Senior Suite Ocean View",
        img : "senior suite.jpg",
        type : "Phong doi",
        price:654000,
        description: "Tiện nghi, hiện đại và thoải mái với không gian lên tới 140m2 cùng tầm nhìn trực diện biển và ban công riêng.",
    },
    {
        id:"R6",
        name:"Executive Suite Ocean View",
        img : "executive_suite.jpg",
        type : "Phong doi",
        price:123000,
        description: "Không gian sang trọng và đẳng cấp với diện tích lên đến 200m2.",
    },
    {
        id:"R7",
        name:"Premium Quadruple Panoramic Ocean View",
        img : "premium deluxe room1.jpg",
        type : "Phong doi",
        price:12000000,
        description: "Phòng Deluxe có diện tích 70m2 cùng tầm nhìn vô cực ra biển. Được trang bị 2 loại giường là một giường lớn hoặc 2 giường nhỏ, Deluxe là lựa chọn tuyệt vời cho kì nghỉ lãng mạn của các cặp đôi.",
    },
    {
        id:"R8",
        name:"Hinode Garden View",
        img : "hinode_garden.jpg",
        type : "Phong doi",
        price:258000,
        description: "Không gian nghỉ dưỡng tuyệt vời với sân vườn thoáng mát, hứa hẹn mang đến cho gia đình bạn một kì nghỉ tuyệt vời. ",
    },
];
// đẩy mảng room vào local
function Save(){
    localStorage.setItem('listRoom',JSON.stringify(room))
}
//lấy phong ra
function load(){
   room = JSON.parse(localStorage.getItem('listRoom'));
} 
//xuất phong ra html
if (localStorage.getItem("listRoom") != null) {
    load();
}
Save();
var listLocal = function(){
   var listroom ="";
   for (var i in room){
       var data = JSON.parse(JSON.stringify(room[i]))
    var listroom = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listroom += '<div class="card room p-2" styte="width:auto">'; 
    listroom += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
    listroom += '<div class="card-title room-title text-center h5" >'+data.name+'</div>';
    listroom += '<div class="price text-center h6">'+data.price+'₫</div>';
    listroom +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
    // listroom +=  '<a class=" add-to-cart btn" data-name="'+room[i].name+'" data-price="'+room[i].price+'" onclick="tks()">';
    listroom +=  '<a>';
    listroom +=  '<i class="fas fa-cart-plus"></i>';
    listroom +=  '</a>';
    listroom +=  '</span>';
    listroom += '</div>';
    listroom += '</div>';

    document.getElementById("bestseller").innerHTML += listroom;
   }
   Save();
   
}

listLocal();


