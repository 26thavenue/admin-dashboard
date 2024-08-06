import { useAppDispatch } from '../../../../utils/hooks/redux-hooks';
import { MultipleSelectCheckbox } from '../input/MultipleSelectCheckBox';
import Button from '../button';

const Filter = ({
  filterData,
  handleFilterApply,
  handleToggleFilterPopover,
  withDate,
  setSelectedValue,
  selectedValue,
  setSelectedFilters,
  selectedFilters,
  seletedRange,
  setSeletedRange,
  date,
  setDate,
}: any) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: any, title: any) => {
    setSelectedFilters((prevFilters: any) => ({
      ...prevFilters,
      [title?.toLowerCase()]: value.map((item: any) => item.value),
    }));
    setSelectedValue((prevFilters: any) => ({
      ...prevFilters,
      [title]: value,
    }));
  };

  const handleApply = () => {
    if (withDate) {
      setSelectedFilters({
        ...selectedFilters,
        from: date.from || undefined,
        to: date.to || undefined,
      });

      if (date.title) setSeletedRange(date.title);
    }

    handleFilterApply({
      ...selectedFilters,
      from: date.from || undefined,
      to: date.to || undefined,
    });
    handleToggleFilterPopover();
  };

  return (
    <>
      {/* {withDate && (
        <CustomDateRange
          handleOnChange={setDate}
          date={date}
          // seletedRange={seletedRange}
        />
      )} */}
      {filterData?.map((item: any, index: number) => {
        return (
          <div className="my-2" key={index}>
            <MultipleSelectCheckbox
              options={item.list}
              name={item.title}
              label={item.title}
              value={selectedValue[item.title]}
              onChange={(value: any) => handleChange(value, item.title)}
              placeholder={`Select ${item.title}`}
            />
          </div>
        );
      })}

      <div className="mt-4 flex w-full justify-end gap-3">
        <Button
          className="!border-error-600 text-error-600 flex h-9 items-center justify-center py-0 text-sm "
          btnType="withoutbg"
          border
          animate={false}
          onClick={() => {
            handleFilterApply({});
            setSelectedValue({});
            handleToggleFilterPopover();
          }}
        >
          Clear filter
        </Button>
        <Button
          onClick={handleApply}
          className="flex h-9 items-center justify-center py-0 text-sm "
          animate={false}
        >
          Apply filter
        </Button>
      </div>
    </>
  );
};

export default Filter;