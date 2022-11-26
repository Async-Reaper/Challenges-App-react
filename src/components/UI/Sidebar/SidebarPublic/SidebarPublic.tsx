import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import { FC } from "react";
import ButtonLink from "../../Button/ButtonLink/ButtonLink";
import { AsidePublic } from "./SidebarPublic.style";

const SidebarPublic: FC = () => {
  return (
    <AsidePublic data-testid="sidebar-public">
      <ButtonLink to={"/login"} data-testid="link-login">
        <LoginOutlinedIcon />
        Login
      </ButtonLink>
      <ButtonLink to={"/signup"} data-testid="link-signup">
        <AssignmentIndOutlinedIcon />
        Signup
      </ButtonLink>
      <ButtonLink to={"/challenges"} data-testid="link-challenges">
        <ModeStandbyIcon />
        Challenges
      </ButtonLink>
    </AsidePublic>
  );
};

export default SidebarPublic;
