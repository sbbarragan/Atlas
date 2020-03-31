import React, { createRef } from 'react';

import MaterialTable from 'one-datatable';
import { Refresh as RefreshIcon } from '@material-ui/icons';

import { Translate } from '../../HOC';
import { requestData } from '../../../utils';
import HostColumns from './host-columns';

function Clusters({ name }) {
  const tableRef = createRef();

  return (
    <div>
      <MaterialTable
        tableRef={tableRef}
        title={
          <h2>
            <Translate word={name} />
          </h2>
        }
        columns={HostColumns.columns}
        data={query =>
          new Promise(resolve => {
            requestData('/api/hostpool/info').then(result => {
              const values = Object.values(result?.data?.HOST_POOL);
              resolve({
                data: values,
                page: query.page,
                totalCount: values.length
              });
            });
          })
        }
        actions={[
          {
            icon: () => <RefreshIcon />,
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => tableRef?.current?.onQueryChange()
          }
        ]}
      />
    </div>
  );
}

export default Clusters;
