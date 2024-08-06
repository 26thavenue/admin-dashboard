
import ModifyType from './ModifyType';
import SelectionType from './SelectionType';
import StringType from './StringType';
import BadgeType from './BadgeType';
import { cellType } from '../../../../../utils/common';
import ImageType from './ImageType';
const RenderComponents = ({
  column,
  row,
  value,
  index,
  selectedRows,
  handleRowSelection,
  handleActionClick,
  isLoading,
}: any) => {
  const components = {
    [cellType.STRING]: <StringType value={value} index={index} />,
    [cellType.BADGE]: <BadgeType value={value} index={index} />,
    [cellType.SELECTION]: (
      <SelectionType
        selectedRows={selectedRows}
        handleRowSelection={handleRowSelection}
        index={index}
        item={row}
      />
    ),
    [cellType.IMAGE]: <ImageType value={value} index={index} />,
    [cellType.ACTION]: (
      <ModifyType
        handleActionClick={handleActionClick}
        index={index}
        item={row}
        column={column}
        isLoading={isLoading}
      />
    ),
  };
  // ToggleButton
  return components[column?.type] || <span>Enter Valid type</span>;
};
export default RenderComponents;