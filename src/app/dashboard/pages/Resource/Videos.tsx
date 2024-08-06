import {
  deleteResource,
  resourceActions,
} from '../../../../utils/redux/slices/resourceSlice';
import BarItem from '../../../sharedcomponents/ui/BarItem/BarItem';
import EmptyCard from '../../../sharedcomponents/cards/EmptyCards';
import Modal from '../../../sharedcomponents/ui/modal';
import Table from '../../../sharedcomponents/ui/table/Table';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/redux-hooks';
import { Message2 } from 'iconsax-react';
import { useEffect, useRef, useState } from 'react';
import { buildVideoTableData } from '../../../../utils/tables/tableBuilders';
import { videoTableColumn } from '../../../../utils/tables/tableColumns';
import AddVideoModal from './modal/AddVideoModal';
import Button from '../../../sharedcomponents/ui/button';

import ConfirmDeleteModal from '../../../sharedcomponents/ui/dialog/ConfirmDeleteModal';
import {
  useGetResourceQuery,
} from "@/utils/redux/reducers/resource.reducers"

const Videos = () => {
  const dispatch = useAppDispatch();
  const isFiltered = useRef(false);
  const { current: filtered } = isFiltered;
  
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [deleteItem, setDeleteItem] = useState<any | null>(null);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const { data, error, isLoading, refetch } = useGetResourceQuery({
    pageNumber: page, 
    pageSize: pageSize,
    name: search
  });

  console.log(data, error, isLoading, refetch);

  const {
    deleteResource: { success: successDelete, loading: loadingDelete },
  } = useAppSelector(({ resources }) => resources);

  useEffect(() => {
    refetch();
  }, [search, page, pageSize]);

  const handleRowClick = (row: any) => {
    setSelectedRow(row);
  };

  const handlePaginate = (newPage: number) => {
    setPage(newPage);
    isFiltered.current = true;
  };

  const handleActionClick = (action: any, row: any) => {
    if (action === 'edit') return setSelectedRow(row);
    if (action === 'delete') return setDeleteItem(row);
  };

  useEffect(() => {
    if (successDelete) setDeleteItem(null);
  }, [successDelete]);

  const resourceActions = () => {
    dispatch(deleteResource(deleteItem?.id));
  };

  return (
    <div className="w-full">
      <div className="block w-full">
        <BarItem
          name="Video"
          count={data?.paginationData?.totalItemCount || 0}
          setTerm={setSearch}
          customButtom={
            <Button
              className="ml-auto h-9 py-0 text-sm"
              onClick={() => setSelectedRow('okay')}
            >
              Add video
            </Button>
          }
        />

        <Table
          data={buildVideoTableData(data?.resources || [])}
          column={videoTableColumn}
          loading={isLoading}
          isFiltered={filtered}
          paginate
          handlePaginate={handlePaginate}
          handleActionClick={handleActionClick}
          meta={data?.paginationData}
        />

        {!data?.resources?.length && !isLoading && (
          <EmptyCard
            title="No video added yet"
            subtitle="All videos will appear here."
            icon={Message2}
          />
        )}
        <Modal
          size="max-w-3xl"
          active={!!selectedRow}
          onClick={() => setSelectedRow(null)}
          close
        >
          <AddVideoModal
            selectedRow={selectedRow}
            close={() => setSelectedRow(null)}
          />
        </Modal>

        <ConfirmDeleteModal
          isOpen={!!deleteItem}
          onClose={() => setDeleteItem(null)}
          deleteFunc={resourceActions}
          isLoading={loadingDelete}
          title="Delete resource"
          subtitle="Are you sure you want to delete this resource?"
        />
      </div>
    </div>
  );
};

export default Videos;