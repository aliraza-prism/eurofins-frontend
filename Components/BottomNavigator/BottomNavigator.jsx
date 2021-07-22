import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "next/link";
import styles from "./BottomNavigator.module.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.bottom_navigator_wrapper}>
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to="/">
          <AiOutlineHome className={styles.tab_icon} />
        </Link>
        <Link to="/category">
          <IoGridOutline className={styles.tab_icon} />
        </Link>
        <Link to="/contact">
          <BsEnvelope className={styles.tab_icon} />
        </Link>
        <Link to="/wishlist">
          <AiOutlineHeart className={styles.tab_icon} />
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
