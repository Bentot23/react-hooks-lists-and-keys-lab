import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkLists = links.map((list, index) => {
    // console.log(list, index)
    return <a key={index} href={`#${list}`}>{list}</a>
  })
  console.log(linkLists)

  return <nav>{linkLists}</nav>;
}

export default NavBar;
