//BUSINESS INFORMATION
const BUSINESS_NAME = "[BUSINESS NAME]"

const BUSINESS_ADDRESS = "[ADDRESS]"
const BUSINESS_DIRECTION ="https://www.google.com/maps"

const MAP = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11231.653842558053!2d-75.7826766!3d45.2697601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55ba9b94921a369f!2sHigh%20Class%20Nails%20%26%20Spa!5e0!3m2!1sen!2sca!4v1636478597494!5m2!1sen!2sca" 
const BUSINESS_PHONE = "(613) 823-6879"
const PHONE_LINK = "tel:(613)-823-6879"

const BOOKING_LINK = "https://www.google.com"
const LOGO ="assets/photos/logo.png"
const DESCRIPTION = " You are trying to find a beauty salon in Ottawa, ON, come to High Class Nails & Spa. We specialize in nail design, eye lash extensions, waxing, and much more. Our staff is very experienced and is sure to leave you satisfied with the way you look. We have the experience and skill that will have you coming back. For a great service in Ottawa, ON, call on High Class Nails & Spa."

const CUSTOMER_PHOTO = ["assets/photos/img/gallery/customer-01.jpeg", 
"assets/photos/img/gallery/customer-02.jpeg", 
"assets/photos/img/gallery/customer-03.jpeg",
"assets/photos/img/gallery/customer-04.jpeg",
"assets/photos/img/gallery/customer-05.jpeg",
"assets/photos/img/gallery/customer-06.jpeg",
"assets/photos/img/gallery/customer-07.jpeg",
"assets/photos/img/gallery/customer-08.jpeg",
"assets/photos/img/gallery/customer-10.jpeg",
"assets/photos/img/gallery/10.jpg",
"assets/photos/img/gallery/11.jpg",
"assets/photos/img/gallery/12.jpg"];

const DAYS = [ {
    date: "Sunday",
    openTime: "11.00AM",
    closeTime: "5.00PM"
},
{
    date: "Monday",
    openTime: "10.00AM",
    closeTime: "7.00PM"
},{
    date: "Tuesday",
    openTime: "10.00AM",
    closeTime: "7.00PM"
},{
    date: "Wednesday",
    openTime: "10.00AM",
    closeTime: "7.00PM"
},{
    date: "Thursday",
    openTime: "10.00AM",
    closeTime: "8.00PM"
},{
    date: "Friday",
    openTime: "10.00AM",
    closeTime: "8.00PM"
},{
    date: "Saturday",
    openTime: "10.00AM",
    closeTime: "6.00PM"
}];
const AUTHOR_1 = "Kerri Seaver"
const COMMENT_1 = "They do great work. I'm very particular about nail shape and both times I've been, they did not disappoint. Price is reasonable and they are timely with their appointments, they don't keep you waiting."

const AUTHOR_2 = "Ave Poggione"
const COMMENT_2 = "The service is amazing. It is always very clean and they have an amazing colour choice for a great price. I have loved all of my nails from them and will continue to visit. They are definitely one of the best nail salons I have been to."

const AUTHOR_3 = "Leila Tamblyn"
const COMMENT_3 = "I went in to get a full acrylic set... Wasn't even there for an hour! The girl helping me was fast and my nails feel strong and look good. It was 70 odd dollars, but I'd definitely pay that little extra for the service and speed."

const AUTHOR_4 = "Gesenia Castle"
const COMMENT_4 = "I've been to many salons in Ottawa. This is the first place that did the most amazing job on the shaping and didnt mangle my cuticles. So many shellac colors to choose from. My acrylics are so strong and they actually used a good amount of acrylic as most places use the smallest amount in a thin barely there layer which results in breakage. They also didnt rush and took the time to finish the job properly paying attention to the shaping."

//UPDATE BUSINESS INFO:
//business name
var allBusinessNameTags = document.getElementsByClassName("business-name");
for (var i = 0; i < allBusinessNameTags.length; i++) {
    allBusinessNameTags[i].innerText = BUSINESS_NAME; // Change the content
}

//business hour
var k = "<p>"
    for(i = 0;i < DAYS.length; i++){
        k+= DAYS[i].date + ":  " +DAYS[i].openTime+ "---" +DAYS[i].closeTime +'<br>';
    }
k+='</p>';
document.getElementById("hours").innerHTML = k;
    
//business phone number
var tel = document.getElementById("telephone")
tel.textContent = BUSINESS_PHONE;
tel.href = PHONE_LINK

//business description 
var description = document.getElementsByClassName("description");
for (var i = 0; i < description.length; i++) {
    description[i].innerText = DESCRIPTION; // Change the content
}

//business direction
var address = document.getElementById("address")
address.innerText = BUSINESS_ADDRESS;
address.href = BUSINESS_DIRECTION
var map = document.getElementById("map")
map.src=MAP

//booking link
var allBookingLinks = document.getElementsByClassName("booking-link");
for (var i = 0; i < allBookingLinks.length; i++) {
    allBookingLinks[i].href  = BOOKING_LINK; // Change the content
}

//business logo
var logo = document.getElementsByClassName("logo");
for (var i = 0; i < logo.length; i++) {
    logo[i].src = LOGO; 
}

//customer photo
var customer_photo = document.getElementsByClassName("customer-photo")
for (var i = 0 ; i < customer_photo.length; i++){
    customer_photo[i].src=CUSTOMER_PHOTO[i];
}

//UPDATE CUSTOMER REVIEW
var author1 = document.getElementsByClassName("author-1")
var comment1  = document.getElementsByClassName("comment-1")
author1[0].innerText  = AUTHOR_1; // Change the content
comment1[0].innerText = COMMENT_1

var author2 = document.getElementsByClassName("author-2")
var comment2  = document.getElementsByClassName("comment-2")
author2[0].innerText  = AUTHOR_2; // Change the content
comment2[0].innerText = COMMENT_2

var author2 = document.getElementsByClassName("author-2")
var comment2  = document.getElementsByClassName("comment-2")
author2[0].innerText  = AUTHOR_2; 
comment2[0].innerText = COMMENT_2

var author3 = document.getElementsByClassName("author-3")
var comment3  = document.getElementsByClassName("comment-3")
author3[0].innerText  = AUTHOR_3; 
comment3[0].innerText = COMMENT_3

var author4 = document.getElementsByClassName("author-4")
var comment4  = document.getElementsByClassName("comment-4")
author4[0].innerText  = AUTHOR_4; 
comment4[0].innerText = COMMENT_4

