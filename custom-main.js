//BUSINESS INFORMATION
const BUSINESS_NAME = "[BUSINESS NAME]"
const BUSINESS_ADDRESS = "[ADDRESS]"
const BUSINESS_PHONE = "[PHONE NUMBER]"
const BOOKING_LINK = "https://www.google.com"
const DESCRIPTION = " You are trying to find a beauty salon in Ottawa, ON, come to High Class Nails & Spa. We specialize in nail design, eye lash extensions, waxing, and much more. Our staff is very experienced and is sure to leave you satisfied with the way you look. We have the experience and skill that will have you coming back. For a great service in Ottawa, ON, call on High Class Nails & Spa."
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
    
//business description 
var description = document.getElementsByClassName("description");
for (var i = 0; i < description.length; i++) {
    description[i].innerText = DESCRIPTION; // Change the content
}

//booking link
var allBookingLinks = document.getElementsByClassName("booking-link");
for (var i = 0; i < allBookingLinks.length; i++) {
    allBookingLinks[i].href  = BOOKING_LINK; // Change the content
}

//UPDATE CUSTOMER REVIEW
const AUTHOR_1 = "Kerri Seaver"
const COMMENT_1 = "hey do great work. I'm very particular about nail shape and both times I've been, they did not disappoint. Price is reasonable and they are timely with their appointments, they don't keep you waiting."
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

