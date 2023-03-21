import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {FC} from "react";
import {AccordionWrapper} from "./AccordionSettings.style";
import {IAccordionSettingsProps} from "./AccordionSettings.types";

const AccordionSettings: FC<IAccordionSettingsProps> = ({ name, params }) => {
  return (
    <AccordionWrapper>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>{params}</AccordionDetails>
    </AccordionWrapper>
  );
};

export default AccordionSettings;
