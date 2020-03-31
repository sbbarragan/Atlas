import React from 'react';
import { LinearProgress } from '@material-ui/core';

const statusBar = (title, ratio) => (
  <div>
    {title}
    <LinearProgress variant="determinate" value={ratio} />
  </div>
);

function format(size) {
  if (typeof size !== 'number' || size === 0) {
    return '0';
  }
  const baseLog = Math.floor(Math.log(size) / Math.log(1024));
  console.log(baseLog);
  return `${(size / 1024 ** baseLog).toFixed(2) * 1}${
    ['kB', 'MB', 'GB', 'TB'][baseLog]
  }`;
}

export default {
  columns: [
    { title: 'ID', field: 'ID' },
    { title: 'Name', field: 'NAME' },
    { title: 'Cluster', field: 'CLUSTER' },
    { title: 'RVMs', field: 'HOST_SHARE.RUNNING_VMS', type: 'numeric' },
    {
      title: 'Allocated CPU',
      field: 'HOST_SHARE.MAX_CPU',
      type: 'numeric',
      render: row => {
        const usage = parseInt(row?.HOST_SHARE?.CPU_USAGE, 10);
        const max = parseInt(row?.HOST_SHARE?.MAX_CPU, 10);
        const ratio = Math.round((usage / max) * 100);
        const info = `${format(usage)} / ${format(max)} (${ratio}%)`;
        return statusBar(info, ratio);
      }
    },
    {
      title: 'Allocated MEM',
      field: 'HOST_SHARE.MAX_MEM',
      type: 'numeric',
      render: row => {
        console.log(row);
        const usage = parseInt(row?.HOST_SHARE?.MEM_USAGE, 10);
        const max = parseInt(row?.HOST_SHARE?.MAX_MEM, 10);
        const ratio = Math.round((usage / max) * 100);
        const info = `${format(usage)} / ${format(max)} (${ratio}%)`;
        return statusBar(info, ratio);
      }
    },
    {
      title: 'Status',
      field: 'STATE',
      lookup: {
        '0': 'INIT',
        '1': 'UPDATE',
        '2': 'ON',
        '3': 'ERROR',
        '4': 'DISABLED',
        '5': 'RETRY',
        '6': 'INIT',
        '7': 'DISABLED',
        '8': 'OFF'
      }
    },
    { title: 'IM MAD', field: 'IM_MAD' },
    { title: 'VM MAD', field: 'VM_MAD' }
  ]
};
