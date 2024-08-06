// import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
// import { ReactComponent as EditIcon } from 'assets/icons/edit-icon.svg';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import Button from '../../button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Edit } from 'iconsax-react';

interface Imodify {
  handleActionClick: (action: string, item: any) => void;
  index: number;
  item: any;
  column: any;
  isLoading: boolean;
}

const ModifyType = React.memo(
  ({ handleActionClick, index, item, column, isLoading }: Imodify) => {
    const memoizedHandleActionClick = useCallback(
      (action: string, item: any) =>
        handleActionClick && handleActionClick(action, item),
      [handleActionClick]
    );
    const show = column?.show || ['edit', 'delete'];
    const status = item?.status === 'active' ? true : false;

    return (
      <div className="flex w-fit items-center justify-end gap-4">
        {show.includes('toggle') && (
          <Button
            className="flex h-10 items-center justify-center  text-xs md:text-sm"
            btnType={status ? 'outline-red' : 'outline'}
            animate={false}
            disabled={isLoading}
            onClick={() =>
              memoizedHandleActionClick(
                status ? 'deactivate' : 'activate',
                item
              )
            }
          >
            {status ? 'Deactivate' : 'Activate'}
          </Button>
        )}
        {show.includes('edit') && (
          <Edit
            className={classNames('h-5 w-5 cursor-pointer', {
              ['pointer-events-none']: isLoading,
            })}
            onClick={() => memoizedHandleActionClick('edit', item)}
          />
        )}
        {show.includes('delete') && (
          <TrashIcon
            className={classNames('h-5 w-5 cursor-pointer', {
              ['pointer-events-none']: isLoading,
            })}
            onClick={() => memoizedHandleActionClick('delete', item)}
          />
        )}
      </div>
    );
  }
);
export default ModifyType;