'use client';

import useSWR from 'swr';
import { fetcher } from '@/app/lib/fetcher';

export const ChildWithSuspense3 = () => {
  const { data } = useSWR('child-with-suspense-3', fetcher, { suspense: true });

  console.log(`render Child (${JSON.stringify(data)})`);

  return <div>{data?.data}</div>;
};
