import { Suspense } from "react";

export const Table = ({ data }: { data: any }) => {
  return (
    <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg overflow">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              OrderId
            </th>
            <th scope="col" className="px-6 py-3">
              TotalPlayed
            </th>
            <th scope="col" className="px-6 py-3">
              Govt. RO No.
            </th>
          </tr>
        </thead>
        <tbody className="scroll-smooth">
          {data.map((campaign: any, i: number) => (
            <>
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {campaign.orderId}
                </th>
                <td className="px-4 py-3 text-center ">
                  {campaign.totalPlayed}
                </td>
                {/* <Gov orderId={campaign.orderId as string} /> */}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// export async function Gov({ orderId }: { orderId: string }) {
//   const data = await getCampaignMetaData(orderId);
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <td className="px-4 py-3 text-center">{data[0].GovtRoNo}</td>
//       </Suspense>
//     </>
//   );
// }
