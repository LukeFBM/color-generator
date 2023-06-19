import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return (
          <div>
            <SingleColor key={nanoid()} color={color} index={index} />
          </div>
        );
      })}
    </section>
  );
};

export default ColorList;
