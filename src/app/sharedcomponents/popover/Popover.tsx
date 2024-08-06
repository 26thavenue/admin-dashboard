// import { Popover2 } from '@blueprintjs/popover2';
import React, { FC } from 'react';
import './styles.scss';
import {
  PopoverHandler,
  Popover,
  PopoverContent,
} from '@material-tailwind/react';

interface Popover {
  isOpen: boolean;
  togglePopover: any;
  content: string | JSX.Element | undefined;
  button: React.ReactNode;
  index?: number | undefined;
}

const Popovers: FC<Popover> = ({
  isOpen,
  togglePopover,
  content,
  button,
  index,
}) => {
  return (
    <>
      {/* <Popover2
        interactionKind="click"
        placement="bottom-end"
        minimal
        content={content}
        modifiers={{
          offset: { enabled: true, options: { offset: [0, 12] } },
          preventOverflow: { enabled: true },
        }}
        onInteraction={state => {
          index ? togglePopover(state, index) : togglePopover(state);
        }}
        isOpen={isOpen}
      >
        {button}
      </Popover2> */}

      <Popover
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        placement="bottom-end"
        open={isOpen}
        // handler={}
      >
        <PopoverHandler>{button}</PopoverHandler>
        <PopoverContent 
        placeholder={content}
        className="!flex w-40 p-2"
        >
          <div>  {content}</div>
            </PopoverContent>
      </Popover>
    </>
  );
};

export default Popovers;