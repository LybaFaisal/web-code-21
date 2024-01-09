//switch Statement

let role= "editor";

switch(role)
{
    case "admin":
        {
            document.write("You are admin and you have full access!");
            break;
        }
    case "editor":
        {
            document.write("You are editor and you can edit the content!");
            break;
        }  
    case "viewer":
        {
            document.write("You are viewer and you can't edit!");
            break;
        }      
    default:
        {
            document.write("Sorry invalid role");
            break;
        }    
}


//using if/else if/else

let user_role= "admin";

if(user_role==="admin")
{
    document.write("You are admin and you have full access!");
}
else if(user_role==="editor")
{
    document.write("You are editor and you can edit the content!");
}
else if(user_role==="viewer")
{
    document.write("You are viewer and you can't edit!");
}
else{
    document.write("no role!")
}