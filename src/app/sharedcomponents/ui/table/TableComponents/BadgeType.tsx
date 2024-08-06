
import React from 'react';
import { getStatus } from '../../../../../utils/common';
import Badge from "../../badge"

const BadgeType = React.memo(({ value }: any) => {
  if (!value) return <div />;

  return <Badge status={getStatus(value)} title={value} />;
});
export default BadgeType;