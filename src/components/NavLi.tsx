import { AiOutlineSetting } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Icon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  height: 40px;
  line-height: 50px;
  margin-left: 5px;
  text-align: center;
  font-size: 1.75em;
  color: ${(props) => props.theme.textColor};
`;
const Title = styled.span`
  position: relative;
  display: block;
  padding: 0 auto;
  height: 40px;
  line-height: 45px;
  font-size: 15px;
  margin-left: 3px;
  text-align: start;
  white-space: nowrap;
  color: ${(props) => props.theme.textColor};
`;
const Copyright = styled.div`
  font-size: 13px;
  margin-left: 30px;
  margin-top: 480px;
  color: ${(props) => props.theme.copyColor};
  a {
    color: ${(props) => props.theme.hyperlinkColor};
  }
`;

export function NavLi() {
  return (
    <>
      <li>
        <Button className="buttons">
          <Link to="/">
            <Icon>
              <HiOutlineHome />
            </Icon>
            <Title>Home</Title>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="buttons">
          <Link to="/favorites">
            <Icon>
              <MdOutlineFavoriteBorder />
            </Icon>
            <Title>Favorites</Title>
          </Link>
        </Button>
      </li>
      {/* <li>
        <Button className="buttons">
          <Link to={"/multiview"}>
            <Icon>
              <CgProfile />
            </Icon>
            <Title>Multiview</Title>
          </Link>
        </Button>
      </li> */}
        {/* <li>
        <Button onClick={active} className={buttons}>
          <Link to={"/timeline"}>
            <Icon>
              <CgProfile />
            </Icon>
            <Title>TimeLine</Title>
          </Link>
        </Button>
      </li> */}
       {/* <li>
        <Button onClick={active} className={buttons}>
          <Link to={"/channels"}>
            <Icon>
              <CgProfile />
            </Icon>
            <Title>Channels</Title>
          </Link>
        </Button>
      </li> */}
      <li>
        <Button className="buttons">
          <Link to={`/setting`}>
            <Icon>
              <AiOutlineSetting />
            </Icon>
            <Title>Setting</Title>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="buttons">
          <Link to={`/about`}>
            <Icon>
              <FcAbout />
            </Icon>
            <Title>About</Title>
          </Link>
        </Button>
      </li>
      <Copyright>© 2021 <a href="mailto: mandu0055@gmail.com">Holoschedule</a></Copyright>
    </>
  );
}
