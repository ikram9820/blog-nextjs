import Link from "next/link";
import classes from "./navigation.module.css";

function MainNavigation(props) {
  return (
    <>
      <header className={classes.header}>
        <Link href="/">
          <div className={classes.logo}>IK' Blog</div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
}

export default MainNavigation;
