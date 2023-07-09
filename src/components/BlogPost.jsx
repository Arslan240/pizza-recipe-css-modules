import React from 'react';
import styles from './BlogPost.module.css';

const BlogPost = () => {
  return (
    <div className={styles.blogPost}>
      <h1 className={styles.title}>Pizza Recipe 🍕</h1>
      <div className={styles.metadata}>
        <span className={styles.date}>Published on July 9, 2023</span>
        <span className={styles.author}>By John Doe</span>
      </div>
      <div className={styles.steps}>
        <h2 className={styles.sectionTitle}>Ingredients</h2>
        <ul className={styles.ingredientsList}>
          <li>1 pizza dough</li>
          <li>1 cup pizza sauce 🍶</li>
          <li>2 cups shredded mozzarella cheese 🧀</li>
          <li>Assorted toppings (e.g., pepperoni, mushrooms, bell peppers) 🍄</li>
        </ul>

        <h2 className={styles.sectionTitle}>Instructions</h2>
        <ol className={styles.instructionsList}>
          <li>Preheat the oven to 425°F (220°C).</li>
          <li>Roll out the pizza dough into your desired shape and thickness.</li>
          <li>Spread the pizza sauce evenly over the dough.</li>
          <li>Sprinkle the shredded mozzarella cheese over the sauce.</li>
          <li>Add your desired toppings.</li>
          <li>Bake in the preheated oven for 12-15 minutes or until the crust is golden brown and the cheese is bubbly.</li>
          <li>Remove from the oven and let it cool for a few minutes before slicing and serving.</li>
        </ol>
      </div>
    </div>
  );
};

export default BlogPost;
