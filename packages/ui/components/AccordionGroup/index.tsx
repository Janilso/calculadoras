import React from 'react';
import { AccordionGroupProps, HandleChangeType } from './types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  SxProps,
  Typography,
} from '@mui/material';
import { IconChevronDown } from '../../icons';
import { styles } from './styles';

const AccordionGroup: React.FC<AccordionGroupProps> = ({ children, sx }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange: HandleChangeType = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={[styles.root, sx] as SxProps}>
      {children.map(({ title, details }, i) => {
        const key = `panel${i}`;
        return (
          <Accordion
            key={key}
            expanded={expanded === key}
            onChange={handleChange(key)}
            elevation={0}
            sx={styles.accordion}
          >
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls={`${key}bh-content`}
              id={`${key}1bh-header`}
              sx={styles.summary}
            >
              <Typography component="span" sx={styles.summaryTitle}>
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.details}>{details}</AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionGroup;
