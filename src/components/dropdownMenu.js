import React from "react";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onClick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}


export default class DropdownMenu extends React.Component { 
    render() {
        /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
        
        return (

          
                
                <div className="dropdown">
                    <button className="dropbtn" onClick={myFunction()}>Dropdown
    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content" id="myDropdown">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
         
            );
        }
};

