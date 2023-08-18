import React from "react";
import { useNavigate } from "react-router-dom";
import { Items, Item, ItemText, Menu } from "./styledComp";
import { useSelector } from "react-redux";

const Cards = () => {
  const contents = useSelector((state) => state.contents);
  const navigate = useNavigate();
  return (
    <>
      <Menu>
        <h2>크리스토퍼 놀란 감독 영화 모음</h2>
      </Menu>
      <Items>
        {contents.map((content, idx) => {
          return (
            <Item
              key={idx}
              $imagePath={content.imagePath}
              onClick={() => navigate(content.path)}
            >
              <ItemText>
                <h2>{content.title}</h2>
              </ItemText>
            </Item>
          );
        })}
      </Items>
    </>
  );
};

export default Cards;
