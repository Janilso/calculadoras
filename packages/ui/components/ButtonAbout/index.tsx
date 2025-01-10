import {
  Box,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { IconWarning } from '../../icons';
import { Button } from '../Button';
import { styles } from './styles';
import ButtonAboutTransition from './Transition';
import { ButtonAboutProps } from './types';

const ButtonAbout: React.FC<PropsWithChildren<ButtonAboutProps>> = ({
  textButton = 'Sobre',
  titleModal,
  titleModalButton = 'Entendi',
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={styles.root} component={ButtonBase} onClick={handleClickOpen}>
        <IconWarning />
        <Typography sx={styles.text} variant="body2">
          {textButton}
        </Typography>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={ButtonAboutTransition}
        keepMounted
        maxWidth="md"
        onClose={handleClose}
      >
        {titleModal ? (
          <DialogTitle sx={styles.modalTitle}>{titleModal}</DialogTitle>
        ) : null}
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button
            data-gtm-type="click"
            data-gtm-clicktype="button"
            data-gtm-name="modal-entendi"
            onClick={handleClose}
            label={titleModalButton}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonAbout;
