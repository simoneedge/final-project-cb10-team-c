import React from "react";
import styles from "./Card.module.scss";
import { Link } from "@/i18n/routing";
import Image from "next/image";

interface CardProps {
  label: string;
  children?: React.ReactNode;
  image: string;
  roadmap: string;
  target?: "_blank" | "_self";
}
function Card({
  label,
  children,
  image,
  roadmap,
  target = "_self",
}: CardProps) {
  return (
    <Link target={target} className={styles.card_section} href={`/${roadmap}`}>
      <Image width={600} height={400} src={image} alt={label} />
      <div className={styles.title_container}>
        <h2>{label}</h2>
        {children}
      </div>
    </Link>
  );
}

export default Card;
