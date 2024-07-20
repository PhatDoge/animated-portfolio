import { motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 1 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;

/* 
initial={{ opacity: 0.5, scale: 0.5 }}
transition={{ duration: 2 }}
whileInView={{ opacity: 1, scale: 2 }}
drag */

{
  /* <motion.div
className="box"
variants={variants}

animate={open ? "visible" : "hidden"}
></motion.div>
<button onClick={() => setOpen((prev) => !prev)}>click me</button> */
}
