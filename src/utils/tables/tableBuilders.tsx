// import { dateTimeFormat } from '../tables/tableBuilders';
export function buildVideoTableData(data: any[] = []) {
  return data?.map((data, index) => {
    const newData = {
      ...data,
      idx: index + 1,
      image: data.imageUrl,
      title: data.title,
      date: data.dateCreated,
    };

    return newData;
  });
}

export function buildResponseTableData(data: any[] = []) {
  return data?.map((data, index) => {
    const newData = {
      ...data,
      idx: index + 1,
      email: data?.email,
      dateResponded: data.dateResponded,
      response: data.response,
    };

    return newData;
  });
}

export function buildExportAlResponseeData(data: any[] = []) {
  return data?.map((body, index) => [
    index + 1,
    body.username,
    body.response,
    body.dateResponded,
  ]);
}