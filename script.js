
//--------------------- HEADING --------------------------
const title = React.createElement("h1", {
    style : {
        // color : "red",
        fontSize : "4rem",
        
    }
}, "Learn web development");

//--------------------- PARAGRAP STYLE --------------------------
const pStyle = {
    // backgroundColor : "yellow",
    fontSize : "1.5rem",
    marginTop : "2rem",
    wordSpacing : "8px",
    lineHeight : "2.4rem"
}


//--------------------- PARAGRAP 1 --------------------------
const p1 = React.createElement("p", {
    style : pStyle
}, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

//--------------------- PARAGRAP 2 --------------------------
const p2 = React.createElement("p", {
    style : pStyle
}, "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but to take you from 'beginner' to 'comfortable'. From there, you should be able to start making your way, learning from ", 
React.createElement("a", {href : "https://www.google.com/"}, "the rest of MDN"),
", and other intermediate to advanced resources that assume a lot of previous knowledge.");

//--------------------- PARAGRAP 3 --------------------------
const p3 = React.createElement("p", {
    style : pStyle
}, "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")

//--------------------- MAIN-DIV --------------------------
const main = React.createElement("div", {
    style : {
        backgroundColor : "white",
        padding : "4rem",
        width : "60%"
    }
}, [title, p1, p2, p3]);

//--------------------- CONTAINER-DIV --------------------------
const divContainer = React.createElement("div", {
    style : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        height : "100vh",
        backgroundColor : "black"
    }
}, main)


//--------------------- REACT-DOM -------------------------------
ReactDOM.render(divContainer, document.getElementById("container"));