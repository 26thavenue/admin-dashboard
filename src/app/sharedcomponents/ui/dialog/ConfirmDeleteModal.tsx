// import { ReactComponent as AlertCircle } from 'assets/icons/alert-circle.svg';
import { AlertCircle } from '../../../../assets';
import Button from '../button';
import Modal from '../modal'
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  btnName?: string;
  deleteFunc: (arg: any) => any;
  isLoading?: boolean;
}

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  deleteFunc,
  isLoading,
  btnName = 'Delete',
}: Props) => {
  return (
    <Modal active={isOpen} onClick={onClose}>
      <div className="rounded-xl bg-white p-6">
        <div className="flex gap-6">
          <div className="bg-error-50 flex h-12 w-12 items-center justify-center rounded-full">
            <AlertCircle />
          </div>

          <div>
            <h3 className="text-primary-700 mb-2 text-xl font-medium ">
              {title}
            </h3>
            <p className="whitespace-break-spaces text-sm font-normal text-gray-700 ">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 text-base">
          <Button
            btnType="withoutbg"
            className="shadow-xs my-4 flex h-11 items-center justify-center py-0 text-sm"
            onClick={onClose}
            border
            animate={false}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={deleteFunc}
            className="bg-error-600 shadow-xs my-4 flex h-11 items-center justify-center py-0 text-sm"
            animate={false}
            loading={isLoading}
            disabled={isLoading}
          >
            {btnName}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;