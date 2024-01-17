'use client';

import { ChildWithSuspense1 } from '@/app/ui/suspense/child-with-suspense-1';
import { ChildWithSuspense2 } from '@/app/ui/suspense/child-with-suspense-2';
import { ChildWithSuspense3 } from '@/app/ui/suspense/child-with-suspense-3';
import { Suspense } from 'react';
// import { preload } from 'swr';
// import { fetcher } from '@/app/lib/fetcher';

// preload('child-with-suspense-1', fetcher);
// preload('child-with-suspense-2', fetcher);
// preload('child-with-suspense-3', fetcher);

// export function Sample4() {
//   return (
//     <Suspense>
//       <ChildWithSuspense1></ChildWithSuspense1>
//       <ChildWithSuspense2></ChildWithSuspense2>
//       <ChildWithSuspense3></ChildWithSuspense3>
//     </Suspense>
//   );
// }

export default function Page() {
  return (
    <>
      <Suspense>
        <ChildWithSuspense1></ChildWithSuspense1>
      </Suspense>
      <Suspense>
        <ChildWithSuspense2></ChildWithSuspense2>
      </Suspense>
      <Suspense>
        <ChildWithSuspense3></ChildWithSuspense3>
      </Suspense>
    </>
  );
}
