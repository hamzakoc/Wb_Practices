function myFunction() {
    let input = prompt("Enter a, p, div, nav, section, footer…")
    var para = document.createElement(input);

    let text = "This is new";

    switch (input) {
        case "p":
            input = "paragraph";
            break;
        case "div":
            input = "division";
            break;
        case "nav":
            input = "navigation";
            break;
        case "i":
            input = "item";
            break;
        case "li":
            input = "list";
            break;
        case "ol":
            input = "ordered list";
            break;
        case "ul":
            input = "unordered list";
            break;
        case "a":
            input = "anchor";
            break;
        case "section":
            input = "section";
            break;
        case "footer":
            input = "footer";
            break;
        default:
            text = " Opps! Enter valid value. You entered";
            para.setAttribute("class", "unknown");
            break;
    }


    var node = document.createTextNode(`${text} ${input}`);
    para.appendChild(node);

    document.getElementById("newElements").appendChild(para);

}