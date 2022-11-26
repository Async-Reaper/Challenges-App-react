import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import SettingsIcon from "@mui/icons-material/Settings";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../../../../hooks/useTypedDispatch";
import { signoutUser } from "../../../../services/SignoutService";
import ButtonLink from "../../Button/ButtonLink/ButtonLink";
import Signout from "../../Button/Signout/Signout";
import { AsidePrivate } from "./SidebarPrivate.style";

const SidebarPrivate: FC = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    navigate("/challenges");
    dispatch(signoutUser());
  };

  return (
    <AsidePrivate data-testid="sidebar-private">
      <ButtonLink to={"/settings"} data-testid="link-settings">
        <SettingsIcon />
        Settings
      </ButtonLink>
      <ButtonLink to={"/challenges"} data-testid="link-challenges">
        <ModeStandbyIcon />
        Challenges
      </ButtonLink>
      <Signout dataTestId="button-logout" onClick={() => handleSignout()} />
    </AsidePrivate>
  );
};

export default SidebarPrivate;
