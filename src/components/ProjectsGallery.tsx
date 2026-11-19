"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  portfolioProjects,
  projectCategories,
} from "@/data/portfolio";
import styles from "@/app/projects/projects.module.css";

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter((project) =>
            project.categories.includes(activeCategory),
          ),
    [activeCategory],
  );

  return (
    <>
      <div className={styles.filters} aria-label="Filter projects by category">
        <div role="group" aria-label="Project categories">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              aria-controls="project-gallery"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div
        className={`${styles.galleryGrid} ${activeCategory !== "All" ? styles.filteredGrid : ""}`}
        id="project-gallery"
      >
        {visibleProjects.map((project) => (
          <article
            className={`${styles.projectCard} ${styles[`layout${project.layout[0].toUpperCase()}${project.layout.slice(1)}`]}`}
            key={project.id}
          >
            <div className={styles.projectMedia}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 58vw"
              />
              <span>{project.categoryLabel}</span>
            </div>
            <div className={styles.projectMeta}>
              <div>
                <p>{project.location}</p>
                <h2>{project.title}</h2>
              </div>
              <p>{project.scope}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
