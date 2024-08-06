export const videoTableColumn = [
  {
    header: 'ID',
    accessor: 'idx',
    type: 'string',
  },
  {
    header: 'Image',
    accessor: 'image',
    type: 'image',
  },
  {
    header: 'Title',
    accessor: 'title',
    type: 'string',
  },
  {
    header: 'Date',
    accessor: 'date',
    type: 'string',
  },
  {
    header: 'Action',
    accessor: 'action',
    type: 'action',
    show: ['delete', 'edit'],
  },
];

export const resonseTableColumn = [
  {
    header: 'ID',
    accessor: 'idx',
    type: 'string',
  },
  {
    header: 'Username',
    accessor: 'username',
    type: 'string',
  },
  {
    header: 'Response',
    accessor: 'response',
    type: 'string',
  },
  {
    header: 'Date responded',
    accessor: 'dateResponded',
    type: 'string',
  },
];