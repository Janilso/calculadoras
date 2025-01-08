import { ClickAwayListener, Tooltip, useMediaQuery } from '@mui/material';
import React, { cloneElement, PropsWithChildren, useState } from 'react';
import { TooltipResponsiveProps } from './types';

const TooltipResponsive: React.FC<
  PropsWithChildren<TooltipResponsiveProps>
> = ({ children, ...rest }) => {
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const handleTooltipClose = () => setOpen(false);

  const handleTooltipOpen = () => setOpen(true);

  if (isTablet) {
    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            {...rest}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            slotProps={{
              ...rest.slotProps,
              popper: {
                disablePortal: true,
              },
            }}
          >
            {cloneElement(children, { onClick: handleTooltipOpen })}
          </Tooltip>
        </div>
      </ClickAwayListener>
    );
  }

  return <Tooltip {...rest}>{children}</Tooltip>;
};

export default TooltipResponsive;
